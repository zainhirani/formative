import { createContext, useState, useContext } from "react";

interface AppStateContextType {
  state: boolean;
  setState: (value: boolean) => void;
  quizQuesIdState: number | null;
  setQuizQuesIdState: (value: any) => void;
}

const AppStateContext = createContext<AppStateContextType>({
  state: false,
  setState: () => {},
  quizQuesIdState: null,
  setQuizQuesIdState: () => {},
});

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider: React.FC = (props: any) => {
  const [state, setState] = useState(false);
  const [quizQuesIdState, setQuizQuesIdState] = useState(null);
  const { children } = props;

  return (
    <AppStateContext.Provider
      value={{ state, setState, quizQuesIdState, setQuizQuesIdState }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
