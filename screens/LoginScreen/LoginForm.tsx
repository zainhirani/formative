import React, { useCallback, useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Box,
  Divider,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
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
import { ButtonWrapper, LoadingButtonWrapper } from "./Styled";
import { useAuthContext } from "contexts/AuthContext";
import { useRouter } from "next/router";
import { TOKEN } from "configs";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("User Name"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginForm = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { signIn } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(async (data: any) => {
    try {
      setLoading(true);

      const response: any = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      setLoading(true);
      if (!response?.ok) {
        setLoading(false);
        throw new Error("Request failed");
      }
      // setLoading(false);
      router.push("/dashboard");
      enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
        variant: "success",
      });
      localStorage.setItem(TOKEN, response?.data.token);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // enqueueSnackbar(errorMessage, {
      //   variant: "error",
      // });
      console.log(errorMessage, "errorMessage");
    }
  }, []);

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema,
      onSubmit,
    });

  // handleResetPass
  const handleResetPass = (email: string) => {};

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
            id="email"
            name="email"
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={userPlaceholder}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
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
          <Box display={"flex"} flexDirection={"column"} position={"relative"}>
            <TextField
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type={showPassword ? "text" : "password"}
              placeholder={passwordPlaceholder}
              error={touched.password && Boolean(errors.password)}
              autoComplete="off"
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            {touched.password && errors.password && (
              <FormHelperText error id="standard-weight-helper-text-password">
                {errors.password}
              </FormHelperText>
            )}
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
        >
          <FormattedMessage {...messages.forgot} />
        </Link>
      </Box>
      <Box sx={{ mb: 3 }}></Box>
      <Box>
        <LoadingButtonWrapper
          disabled={(values.email && values.password) === ""}
          type="submit"
          variant="contained"
          loading={loading}
          loadingPosition="start"
          sx={{
            ".MuiLoadingButton-loadingIndicator": {
              top: "35%",
              left: "35%",
            },
          }}
        >
          <FormattedMessage {...messages.logIn} />
        </LoadingButtonWrapper>
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
