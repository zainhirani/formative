import {useMemo} from 'react'
import QuizQuestionFormat from "components/QuizQuestionFormat"
import { useQuestionAttempQuestion } from "providers/QuestionAttempt"

interface IQuestionDrawerProps {
    isOpen:boolean,
    onClose:(e?:any) => void,
    questionId: string
}

const QuestionDrawer = ({isOpen,onClose,questionId}:IQuestionDrawerProps) => {
    const attemptQuestionListing = useQuestionAttempQuestion({questionId:questionId})

    const quizOptions = useMemo(() => {
    if (attemptQuestionListing?.data?.question?.option) {
      const jsonData = JSON.parse(attemptQuestionListing?.data?.question?.option);
      return jsonData.map((item: any) => ({
        value: item.key,
        optionText: item.value,
      }));
    }
  }, [attemptQuestionListing?.data]);

  const answerStats = useMemo(() => {
    if(attemptQuestionListing?.data?.optionStatistics){
        return Object.entries(attemptQuestionListing?.data?.optionStatistics).map(([key, value]) => ({ key, value }));
    }
  },[attemptQuestionListing?.data])
    return (
        <>
         <QuizQuestionFormat
        title="Dr. Kevin B. this is how Question 10/2 appears to student"
        isOpen={isOpen}
         onClose={onClose}
        isShowScoreBar={false}
        quizOptions={quizOptions}
        questionContext={
            attemptQuestionListing?.data?.question?.detail
        }
        actualQuestion={attemptQuestionListing?.data?.question?.title}
        difficulty={attemptQuestionListing?.data?.difficulty}
        avgAttemps={attemptQuestionListing?.data?.averageAttempts}
        avgTime={attemptQuestionListing?.data?.averageTime}
        questionIdNum={attemptQuestionListing?.data?.question?.id}
        loading={attemptQuestionListing?.isFetching}
        answerStats={answerStats}
        media={attemptQuestionListing?.data?.question?.media}
        
      />
        </>
    )
}

export default QuestionDrawer