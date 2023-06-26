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
import { useQuizById } from "providers/teacher/TeacherQuiz";
import { isStringNotURL, removeHTMLTags } from "utils";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { useQueryClient } from "react-query";

const DraftQuizScreen: NextPage = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<any>([]);
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

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (editPage) {
      if (selectedQuestions?.length == 0) {
        // console.log(isSuccess, "isSuccess");
        if (isSuccess) {
          setSelectedQuestions(quizByIdData?.questions);
        }
      }
    }
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
      name: quizEditId ? quizByIdData?.name : null,
      reviewable: quizEditId ? quizByIdData?.reviewable : null,
      courseId: {
        value: quizEditId ? quizByIdData?.courses?.id : null,
        label: quizEditId ? quizByIdData?.courses?.course_name : null,
      },
      folderId: {
        value: quizEditId ? quizByIdData?.folders?.id : null,
        label: quizEditId ? quizByIdData?.folders?.name : null,
      },
      timeLimitPerSec: quizEditId ? quizByIdData?.timeLimitPerSec : null,
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
      // firstName: registerDetail.data?.first_name || null,
    },
    // validationSchema,
    enableReinitialize: true,
    onSubmit,
  });
  // console.log(quizEditId ? quizByIdData?.start_time : null, "quizByIdData");

  function removeQuestionById(idToRemove: any) {
    setSelectedQuestions((prevQuestions: any) =>
      prevQuestions.filter((question: any) => question.id !== idToRemove),
    );
  }

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
      field: "diff",
      headerName: "Difficulty",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "detail",
      headerName: "Details",
      minWidth: 200,
      flex: 1,
      renderCell: (data: any) => removeHTMLTags(data.row.detail),
    },
    {
      field: "add",
      headerName: "",
      minWidth: 50,
      flex: 1,
      renderCell: (data: any) => {
        const selectedRow = data?.row || [];
        const selectedRowId = data?.row?.id;
        return (
          <>
            {!selectedQuestions.includes(selectedRow) ? (
              <IconButton
                onClick={() => {
                  setSelectedQuestions([...selectedQuestions, selectedRow]);
                }}
              >
                <AddCircleOutlineOutlinedIcon
                  sx={{ fontSize: "20px", color: "#8C2531", cursor: "pointer" }}
                />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  removeQuestionById(selectedRowId);
                }}
              >
                <RemoveCircleOutlineOutlinedIcon
                  sx={{ fontSize: "20px", color: "#8C2531", cursor: "pointer" }}
                />
              </IconButton>
            )}
          </>
        );
      },
    },
  ];
  // console.log(selectedQuestions, "selectedQuestions");
  return (
    <Box>
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
          selectedQuestions={selectedQuestions}
          setSelectedQuestions={setSelectedQuestions}
          COLUMNS_CONFIG={COLUMNS_CONFIG}
        />
      </form>
    </Box>
  );
};

export default DraftQuizScreen;
