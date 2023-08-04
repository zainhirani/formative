// @ts-nocheck
import { useMemo } from "react";
import QuizQuestionFormat from "components/QuizQuestionFormat";
import { useQuestionAttempQuestion } from "providers/QuestionAttempt";
import { useAuthContext } from "contexts/AuthContext";
import { useRegisterDetail } from "providers/Auth";

interface IQuestionDrawerProps {
  isOpen: boolean;
  onClose: (e?: any) => void;
  questionId: string;
}

const QuestionDrawer = ({
  isOpen,
  onClose,
  questionId,
}: IQuestionDrawerProps) => {
  // const { currentUser } = useAuthContext();
  const currentUser = useRegisterDetail();
  const attemptQuestionListing = useQuestionAttempQuestion({
    questionId: questionId,
  });

  const quizOptions = useMemo(() => {
    if (attemptQuestionListing?.data?.question?.option) {
      const jsonData = JSON.parse(
        attemptQuestionListing?.data?.question?.option,
      );
      return jsonData.map((item: any) => ({
        value: item.key,
        optionText: item.value,
      }));
    }
  }, [attemptQuestionListing?.data]);

  const answerStats = useMemo(() => {
    if (attemptQuestionListing?.data?.optionStatistics) {
      return Object.entries(attemptQuestionListing?.data?.optionStatistics).map(
        ([key, value]) => ({ key, value }),
      );
    }
  }, [attemptQuestionListing?.data]);
  return (
    <>
      <QuizQuestionFormat
        title={` ${currentUser?.data?.name} this is how Question ${attemptQuestionListing?.data?.question?.id} appears to student`}
        isOpen={isOpen}
        onClose={onClose}
        isShowScoreBar={false}
        quizOptions={quizOptions}
        questionContext={attemptQuestionListing?.data?.question?.detail}
        actualQuestion={attemptQuestionListing?.data?.question?.title}
        difficulty={parseInt(
          attemptQuestionListing?.data?.difficulty,
          10,
        )?.toFixed(2)}
        avgAttemps={attemptQuestionListing?.data?.averageAttempts}
        avgTime={attemptQuestionListing?.data?.averageTime}
        questionIdNum={attemptQuestionListing?.data?.question?.id}
        loading={attemptQuestionListing?.isFetching}
        answerStats={answerStats}
        media={attemptQuestionListing?.data?.question?.media}
        question={attemptQuestionListing?.data?.question}
        quizAnswers={attemptQuestionListing?.data?.question?.answer}
      />
    </>
  );
};

export default QuestionDrawer;
