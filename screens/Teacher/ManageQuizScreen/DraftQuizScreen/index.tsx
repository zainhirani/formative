import React, { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import PageLayout from "components/PageLayout";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CusQuizDetails from "./CusQuizDetails";
import TableSection from "./tableSection";
import { Box } from "@mui/material";
import FiltersSection from "./filters";
import { Form, Formik, useFormik } from "formik";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { TextField } from "@mui/material";
import { useQuizById } from "providers/Teacher/TeacherQuiz";

const DraftQuizScreen: NextPage = () => {
  // console.log("Draft Main file");
  const [nameInput, setNameInput] = useState("");
  const router = useRouter();
  const { id: quizEditId } = router.query;
  const { data: quizByIdData } = useQuizById({ id: quizEditId });
  const quizUpdate = "useQuizUpdate()";

  // useEffect(() => {
  //   if (quizUpdate.isSuccess) {
  //     enqueueSnackbar("Success", {
  //       variant: "success",
  //     });
  //   }
  // }, [quizUpdate.isSuccess]);

  // useEffect(() => {
  //   if (quizUpdate.isError) {
  //     enqueueSnackbar("Error", {
  //       variant: "error",
  //     });
  //   }
  // }, [quizUpdate.isError]);

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
      name: "",
      reviewable: "",
      courseId: {
        value: "",
        label: "",
      },
      folderId: {
        value: "",
        label: "",
      },
      timeLimitPerSec: "",
      status: {
        value: "",
        label: "",
      },
      scoringId: {
        value: "",
        label: "",
      },
      start_time: "",
      end_time: "",
      questionsId: "",
      // firstName: registerDetail.data?.first_name || "",
    },
    // validationSchema,
    enableReinitialize: true,
    onSubmit,
  });
  console.log(values, "values");

  // Quiz Data By id Memorize
  const quizDataById = React.useMemo(() => {
    return quizByIdData;
  }, [quizByIdData]);
  // Quiz Data By id Memorize

  useEffect(() => {
    console.log(quizByIdData);
    if (quizByIdData?.id) {
      setFieldValue("name", quizByIdData.name);
      setFieldValue("reviewable", quizByIdData.reviewable);
      setFieldValue("courseId", {
        value: quizByIdData?.courses?.id,
        label: quizByIdData?.courses?.course_name,
      });
      setFieldValue("folderId", {
        value: quizByIdData?.folders?.id,
        label: quizByIdData?.folders?.name,
      });
      setFieldValue("timeLimitPerSec", quizByIdData.timeLimitPerSec);
      setFieldValue("status", {
        value: quizByIdData.status,
        label: quizByIdData.status,
      });
      setFieldValue("scoringId", {
        value: quizByIdData?.scoring?.id,
        label: quizByIdData?.scoring?.scheme,
      });
      setFieldValue("start_time", quizByIdData.start_time);
      setFieldValue("end_time", quizByIdData.end_time);
      setFieldValue("questionsId", quizByIdData.questions);
    }
  }, [quizByIdData]);

  // Filters Com
  const mValuesForName = React.useMemo(() => {
    return {
      name: values.name,
    };
  }, [values.name]);

  const mValuesForCourseId = React.useMemo(() => {
    return {
      courseId: values.courseId,
    };
  }, [values.courseId]);
  const mValuesForFolderId = React.useMemo(() => {
    return {
      folderId: values.folderId,
    };
  }, [values.folderId]);
  const mValuesForStatus = React.useMemo(() => {
    return {
      status: values.status,
    };
  }, [values.status]);
  // Filters Com

  // CusQuizDetails Com
  const mValuesForScoringId = React.useMemo(() => {
    return {
      scoringId: values.scoringId,
    };
  }, [values.scoringId]);

  const mValuesForReviewable = React.useMemo(() => {
    return {
      reviewable: values.reviewable,
    };
  }, [values.reviewable]);

  const mValuesForTimeLimitPerSec = React.useMemo(() => {
    return {
      timeLimitPerSec: values.timeLimitPerSec,
    };
  }, [values.timeLimitPerSec]);
  // CusQuizDetails Com

  // TableSection Com
  const mValuesForStartTime = React.useMemo(() => {
    return {
      start_time: values.start_time,
    };
  }, [values.start_time]);

  const mValuesForEndTime = React.useMemo(() => {
    return {
      end_time: values.end_time,
    };
  }, [values.end_time]);

  const mValues = React.useMemo(() => {
    return values;
  }, [values]);
  // TableSection Com

  return (
    // <PageLayout title="All Quiz" icon={<ArrowForwardIcon />}>
    <Box>
      <form onSubmit={handleSubmit}>
        <FiltersSection
          setFieldValue={setFieldValue}
          // mValuesForName={mValuesForName}
          // mValuesForCourseId={mValuesForCourseId}
          // mValuesForFolderId={mValuesForFolderId}
          // mValuesForStatus={mValuesForStatus}
          values={mValues}
          setNameInput={setNameInput}
          nameInput={nameInput}
          handleBlur={handleBlur}
          handleChange={handleChange}
          quizDataById={quizDataById}
        />
        <CusQuizDetails
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          mValuesForScoringId={mValuesForScoringId}
          mValuesForReviewable={mValuesForReviewable}
          mValuesForTimeLimitPerSec={mValuesForTimeLimitPerSec}
          quizDataById={quizDataById}
        />
        <TableSection
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          mValuesForStartTime={mValuesForStartTime}
          mValuesForEndTime={mValuesForEndTime}
          quizDataById={quizDataById}
        />
      </form>
    </Box>
    // </PageLayout>
  );
};

export default DraftQuizScreen;
