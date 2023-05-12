import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Select,
  Switch,
  TextField,
} from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";

import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";

import messages from "./messages";
import { ButtonWrapper } from "./Styled";
import { useAuthContext } from "contexts/AuthContext";
import { useRouter } from "next/router";
import GoogleButton from "theme/GoogleButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginForm = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { signIn } = useAuthContext();
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = useCallback(async (data: any) => {
    await signIn("credentials", {
      ...data,
      redirect: false,
    })
      .then((userCredential: any) => {
        const user = userCredential.user;

        if (user) {
          enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
            variant: "success",
          });
        } else if (userCredential.error) {
          enqueueSnackbar(userCredential.error, {
            variant: "error",
          });
        }
        if (role === "teacher") {
          router.push("/teacher");
        } else if (role === "student") {
          router.push("/student");
        }
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        enqueueSnackbar(errorMessage, {
          variant: "error",
        });
      });
  }, []);

  // use formik
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    values,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: { email: "", password: "", rememberMe: false },
    validationSchema,
    onSubmit,
  });

  // handleResetPass
  const handleResetPass = (email: string) => {};

  const emailPlaceholder = useFormattedMessage(messages.emailPlaceholder);
  const passwordPlaceholder = useFormattedMessage(messages.passwordPlaceholder);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction={"column"} spacing={5}>
        <Grid item>
          <TextField
            id="email"
            name="email"
            label={<FormattedMessage {...messages.emailLabel} />}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={emailPlaceholder}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            autoComplete="off"
          />
        </Grid>

        <Grid item>
          <TextField
            id="password"
            name="password"
            label={<FormattedMessage {...messages.passwordLabel} />}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type={showPassword ? "text" : "password"}
            placeholder={passwordPlaceholder}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            autoComplete="off"
          />
        </Grid>
        <Grid item>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel
              id="roleSelect"
              sx={{ color: (theme) => theme.palette.primary.dark }}
            >
              Role
            </InputLabel>
            <Select
              labelId="role"
              id="roleSelect"
              value={role}
              label="Role"
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="teacher">Teacher</MenuItem>
              <MenuItem value="student">Student</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <FormControlLabel
          control={
            <Switch
              id="rememberMe"
              name="rememberMe"
              checked={values.rememberMe}
              onChange={(e) =>
                setFieldValue("rememberMe", e.target.checked, true)
              }
            />
          }
          label={<FormattedMessage {...messages.rememberLabel} />}
        />
        <Link
          href="#"
          underline="none"
          color="secondary"
          onClick={() => handleResetPass(values.email)}
        >
          <FormattedMessage {...messages.forgot} />
        </Link>
      </Box>
      <Box sx={{ mb: 3 }}>
        <GoogleButton />
      </Box>
      <Box>
        <ButtonWrapper type="submit" variant="contained">
          <FormattedMessage {...messages.signIn} />
        </ButtonWrapper>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <FormattedMessage {...messages.textSignUp} />
        <Link href="/register" underline="none">
          <FormattedMessage {...messages.signUp} />
        </Link>
      </Box>
    </form>
  );
};

export default LoginForm;
