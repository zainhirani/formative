// @ts-nocheck
import React, { useState, useMemo } from "react";
import SideDrawer from "components/Drawer";
import { useAppState } from "contexts/AppStateContext";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { Box, IconButton, MenuItem, Select, Typography } from "@mui/material";
import { BoxWrapper, SelectBoxWrapper } from "./Styled";
import CustomDataGrid from "components/CustomDataGrid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  categorySelect,
  columnsManageQuestion,
  pageSizeManageQuestion,
  rowsManageQuestion,
} from "mock-data/Teacher/ManageQuestion";
import { useSnackbar } from "notistack";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import CustomSelect from "components/CustomSelect/CustomSelect";
import {
  facultySelect,
  folderSelect,
  typeSelect,
} from "mock-data/Teacher/ManageQuestion";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import CancelIcon from "@mui/icons-material/Cancel";
import QuizQuestionFormat from "components/QuizQuestionFormat";
import { UploadQuestions } from "components/UploadQuestions";
import { useAuthContext } from "contexts/AuthContext";
import { useQuestionDetails } from "providers/Teacher_Questions";
import { removeHTMLTags } from "utils";
import { useRegisterDetail } from "providers/Auth";
// import { useQuizQuestionViewId } from "contexts/QuizQuestionViewIdContext";

const DrawerQuestionsDetailSection = () => {
  const { state, setState, quizQuesIdState } = useAppState();
  const { currentUser } = useAuthContext();
  // const currentUser = useRegisterDetail();
  const questionDetails = useQuestionDetails({
    questionId: quizQuesIdState,
  });
  // console.log(questionDetails?.data, "quizQuesIdState?.data");

  const quizOptions = useMemo(() => {
    if (questionDetails?.data?.option) {
      const jsonData = JSON.parse(questionDetails?.data?.option);
      return jsonData.map((item: any) => ({
        value: item.key,
        optionText: item.value,
      }));
    }
  }, [questionDetails?.data]);

  const answerStats = useMemo(() => {
    if (questionDetails?.data?.optionStatistics) {
      return Object.entries(questionDetails?.data?.optionStatistics).map(
        ([key, value]) => ({ key, value }),
      );
    }
  }, [questionDetails?.data]);

  const handleDrawerCloseQuestion = () => {
    setState(false);
  };
  return (
    <>
      <QuizQuestionFormat
        question={questionDetails?.data}
        title={` ${currentUser?.data?.name} this is how Question ${questionDetails?.data?.id} appears to student`}
        isOpen={state}
        onClose={handleDrawerCloseQuestion}
        isShowScoreBar={false}
        quizOptions={quizOptions}
        questionContext={removeHTMLTags(questionDetails?.data?.detail)}
        actualQuestion={questionDetails?.data?.title}
        difficulty={questionDetails?.data?.difficulty}
        avgAttemps={questionDetails?.data?.averageAttempts}
        avgTime={questionDetails?.data?.timelimit}
        questionIdNum={questionDetails?.data?.id}
        loading={questionDetails?.isFetching}
        answerStats={answerStats}
        media={questionDetails?.data?.media}
        quizAnswers={questionDetails?.data?.answer}
      />
    </>
  );
};

export default DrawerQuestionsDetailSection;
