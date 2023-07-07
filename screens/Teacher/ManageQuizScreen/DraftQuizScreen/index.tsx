import React, { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import PageLayout from "components/PageLayout";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CusQuizDetails from "./CusQuizDetails";
import TableSection from "./tableSection";
import { Box, IconButton } from "@mui/material";
import FiltersSection from "./filters";
import { Form, Formik, useFormik } from "formik";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { TextField } from "@mui/material";
import { useQuizById } from "providers/Teacher/TeacherQuiz";
import { isStringNotURL, removeHTMLTags } from "utils";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { useQueryClient } from "react-query";
import { useAppState } from "contexts/AppStateContext";

const DraftQuizScreen: NextPage = () => {
  // const [selectedQuestions, setSelectedQuestions] = useState<any>([]);
  const { selectedQuestions, setSelectedQuestions } = useAppState();
  const [nameInput, setNameInput] = useState("");
  const router = useRouter();
  const { id: quizEditId } = router.query;
  const queryClient = useQueryClient();
  const {
    data: quizByIdData,
    isFetching: quizByIdIsFetching,
    isSuccess,
    refetch,
  } = useQuizById({
    id: quizEditId,
  });
  const editPage = quizEditId == undefined ? false : true;
  function extractIds(arr: any) {
    var ids = [];
    for (var i = 0; i < arr.length; i++) {
      ids.push(arr[i].id);
    }
    return ids;
  }

  useEffect(() => {
    if (editPage) {
      // setSelectedQuestions([]);
      refetch();
    }
  }, []);

  // console.log(selectedQuestions, "selectedQuestions");
  useEffect(() => {
    if (editPage) {
      // if (selectedQuestions?.length == 0) {
      if (isSuccess) {
        // const questionIds2 = extractIds(selectedQuestions);
        // console.log(questionIds2, "questionIds2");
        // console.log(selectedQuestions, "selectedQuestions");
        // quizByIdData?.questions?.map((item: any) => {
        //   console.log(item?.id, "item?.id");
        //   console.log(
        //     !questionIds2.includes(item?.id),
        //     "!questionIds2.includes(item?.id)",
        //   );
        //   if (!questionIds2.includes(item?.id)) {
        //     setSelectedQuestions([...selectedQuestions, item]);
        //   }
        // });
        // console.log(isSuccess, "start isSuccess");
        setSelectedQuestions(quizByIdData?.questions);

        console.log(quizByIdData?.questions, "quizByIdData?.questions");
        // console.log(isSuccess, "end isSuccess");

        // quizByIdData?.questions?.map((item: any) => {
        // if (!questionIds2.includes(item?.id)) {
        // setSelectedQuestions([...selectedQuestions, item]);
        // }
        // });
      }
      // }
    } else {
      setSelectedQuestions([]);
    }
    // console.log(selectedQuestions, "selectedQuestions");
  }, [editPage, isSuccess]);

  const onSubmit = useCallback((data: any) => {
    // console.log(data, "data");
    // quizUpdate.mutate({
    //   email: data.email,
    //   password: data.password,
    //   username: data.userName,
    //   first_name: data.firstName,
    //   last_name: data.lastName,
    //   nick_name: data.nickName,
    //   gender: data.gender,
    //   rfu_id: data.rfuID,
    //   year_of_graduation: data.graduation,
    //   program: data.program,
    //   birth_place: data.birthPlace,
    // });
  }, []);
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    values,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: quizEditId ? quizByIdData?.name : "",
      reviewable: quizEditId ? quizByIdData?.reviewable : false,
      courseId: {
        value: quizEditId ? quizByIdData?.courses?.id : null,
        label: quizEditId ? quizByIdData?.courses?.course_name : null,
      },
      folderId: {
        value: quizEditId ? quizByIdData?.folders?.id : null,
        label: quizEditId ? quizByIdData?.folders?.name : null,
      },
      timeLimitPerSec: quizEditId ? quizByIdData?.timeLimitPerSec : 0,
      status: {
        value: quizEditId ? quizByIdData?.status : null,
        label: quizEditId ? quizByIdData?.status : null,
      },
      scoringId: {
        value: quizEditId ? quizByIdData?.scoring?.id : null,
        label: quizEditId ? quizByIdData?.scoring?.scheme : null,
      },
      start_time: quizEditId ? quizByIdData?.start_time : null,
      end_time: quizEditId ? quizByIdData?.end_time : null,
      questionsId: quizEditId ? quizByIdData?.questions : null,
    },
    enableReinitialize: true,
    onSubmit,
  });

  function removeQuestionById(idToRemove: any) {
    setSelectedQuestions((prevQuestions: any) =>
      prevQuestions.filter((question: any) => question.id !== idToRemove),
    );
  }
  const questionIds = extractIds(selectedQuestions);
  let COLUMNS_CONFIG = [
    {
      field: "title",
      headerName: "Title",
      minWidth: 130,
      flex: 1,
    },
    {
      field: "id",
      headerName: "ID",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "difficulty",
      headerName: "Difficulty",
      minWidth: 130,
      flex: 1,
    },
    {
      field: "detail",
      headerName: "Details",
      minWidth: 170,
      flex: 1,
      renderCell: (data: any) => removeHTMLTags(data.row.detail),
    },
    {
      field: "add",
      headerName: "",
      minWidth: 80,
      flex: 1,
      headerClass: "addQuesWrap",
      renderCell: (data: any) => {
        const selectedRow = data?.row || [];
        const selectedRowId = data?.row?.id;

        return (
          <>
            {!selectedQuestions.includes(selectedRow) &&
            !questionIds.includes(selectedRowId) ? (
              <IconButton
                onClick={() => {
                  setSelectedQuestions([...selectedQuestions, selectedRow]);
                }}
                sx={{ width: "30px" }}
              >
                <AddCircleOutlineOutlinedIcon
                  sx={{
                    fontSize: "20px",
                    color: "#8C2531",
                    cursor: "pointer",
                    marginRight: "5px",
                    marginLeft: "5px",
                  }}
                />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  removeQuestionById(selectedRowId);
                }}
                sx={{ width: "30px" }}
              >
                <RemoveCircleOutlineOutlinedIcon
                  sx={{
                    fontSize: "20px",
                    color: "#8C2531",
                    cursor: "pointer",
                    marginRight: "5px",
                    marginLeft: "5px",
                  }}
                />
              </IconButton>
            )}
          </>
        );
      },
    },
  ];
  return (
    <Box id="printable-content">
      <form onSubmit={handleSubmit}>
        <FiltersSection
          setFieldValue={setFieldValue}
          values={values}
          setNameInput={setNameInput}
          nameInput={nameInput}
          handleBlur={handleBlur}
          handleChange={handleChange}
          quizByIdData={quizByIdData}
        />
        <CusQuizDetails
          values={values}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          quizByIdData={quizByIdData}
          quizByIdIsFetching={quizByIdIsFetching}
        />
        <TableSection
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          values={values}
          quizByIdData={quizByIdData}
          // selectedQuestions={selectedQuestions}
          // setSelectedQuestions={setSelectedQuestions}
          COLUMNS_CONFIG={COLUMNS_CONFIG}
        />
      </form>
    </Box>
  );
};

export default DraftQuizScreen;
