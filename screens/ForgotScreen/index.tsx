import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Grid, Typography } from "@mui/material";
import FormattedMessage from "theme/FormattedMessage";
import ForgotForm from "./ForgotForm";
import messages from "./messages";
import { BoxWrapper } from "./Styled";
import { LOGINBG } from "configs";
import {
  useForgotPassword,
  usePasswordVerification,
  useResetPassword,
} from "providers/ForgotPassword";
import CodeForm from "./CodeForm";
import ResetPassword from "./ResetPassword";

const ForgotScreen: React.FC = () => {
  const forgotPasswordApi = useForgotPassword();
  const verificationCode = usePasswordVerification();
  const resetPasswordApi = useResetPassword();
  const router = useRouter();

  const [forgotToken, setForgotToken] = useState<string | null>(null);
  const [resetCode, setResetCode] = useState<string | null>(null);


  //   const handleForgotPassord = useCallback(async (data: {email: string}) => {
  //  forgotPasswordApi.mutateAsync(data);

  //    setForgotToken(forgotapiresponse.token)
  //   }, [forgotPasswordApi]);

  const handleForgotPassord = useCallback(
    (data: { email: string }) => {
      forgotPasswordApi.mutateAsync({ email: data.email });
    },
    [forgotPasswordApi],
  );

  const handleVerificationPassord = useCallback(
    (data: { code: string }) => {
      if (forgotToken) {
        verificationCode.mutateAsync({ token: forgotToken, code: data.code });
      }
    },
    [forgotToken, verificationCode],
  );
  

  const handleResetPassword = useCallback(
    (data: { password: string }) => {
      if (resetCode) {
        resetPasswordApi.mutateAsync({
          token: resetCode,
          password: data.password,
        });
      }
    },
    [resetCode, resetPasswordApi],
  );

  //Forgot Form
  useEffect(() => {
    if (forgotPasswordApi.isSuccess) {
      setForgotToken(forgotPasswordApi?.data?.token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forgotPasswordApi.isSuccess]);

  //Verification Form

  useEffect(() => {
    if (verificationCode.isSuccess) {
      setResetCode(verificationCode?.data?.token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verificationCode.isSuccess]);

  //ResetPassword
  useEffect(() => {
    if (resetPasswordApi.isSuccess) {
    router.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetPasswordApi.isSuccess]);

  function RenderScreen() {
    let screen;
    switch (true) {
      case forgotToken === null:
       screen = <ForgotForm onSubmit={handleForgotPassord} />;
        break;
        case forgotToken !== null && resetCode !== null:
         screen = <ResetPassword onSubmit={handleResetPassword} />;
          break;
      case forgotToken !== null:
       screen = <CodeForm onSubmit={handleVerificationPassord} />;
        break;


      default:
       screen = <ForgotForm onSubmit={handleForgotPassord} />;
    }

    return <>{screen}</>;
  }

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
      }}
    >
      <Box
        sx={{
          width: "80%",
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          height: { md: "85vh", xs: "45vh" },
        }}
      >
        <Box sx={{ width: { md: "45%", xs: "100%" }, height: "inherit" }}>
          <BoxWrapper
            sx={{
              backgroundImage: `url(${LOGINBG})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              // height: { xs: "450px", md: "660px" },
              height: "inherit",
              position: "relative",
            }}
          >
            <Box minWidth={"100%"}>
              <Typography
                margin={"0 !important"}
                color={(theme) => theme.palette.primary.light}
                variant="h5"
                component="h5"
                mb={2}
              >
                <FormattedMessage {...messages.title} />
              </Typography>
              <Typography
                color={(theme) => theme.palette.primary.light}
                variant="subtitle2"
                component="p"
                mb={5}
              >
                <FormattedMessage {...messages.description} />
              </Typography>
            </Box>
            <Box>
              <Typography
                alignSelf={"end"}
                color={(theme) => theme.palette.primary.main}
                variant="subtitle2"
                component="p"
                sx={{
                  marginBottom: { xs: "-7%", md: "-3%" },
                  textAlign: "center",
                  fontWeight: "400",
                }}
              >
                <FormattedMessage {...messages.loginFooter} />
              </Typography>
            </Box>
          </BoxWrapper>
        </Box>
        <Box
          sx={{
            background: (theme) => theme.palette.primary.light,
            padding: { md: "40px 40px 20px", xs: "20px 20px 20px 10px" },
            width: { md: "55%", xs: "100%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "inherit",
            boxShadow: (theme) => theme.shadow.boxShadow,
          }}
        >
          <BoxWrapper
            sx={{
              height: { xl: "inherit" },
              alignItems: { xl: "center" },
              justifyContent: { xl: "center" },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box sx={{ float: "right", mt: -4 }}></Box>
              <Box sx={{ textAlign: "center" }}></Box>
              <Box>
                {/* {forgotToken === null && <ForgotForm onSubmit={handleForgotPassord} />}
                {forgotToken !== null && <CodeForm onSubmit={handleVerificationPassord} />}
                {resetCode && <p>thired</p>}
                 */}
                <RenderScreen />
              </Box>
            </Box>
          </BoxWrapper>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotScreen;
