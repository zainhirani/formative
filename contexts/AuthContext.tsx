//@ts-nocheck

import { createContext, useCallback, useContext } from "react";
import { useRouter } from "next/router";
import { Box, CircularProgress } from "@mui/material";
import { signOut as logout, signIn, useSession } from "next-auth/react";
import { AUTH_LOGIN_URL } from "configs";
import { getAuthenticationToken, setAuthenticationHeader } from "services";
import { register } from "services/auth";
// import { FLEET_MANAGEMENT } from "constants/routes";
// import OverlayLoader from "theme/Loader/OverlayLoader";

interface AuthContextType {
  currentUser: any;
  signOut: () => void;
  signIn: (...args: any) => void;
  signUp: (...args: any) => void;
}
interface AuthContextProps {
  children?: any;
}

const AuthContext = createContext({} as AuthContextType);

const AUTHENTICATION_PATH = [AUTH_LOGIN_URL];

const AuthContextProvider: React.FC<AuthContextProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();

  const signUp = (
    email: string,
    password: string,
    username: string,
    first_name: string,
    last_name: string,
    nick_name: string,
    gender: string,
    rfu_id: number,
    year_of_graduation: number,
    program: string,
    birth_place: string,
  ) => {
    register({
      email: email,
      password: password,
      username: username,
      first_name: first_name,
      last_name: last_name,
      nick_name: nick_name,
      gender: gender,
      rfu_id: rfu_id,
      year_of_graduation: year_of_graduation,
      program: program,
      birth_place: birth_place,
    });
  };
  const signOut = useCallback(async () => {
    logout({ callbackUrl: "/" });
    router?.replace(AUTHENTICATION_PATH[0]!);
  }, [router]);

  const prevToken = getAuthenticationToken();
  //@ts-ignore
  const currToken: any = session?.accessToken;

  if (currToken && prevToken !== `Bearer ${currToken}`) {
    setAuthenticationHeader(currToken);
  }

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (
    !!process.browser &&
    (AUTHENTICATION_PATH || "").includes(window?.location?.pathname) &&
    session &&
    session.user &&
    !loading
  ) {
    const params: { pathname: string; query?: { redirectTo: string } } = {
      pathname:
        // @ts-ignore
        "/",
    };
    router.replace(params);
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        signUp,
        currentUser: session?.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthContextConsumer = AuthContext.Consumer;

function useAuthContext(): AuthContextType {
  return useContext(AuthContext);
}

export {
  AuthContext,
  AuthContextProvider,
  AuthContextConsumer,
  useAuthContext,
};
export default AuthContext;
