import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import type { NextPage } from "next";
import PageLayout from "components/PageLayout";
import SelectedQuizDetails from "screens/QuizResultScreen/SelectedQuizDetails";

const SelectedQuiz: NextPage = () => {
  return (
    // <PageLayout title="Quiz Results" icon={<HelpRoundedIcon />}>
    <SelectedQuizDetails />
    // </PageLayout>
  );
};

export default SelectedQuiz;
