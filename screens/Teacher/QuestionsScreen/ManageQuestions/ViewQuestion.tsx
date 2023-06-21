import React, { useMemo, useEffect } from "react";
import QuizQuestionFormat from "components/QuizQuestionFormat";
import { useAuthContext } from "contexts/AuthContext";
import { useQuestionDetails } from "providers/Teacher_Questions";
import { removeHTMLTags } from "utils";

interface IQuestionDrawerProps {
  isOpen: boolean;
  onClose: (e?: any) => void;
  questionId: string;
}

const ViewQuestion = ({
  isOpen,
  onClose,
  questionId,
}: IQuestionDrawerProps) => {
  const { currentUser } = useAuthContext();
  const questionDetails = useQuestionDetails({
    questionId: questionId,
  });
  console.log(
    "🚀 ~ file: ViewQuestion.tsx:21 ~ questionDetails:",
    questionDetails,
  );

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
  return (
    <>
      <QuizQuestionFormat
        title={` ${currentUser.name} this is how Question ${questionDetails?.data?.id} appears to student`}
        isOpen={isOpen}
        onClose={onClose}
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

export default ViewQuestion;
