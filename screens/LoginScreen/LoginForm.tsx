import React, { useContext, useCallback, useState } from "react";
import { useRouter } from "next/router";
import {
  Alert,
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Select,
  Switch,
  Zoom,
} from "@mui/material";
import { ArrowForward, Visibility, VisibilityOff } from "@mui/icons-material";
import ErrorIcon from "@mui/icons-material/Error";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext, useAuthContext } from "contexts/AuthContext";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import { ButtonWrapper } from "./Styled";
import { LoadingButton } from "@mui/lab";
import GoogleButton from "theme/GoogleButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  userRole: Yup.string().required().label("UserRole"),
});

const LoginForm = () => {
  const { signIn } = useAuthContext();
  const [error, setError] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");
  const router = useRouter();

  const emailLabel = useFormattedMessage(messages.emailLabel);
  const passwordLabel = useFormattedMessage(messages.passwordLabel);
  const rememberLabel = useFormattedMessage(messages.rememberLabel);

  const onSubmit = useCallback(
    async (data: any) => {
      setShowLoader(true);
      if (error) {
        setError("");
      }
      const resp: any = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      if (role === "teacher") {
        router.push("/teacher");
      } else if (role === "student") {
        router.push("/student");
      } else {
        alert("Please select a role");
      }
      setShowLoader(false);
      if (resp?.error) {
        setError(resp.error);
      }
    },
    [error],
  );

  // use formik

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit,
  });

  const {
    values,
    setFieldValue,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  } = formik;
  const emailPlaceholder = useFormattedMessage(messages.emailPlaceholder);
  const passwordPlaceholder = useFormattedMessage(messages.passwordPlaceholder);
  const userRolePlaceholder = useFormattedMessage(messages.userRolePlaceholder);

  return (
    <>
      <form onSubmit={handleSubmit as any}>
        {error ? (
          <Zoom in>
            <Alert severity="error" sx={{ mb: 4 }}>
              {error}
            </Alert>
          </Zoom>
        ) : null}
        <FormControl sx={{ width: "100%", mb: 5 }}>
          <InputLabel sx={{ color: "#000" }} htmlFor="email">
            {emailLabel}
          </InputLabel>
          <OutlinedInput
            aria-label="email"
            id="email"
            autoFocus
            name="email"
            label={emailLabel}
            value={values.email}
            placeholder={emailPlaceholder}
            autoComplete="off"
            onBlur={handleBlur}
            onChange={handleChange}
            error={formik.submitCount >= 1 ? !!errors?.email : undefined}
            sx={{ mb: 4 }}
          />
          {errors.email && formik.submitCount >= 1 ? (
            <FormHelperText
              id="email"
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 0,
                color: "#ef5350",
              }}
            >
              <ErrorIcon fontSize="small" sx={{ mr: 1 }} />
              {errors?.email}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ width: "100%", mb: 5 }}>
          <InputLabel sx={{ color: "#000" }} htmlFor="email">
            {passwordLabel}
          </InputLabel>
          <OutlinedInput
            aria-label="password"
            id="password"
            name="password"
            label={passwordLabel}
            placeholder={passwordPlaceholder}
            value={values.password}
            autoComplete="off"
            type={showPassword ? "text" : "password"}
            onBlur={handleBlur}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            error={formik.submitCount >= 1 ? !!errors?.password : undefined}
          />
          {errors.password && formik.submitCount >= 1 ? (
            <FormHelperText
              id="email"
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 0,
                color: "#ef5350",
              }}
            >
              <ErrorIcon fontSize="small" sx={{ mr: 1 }} />
              {errors?.password}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ width: "100%", mb: 5 }}>
          <InputLabel sx={{ color: "black" }} id="role">
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
        <FormGroup>
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
            label={rememberLabel}
          />
        </FormGroup>
        <GoogleButton />
        <div
          id="oneTap"
          style={{ position: "absolute", top: "50", right: "0" }}
        />
        <Box sx={{ mt: 3, position: "relative" }}>
          <LoadingButton
            aria-label="login"
            fullWidth
            size="large"
            type="submit"
            endIcon={<ArrowForward />}
            loading={showLoader}
            loadingPosition="end"
            variant="contained"
            sx={{
              height: "56px",
            }}
          >
            <FormattedMessage {...messages.signIn} />
          </LoadingButton>
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
    </>
  );
};

export default LoginForm;
