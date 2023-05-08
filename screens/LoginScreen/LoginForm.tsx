import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "contexts/AuthContext";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import { ButtonWrapper } from "./Styled";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  userRole: Yup.string().required().label("UserRole"),
});

const LoginForm = () => {
  const [userRole, setUserRole] = useState("");
  const [role, setRole] = useState("");
  const router = useRouter();
  const selectHandleChange = (event: SelectChangeEvent) => {
    setUserRole(event.target.value as string);
  };
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { email: "", password: "", userRole: "" },
      validationSchema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      },
    });

  // handleResetPass
  const handleResetPass = (email: string) => {};
  const handleSubmitHandler = (e) => {
    e.preventDefault();
    if (role === "teacher") {
      router.push("/teacher");
    } else if (role === "student") {
      router.push("/student");
    } else {
      alert("Please select a role");
    }
  };

  const emailPlaceholder = useFormattedMessage(messages.emailPlaceholder);
  const passwordPlaceholder = useFormattedMessage(messages.passwordPlaceholder);
  const userRolePlaceholder = useFormattedMessage(messages.userRolePlaceholder);

  return (
    <form onSubmit={handleSubmitHandler}>
      <Grid container direction={"column"} spacing={5}>
        <Grid item>
          <TextField
            id="email"
            label={<FormattedMessage {...messages.emailLabel} />}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder={emailPlaceholder}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            autoComplete="off"
          />
        </Grid>

        <Grid item>
          <TextField
            id="password"
            label={<FormattedMessage {...messages.passwordLabel} />}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            placeholder={passwordPlaceholder}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            autoComplete="off"
          />
        </Grid>
        <Grid item>
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
            <Checkbox
              id="Remember"
              name="fav_language"
              value="Remember"
              color="secondary"
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
        <Link href="#" underline="none">
          <FormattedMessage {...messages.textSignUp} />
        </Link>
        <Link href="/register" underline="none">
          <FormattedMessage {...messages.signUp} />
        </Link>
      </Box>
    </form>
  );
};

export default LoginForm;
