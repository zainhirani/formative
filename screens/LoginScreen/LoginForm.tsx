import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  InputLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";

import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";

import messages from "./messages";
import { ButtonWrapper } from "./Styled";
import { useAuthContext } from "contexts/AuthContext";
import { useRouter } from "next/router";

const validationSchema = Yup.object().shape({
  user: Yup.string().required().label("User Name"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginForm = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { signIn } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = useCallback(async (data: any) => {
    // await signIn("credentials", {
    //   ...data,
    //   redirect: false,
    // })
    //   .then((userCredential: any) => {
    //     const user = userCredential.user;

    //     if (user) {
    //       enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
    //         variant: "success",
    //       });
    //     } else if (userCredential.error) {
    //       enqueueSnackbar(userCredential.error, {
    //         variant: "error",
    //       });
    //     }
    //   })
    //   .catch((error: any) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //     enqueueSnackbar(errorMessage, {
    //       variant: "error",
    //     });
    //   });
  }, []);

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { user: "", password: "" },
      validationSchema,
      onSubmit,
    });

  // handleResetPass
  const handleResetPass = (user: string) => {};

  const userPlaceholder = useFormattedMessage(messages.userPlaceholder);
  const passwordPlaceholder = useFormattedMessage(messages.passwordPlaceholder);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction={"column"} spacing={3}>
        <Grid item>
          <InputLabel
            sx={{ color: (theme) => theme.palette.text.primary }}
            htmlFor="password"
          >
            <FormattedMessage {...messages.userLabel} />
          </InputLabel>
          <TextField
            id="user"
            name="user"
            type="text"
            value={values.user}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={userPlaceholder}
            error={touched.user && Boolean(errors.user)}
            helperText={touched.user && errors.user}
            autoComplete="off"
            variant="standard"
            fullWidth
          />
        </Grid>

        <Grid item>
          <InputLabel
            sx={{ color: (theme) => theme.palette.text.primary }}
            htmlFor="password"
          >
            <FormattedMessage {...messages.passwordLabel} />
          </InputLabel>
          <Box display={"flex"} position={"relative"}>
            <TextField
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type={showPassword ? "text" : "password"}
              placeholder={passwordPlaceholder}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              autoComplete="off"
              variant="standard"
              fullWidth
            />
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
              sx={{
                position: "absolute",
                right: 0,
                top: "-10%",
                color: (theme) => theme.palette.secondary.dark,
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          margin: "20px 0",
        }}
      >
        <Link
          href="/forgot"
          underline="none"
          color="#8C2531"
          sx={{ textDecoration: "underline" }}
          onClick={() => handleResetPass(values.user)}
        >
          <FormattedMessage {...messages.forgot} />
        </Link>
      </Box>
      <Box sx={{ mb: 3 }}></Box>
      <Box>
        <ButtonWrapper
          disabled={(values.user && values.password) === ""}
          type="submit"
          variant="contained"
        >
          <FormattedMessage {...messages.logIn} />
        </ButtonWrapper>
        <Divider
          sx={{
            marginY: "20px",
            color: (theme) => theme.palette.secondary.dark,
          }}
        >
          <FormattedMessage {...messages.OR} />
        </Divider>
        <ButtonWrapper
          onClick={(e) => {
            e.preventDefault;
            // router.push("/register");
          }}
          sx={{
            color: (theme) => theme.palette.primary.main,
            background: "none",
            boxShadow: "none",
            border: "1px solid #EAEAEA",
            "&:hover": {
              color: (theme) => theme.palette.primary.light,
            },
          }}
          variant="contained"
        >
          <FormattedMessage {...messages.SSO} />
        </ButtonWrapper>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginY: "10px",
        }}
      >
        <FormattedMessage {...messages.textSignUp} />
      </Box>
      <ButtonWrapper
        onClick={(e) => {
          e.preventDefault;
          router.push("/register");
        }}
        sx={{
          color: (theme) => theme.palette.primary.main,
          background: "none",
          boxShadow: "none",
          border: "1px solid #EAEAEA",
          "&:hover": {
            color: (theme) => theme.palette.primary.light,
          },
        }}
        variant="contained"
      >
        <FormattedMessage {...messages.signUp} />
      </ButtonWrapper>
    </form>
  );
};

export default LoginForm;
