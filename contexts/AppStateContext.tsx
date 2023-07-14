import { createContext, useState, useContext } from "react";

interface AppStateContextType {
  state: boolean;
  setState: (value: boolean) => void;
  quizQuesIdState: number | null;
  setQuizQuesIdState: (value: any) => void;
  selectedQuestions: any;
  setSelectedQuestions: (value: any) => void;
  selectedOptions: any;
  setSelectedOptions: (value: any) => void;
  anwserCorrect: any;
  setAnwserCorrect: (value: any) => void;
}

const AppStateContext = createContext<AppStateContextType>({
  state: false,
  setState: () => {},
  quizQuesIdState: null,
  setQuizQuesIdState: () => {},
  selectedQuestions: null,
  setSelectedQuestions: () => {},
  selectedOptions: [],
  setSelectedOptions: () => {},
  anwserCorrect: null,
  setAnwserCorrect: () => {},
});

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider: React.FC = (props: any) => {
  const [state, setState] = useState(false);
  const [quizQuesIdState, setQuizQuesIdState] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState<any>([]);
  const [selectedOptions, setSelectedOptions] = useState<any>([]);
  const [anwserCorrect, setAnwserCorrect] = useState<boolean>(true);
  const { children } = props;

  return (
    <AppStateContext.Provider
      value={{
        state,
        setState,
        quizQuesIdState,
        setQuizQuesIdState,
        selectedQuestions,
        setSelectedQuestions,
        selectedOptions,
        setSelectedOptions,
        anwserCorrect,
        setAnwserCorrect,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
