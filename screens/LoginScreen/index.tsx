import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FormattedMessage from "theme/FormattedMessage";
import LoginForm from "./LoginForm";
import messages from "./messages";
import { BoxWrapper } from "./Styled";
import { LOGINBG } from "configs";

const LoginScreen: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        padding: { xs: "30px", md: "150px 100px" },
      }}
    >
      <Grid item xs={12} md={6}>
        <BoxWrapper
          sx={{
            backgroundImage: `url(${LOGINBG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: { xs: "450px", md: "660px" },
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
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          background: (theme) => theme.palette.primary.light,
          padding: { md: "60px 40px 60px 20px", xs: "20px 20px 20px 10px" },
          height: { md: "660px", xs: "500px" },
          boxShadow: (theme) => theme.shadow.boxShadow,
        }}
      >
        <BoxWrapper>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ float: "right", mt: -4 }}></Box>
            <Box sx={{ textAlign: "center" }}></Box>
            <Box>
              <LoginForm />
            </Box>
          </Box>
        </BoxWrapper>
      </Grid>
    </Grid>
  );
};

export default LoginScreen;
