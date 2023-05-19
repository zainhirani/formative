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
import { AUTH_LOGIN_URL } from "configs";
import { getAuthenticationToken, setAuthenticationHeader } from "services";
import { refreshToken } from "services/auth";
import LocalStorage from "localforage";

interface AuthContextType {
  currentUser: any;
  signOut: () => void;
  signIn: (...args: any) => any;
  signUp: (...args: any) => void;
}

interface AuthContextProps {
  children?: any;
}

const AuthContext = createContext({} as AuthContextType);

const AUTHENTICATION_PATH = [AUTH_LOGIN_URL];
const authToken = LocalStorage.getItem("refresh_token");
const AuthContextProvider: React.FC<AuthContextProps> = ({ children }) => {
  useEffect(() => {
    refreshToken({ refresh_token: authToken })
      .then((res) => {
        if (res.refresh_token !== authToken) {
          router.push("/login");
          LocalStorage.clear();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [authToken]);
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();
  const ref = useRef<string | null>(null);

  const signOut = useCallback(async () => {
    logout({ callbackUrl: "/" });
    router.replace(AUTHENTICATION_PATH[0]!);
    LocalStorage.clear();
  }, [router]);

  const signUp = (email: string, password: string) => {
    console.log("Signed Up");
    router.push("/login");
  };

  const prevToken = getAuthenticationToken();

  const currToken: any = session?.accessToken;
  LocalStorage.setItem("refresh_token", currToken);

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
  if (!session?.user && router.pathname == "/") {
    router.replace(AUTHENTICATION_PATH[0]!);
    return null;
  }
  if (session?.user && ref.current == "/register") {
    router.replace(AUTHENTICATION_PATH[0]!);
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
        currentUser: session?.user,
        signIn,
        signOut,
        signUp,
      }}
    >
      {loading ? null : children}
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
