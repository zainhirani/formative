import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
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

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

const RegisterForm = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { signUp } = useAuthContext();
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = useCallback(async (data: any) => {
    await signUp(data.email, data.password)
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
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit,
  });

  // handleResetPass
  const handleResetPass = (email: string) => {};

  const emailPlaceholder = useFormattedMessage(messages.emailPlaceholder);
  const passwordPlaceholder = useFormattedMessage(messages.passwordPlaceholder);
  const confirmPasswordPlaceholder = useFormattedMessage(
    messages.confirmPasswordPlaceholder,
  );

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
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            label={<FormattedMessage {...messages.confirmPasswordLabel} />}
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            placeholder={confirmPasswordPlaceholder}
            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
            helperText={touched.confirmPassword && errors.confirmPassword}
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
              onChange={(e: SelectChangeEvent) => setRole(e.target.value)}
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
      </Box>
      <Box sx={{ mb: 3 }}></Box>
      <Box>
        <ButtonWrapper type="submit" variant="contained">
          <FormattedMessage {...messages.signUp} />
        </ButtonWrapper>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <FormattedMessage {...messages.textSignIn} />
        <Link href="/login" underline="none">
          <FormattedMessage {...messages.signIn} />
        </Link>
      </Box>
    </form>
  );
};

export default RegisterForm;
