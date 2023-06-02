import React from "react";
import PageLayout from "components/PageLayout";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import QuizesListing from "./QuizesListing";

const QuizResultScreen = () => {
  return (
    <PageLayout title="Quiz Results" icon={<HelpRoundedIcon />}>
      <QuizesListing />
    </PageLayout>
  );
};

export default QuizResultScreen;
