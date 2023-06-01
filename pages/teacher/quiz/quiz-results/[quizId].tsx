import type { NextPage } from "next";
import SelectedQuizDetails from "screens/QuizResultScreen/SelectedQuizDetails";
import PageLayout from "components/PageLayout";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

const SelectedQuiz: NextPage = () => {
  return (
    <PageLayout title="Quiz Results" icon={<HelpRoundedIcon />}>
      <SelectedQuizDetails />
    </PageLayout>
  );
};

export default SelectedQuiz;
