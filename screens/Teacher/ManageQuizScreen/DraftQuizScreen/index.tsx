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
  // console.log(values, "values");
  return (
    // <PageLayout title="All Quiz" icon={<ArrowForwardIcon />}>
    <Box>
      <form onSubmit={handleSubmit}>
        <FiltersSection
          setFieldValue={setFieldValue}
          values={values}
          setNameInput={setNameInput}
          nameInput={nameInput}
          handleBlur={handleBlur}
          handleChange={handleChange}
          quizDataById={quizByIdData}
        />
        <CusQuizDetails
          values={values}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          quizDataById={quizByIdData}
        />
        <TableSection
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          values={values}
          quizDataById={quizByIdData}
        />
      </form>
    </Box>
    // </PageLayout>
  );
};

export default DraftQuizScreen;
