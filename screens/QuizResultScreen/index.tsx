import React from "react";
import PageLayout from "components/PageLayout";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { Box } from "@mui/material";
import QuizQuestionFormat from "components/QuizQuestionFormat";

const QuizResultScreen = () => {
  return (
    <PageLayout title="Quiz Results" icon={<HelpRoundedIcon />}>
      <QuizQuestionFormat />
    </PageLayout>
  );
};

export default QuizResultScreen;
