import type { NextPage } from "next";
import { useRouter } from "next/router";
import EditQuestion from "screens/Teacher/QuestionsScreen/CreateNew";

const QuestionCreate: NextPage = () => {
  let router = useRouter();
  return <EditQuestion qId={router.query.id} revision={true} />;
};

export default QuestionCreate;
