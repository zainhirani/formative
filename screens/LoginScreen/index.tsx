import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FormattedMessage from "theme/FormattedMessage";
import LoginForm from "./LoginForm";
import messages from "./messages";
import { BoxWrapper } from "./Styled";
import { LOGINBG } from "configs";

const LoginScreen: React.FC = () => {
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
        <Box sx={{ width: { md: "48%", xs: "100%" }, height: "inherit" }}>
          <BoxWrapper
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              backgroundImage: `url(${LOGINBG})`,
              backgroundRepeat: "no-repeat",
              height: "inherit",
              position: "relative",
              backgroundPosition: "bottom center",
              backgroundSize: "cover",
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: { md: "0px 40px", xs: "20px 20px 20px 10px" },
            width: { md: "52%", xs: "100%" },
            height: { md: "inherit", xs: "max-content" },

            boxShadow: (theme) => theme.shadow.boxShadow,
            borderEndEndRadius: (theme) => theme.borderRadius.radius1,
            borderStartEndRadius: (theme) => theme.borderRadius.radius1,
          }}
        >
          <BoxWrapper
            sx={{
              height: { xl: "inherit" },
              alignItems: { xl: "center" },
              justifyContent: { xl: "center" },
              padding: { xs: "20px" },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box sx={{ float: "right", mt: -4 }}></Box>
              <Box sx={{ textAlign: "center" }}></Box>
              <Box>
                <LoginForm />
              </Box>
            </Box>
          </BoxWrapper>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginScreen;
