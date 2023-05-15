import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FormattedMessage from "theme/FormattedMessage";
import RegisterForm from "./RegisterForm";
import messages from "./messages";
import { BoxWrapper } from "./Styled";

const RegisterScreen: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={6} sx={{ display: { xs: "none", md: "block" } }}>
        <BoxWrapper
          sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
        >
          <img
            src="https://collax-react.netlify.app/assets/img/contact/login.png"
            alt=""
          />
        </BoxWrapper>
      </Grid>
      <Grid item xs={12} md={6}>
        <BoxWrapper>
          <Box sx={{ width: "80%" }}>
            <Box sx={{ float: "right", mt: -4 }}></Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h3" component="h3" mb={2}>
                <FormattedMessage {...messages.title} />
              </Typography>
              <Typography variant="subtitle2" component="p" mb={5}>
                <FormattedMessage {...messages.description} />
              </Typography>
            </Box>
            <Box>
              <RegisterForm />
            </Box>
          </Box>
        </BoxWrapper>
      </Grid>
    </Grid>
  );
};

export default RegisterScreen;
