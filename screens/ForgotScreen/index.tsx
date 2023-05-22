import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FormattedMessage from "theme/FormattedMessage";
import ForgotForm from "./ForgotForm";
import messages from "./messages";
import { BoxWrapper } from "./Styled";
import { LOGINBG } from "configs";

const ForgotScreen: React.FC = () => {
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
                <ForgotForm />
              </Box>
            </Box>
          </BoxWrapper>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotScreen;
