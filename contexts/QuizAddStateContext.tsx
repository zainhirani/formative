import { createContext, useState, useContext } from "react";

interface QuizAddStateContextType {
  title: string;
  setTitle: (value: any) => void;
  reviewable: boolean;
  setReviewable: (value: any) => void;
  courseId: any;
  setCourseId: (value: any) => void;
  folderId: any;
  setFolderId: (value: any) => void;
  timeLimitPerSec: number;
  setTimeLimitPerSec: (value: any) => void;
  status: any;
  setStatus: (value: any) => void;
  scoringId: any;
  setScoringId: (value: any) => void;
  start_time: any;
  setStart_time: (value: any) => void;
  end_time: any;
  setEnd_time: (value: any) => void;
  questionsId: any;
  setQuestionsId: (value: any) => void;
}

const QuizAddStateContext = createContext<QuizAddStateContextType>({
  title: "",
  setTitle: () => {},
  reviewable: false,
  setReviewable: () => {},
  courseId: null,
  setCourseId: () => {},
  folderId: null,
  setFolderId: () => {},
  timeLimitPerSec: 0,
  setTimeLimitPerSec: () => {},
  status: null,
  setStatus: () => {},
  scoringId: null,
  setScoringId: () => {},
  start_time: null,
  setStart_time: () => {},
  end_time: null,
  setEnd_time: () => {},
  questionsId: null,
  setQuestionsId: () => {},
});

export const useQuizAddState = () => useContext(QuizAddStateContext);

export const QuizAddStateProvider: React.FC = (props: any) => {
  const [title, setTitle] = useState("");
  const [reviewable, setReviewable] = useState(false);
  const [courseId, setCourseId] = useState(null);
  const [folderId, setFolderId] = useState(null);
  const [timeLimitPerSec, setTimeLimitPerSec] = useState(0);
  const [status, setStatus] = useState(null);
  const [scoringId, setScoringId] = useState(null);
  const [start_time, setStart_time] = useState(null);
  const [end_time, setEnd_time] = useState(null);
  const [questionsId, setQuestionsId] = useState(null);
  const { children } = props;

  return (
    <QuizAddStateContext.Provider
      value={{
        title,
        setTitle,
        reviewable,
        setReviewable,
        courseId,
        setCourseId,
        folderId,
        setFolderId,
        timeLimitPerSec,
        setTimeLimitPerSec,
        status,
        setStatus,
        scoringId,
        setScoringId,
        start_time,
        setStart_time,
        end_time,
        setEnd_time,
        questionsId,
        setQuestionsId,
      }}
    >
      {children}
    </QuizAddStateContext.Provider>
  );
};
