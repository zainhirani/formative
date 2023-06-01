import { createContext, useState, useContext } from "react";

interface AppStateContextType {
  state: boolean;
  setState: (value: boolean) => void;
}

const AppStateContext = createContext<AppStateContextType>({
  state: false,
  setState: () => {},
});

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider: React.FC = (props: any) => {
  const [state, setState] = useState(false);
  const { children } = props;

  return (
    <AppStateContext.Provider value={{ state, setState }}>
      {children}
    </AppStateContext.Provider>
  );
};
