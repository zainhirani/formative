//@ts-nocheck

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { useRouter } from "next/router";
import { Box, CircularProgress } from "@mui/material";
import { signOut as logout, signIn, useSession } from "next-auth/react";
import { AUTH_LOGIN_URL, AUTH_SIGNUP_URL, TOKEN } from "configs";
import { getAuthenticationToken, setAuthenticationHeader } from "services";
import { Register } from "providers/Auth/types";
// import { FLEET_MANAGEMENT } from "constants/routes";
// import OverlayLoader from "theme/Loader/OverlayLoader";

interface AuthContextType {
  currentUser: Register.Fields;
  signOut: () => void;
  signIn: (...args: any) => void;
}
interface AuthContextProps {
  children?: any;
}

const AuthContext = createContext({} as AuthContextType);

const AUTHENTICATION_PATH = [AUTH_LOGIN_URL,AUTH_SIGNUP_URL];

const AuthContextProvider: React.FC<AuthContextProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();
  const ref = useRef();

  useEffect(() => {
    if (!session?.accessToken && !localStorage.getItem(TOKEN)) {
      router.replace(AUTHENTICATION_PATH[0]!);
      return null;
    }
    if (
      (session?.user || localStorage.getItem(TOKEN)) &&
      (router.pathname.includes("/login") ||
        router.pathname.includes("/register"))
    ) {
      router.replace("/");
      return null;
    }
  }, []);

  const signOut = useCallback(async () => {
    logout({ callbackUrl: "/login" });
    localStorage.clear();
    router?.replace(AUTHENTICATION_PATH[0]!);
  }, [router]);

  const prevToken = getAuthenticationToken();
  //@ts-ignore
  const currToken: any = session?.accessToken;

  async function setTokenFunction() {
    if (typeof window !== "undefined") {
      localStorage.setItem(TOKEN, session?.accessToken);
    }
  }
  setTokenFunction();
  async function getTokenFunction() {
    if (typeof window !== "undefined") {
      const getToken = localStorage.getItem(TOKEN);
      setAuthenticationHeader(getToken);
    }
  }

  if (router.pathname.includes("register")) {
    setInterval(() => {
      getTokenFunction();
    }, 3000);
  }
  getTokenFunction();

  if (currToken && prevToken !== `Bearer ${currToken}`) {
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

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
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
