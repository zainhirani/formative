import {
  Box,
  CardContent,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  ButtonWrapper,
  IconButtonWrapper,
} from "screens/RegisterScreen/Styled";

import {
  CardHeaderWrapper,
  InputLabelWrapper,
} from "screens/RegisterScreen/Styled";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";

import { RegisterProps } from "./formProps";
import { genderSelect, programSelect } from "./data";
import messages from "../messages";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRegister } from "providers/Auth";
import { useSnackbar } from "notistack";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("FirstName"),
  lastName: Yup.string().required().label("LastName"),
  nickName: Yup.string().required().label("NickName"),
  gender: Yup.string().required().label("Gender"),
  email: Yup.string().required().email().label("Email"),
  rfuID: Yup.string().required().label("RFU ID"),
  program: Yup.string().required().label("Program"),
  graduation: Yup.string().required().label("Graduation Year"),
  birthPlace: Yup.string().required().label("Birth Place"),
  userName: Yup.string().required().label("User Name"),
  password: Yup.string().required().min(6).label("Password"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

interface IStepOneProps {
  handleNext: () => void;
}

const StepOne: React.FC<IStepOneProps> = ({ handleNext }) => {
  const register = useRegister();
  const { enqueueSnackbar } = useSnackbar();
  const firstNamePlaceholder = useFormattedMessage(
    messages.firstNamePlaceholder,
  );
  const lastNamePlaceholder = useFormattedMessage(messages.lastNamePlaceholder);
  const nickNamePlaceholder = useFormattedMessage(messages.nickNamePlaceholder);
  const emailPlaceholder = useFormattedMessage(messages.emailPlaceholder);
  const rfuIDPlaceholder = useFormattedMessage(messages.rfuPlaceholder);
  const graduationPlaceholder = useFormattedMessage(
    messages.graduationPlaceholder,
  );
  const birthPlaceholder = useFormattedMessage(messages.birthPlaceholder);
  const userPlaceholder = useFormattedMessage(messages.userPlaceholder);
  const passwordPlaceholder = useFormattedMessage(messages.passwordPlaceholder);
  const confirmPasswordPlaceholder = useFormattedMessage(
    messages.confirmPasswordPlaceholder,
  );
  const [genders, setGenders] = useState("Select from the list");
  const [programs, setPrograms] = useState("Select from the list");
  const [year, setYear] = useState(2000);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (register.isSuccess) {
      enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
        variant: "success",
      });
      // localStorage.setItem("token", register?.data);
      handleNext();
    }
    // if (register.isError) {
    //   enqueueSnackbar(register.error, {
    //     variant: "error",
    //   });
  }, [register.isSuccess]);

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
      firstName: "",
      lastName: "",
      nickName: "",
      gender: "",
      email: "",
      rfuID: "",
      program: "",
      graduation: "",
      birthPlace: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (data) => {
      register.mutate({
        email: data.email,
        password: data.password,
        username: data.userName,
        first_name: data.firstName,
        last_name: data.lastName,
        nick_name: data.nickName,
        gender: data.gender,
        rfu_id: data.rfuID,
        year_of_graduation: data.graduation,
        program: data.program,
        birth_place: data.birthPlace,
      });
    },
  });

  const increment = () => {
    if (year < 2200) {
      setYear((year) => year + 1);
    }
  };

  const decrement = () => {
    if (year > 1950) {
      setYear((year) => year - 1);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabelWrapper htmlFor="first-name">
                <FormattedMessage {...messages.firstNameLabel} />
              </InputLabelWrapper>
              <TextField
                id="first-name"
                name="firstName"
                placeholder={firstNamePlaceholder}
                fullWidth
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.firstName && errors.firstName)}
                // disabled={disable}
                variant="standard"
              />
              {touched.firstName && errors.firstName && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-firstName"
                >
                  {errors.firstName}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabelWrapper htmlFor="last-name">
                <FormattedMessage {...messages.lastNameLabel} />
              </InputLabelWrapper>
              <TextField
                id="last-name"
                name="lastName"
                placeholder={lastNamePlaceholder}
                fullWidth
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.lastName && errors.lastName)}
                // disabled={disable}
                variant="standard"
              />
              {touched.lastName && errors.lastName && (
                <FormHelperText error id="standard-weight-helper-text-lastName">
                  {errors.lastName}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabelWrapper htmlFor="nick-name">
                <FormattedMessage {...messages.nickNameLabel} />
              </InputLabelWrapper>
              <TextField
                id="nick-name"
                name="nickName"
                placeholder={nickNamePlaceholder}
                fullWidth
                value={values.nickName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.nickName && errors.nickName)}
                // disabled={disable}
                variant="standard"
              />
              {touched.nickName && errors.nickName && (
                <FormHelperText error id="standard-weight-helper-text-nickName">
                  {errors.nickName}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabelWrapper htmlFor="gender">
                <FormattedMessage {...messages.genderLabel} />
              </InputLabelWrapper>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={genders}
                onChange={(e) => {
                  if (setFieldValue) {
                    setFieldValue("gender", e.target.value);
                  }
                  setGenders(e.target.value);
                }}
                // disabled={disable}
                variant="standard"
                fullWidth
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  ".MuiSvgIcon-root ": {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
              >
                {genderSelect?.map((gender) =>
                  gender.id === 0 ? (
                    <MenuItem disabled value={gender.name} key={gender.id}>
                      {gender.name}
                    </MenuItem>
                  ) : (
                    <MenuItem value={gender.name} key={gender.id}>
                      {gender.name}
                    </MenuItem>
                  ),
                )}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <InputLabelWrapper htmlFor="email">
                <FormattedMessage {...messages.emailLabel} />
              </InputLabelWrapper>
              <TextField
                id="email"
                name="email"
                placeholder={emailPlaceholder}
                fullWidth
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.email && errors.email)}
                // disabled={disable}
                variant="standard"
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-email">
                  {errors.email}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabelWrapper htmlFor="rfuID">
                <FormattedMessage {...messages.rfuLabel} />
              </InputLabelWrapper>
              <TextField
                id="rfuID"
                name="rfuID"
                placeholder={rfuIDPlaceholder}
                fullWidth
                type="number"
                value={values.rfuID}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.rfuID && errors.rfuID)}
                // disabled={disable}
                variant="standard"
              />
              {touched.rfuID && errors.rfuID && (
                <FormHelperText error id="standard-weight-helper-text-rfuID">
                  {errors.rfuID}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabelWrapper htmlFor="program">
                <FormattedMessage {...messages.programLabel} />
              </InputLabelWrapper>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={programs}
                IconComponent={KeyboardArrowDownIcon}
                onChange={(e) => {
                  if (setFieldValue) {
                    setFieldValue("program", e.target.value);
                    setPrograms(e.target.value);
                  }
                }}
                // disabled={disable}
                variant="standard"
                fullWidth
                sx={{
                  ".MuiSvgIcon-root ": {
                    color: (theme) => theme.palette.primary.main,
                  },
                }}
              >
                {programSelect?.map((program) =>
                  program.id === 0 ? (
                    <MenuItem disabled value={program.name} key={program.id}>
                      {program.name}
                    </MenuItem>
                  ) : (
                    <MenuItem value={program.name} key={program.id}>
                      {program.name}
                    </MenuItem>
                  ),
                )}
              </Select>
            </Grid>
            <Grid sx={{ position: "relative" }} item xs={12} md={6}>
              <InputLabelWrapper htmlFor="graduation">
                <FormattedMessage {...messages.graduationLabel} />
              </InputLabelWrapper>
              <TextField
                id="graduation"
                name="graduation"
                placeholder={graduationPlaceholder}
                fullWidth
                type="number"
                value={year}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.graduation && errors.graduation)}
                // disabled={disable}
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        right: 0,
                        top: "5%",
                      }}
                      position="end"
                    >
                      <IconButtonWrapper onClick={increment}>
                        <ArrowDropUpOutlinedIcon />
                      </IconButtonWrapper>
                      <IconButtonWrapper onClick={decrement}>
                        <ArrowDropDownOutlinedIcon />
                      </IconButtonWrapper>
                    </InputAdornment>
                  ),
                }}
              />
              {touched.graduation && errors.graduation && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-graduation"
                >
                  {errors.graduation}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabelWrapper htmlFor="birth-place">
                <FormattedMessage {...messages.birthLabel} />
              </InputLabelWrapper>
              <TextField
                id="birth-place"
                name="birthPlace"
                placeholder={birthPlaceholder}
                fullWidth
                value={values.birthPlace}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.birthPlace && errors.birthPlace)}
                // disabled={disable}
                variant="standard"
              />
              {touched.birthPlace && errors.birthPlace && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-birthPlace"
                >
                  {errors.birthPlace}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <InputLabelWrapper htmlFor="user-name">
                <FormattedMessage {...messages.userLabel} />
              </InputLabelWrapper>
              <TextField
                id="user-name"
                name="userName"
                placeholder={userPlaceholder}
                fullWidth
                value={values.userName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.userName && errors.userName)}
                // disabled={disable}
                variant="standard"
              />
              {touched.userName && errors.userName && (
                <FormHelperText error id="standard-weight-helper-text-userName">
                  {errors.userName}
                </FormHelperText>
              )}
            </Grid>
            <Grid sx={{ position: "relative" }} item xs={12} md={6}>
              <InputLabelWrapper htmlFor="password">
                <FormattedMessage {...messages.passwordLabel} />
              </InputLabelWrapper>
              <TextField
                id="password"
                name="password"
                placeholder={passwordPlaceholder}
                fullWidth
                type={showPassword ? "text" : "password"}
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.password && errors.password)}
                // disabled={disable}
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
              />
              {touched.password && errors.password && (
                <FormHelperText
                  sx={{ mt: "10px" }}
                  error
                  id="standard-weight-helper-text-password"
                >
                  {errors.password}
                </FormHelperText>
              )}
            </Grid>
            <Grid sx={{ position: "relative" }} item xs={12} md={6}>
              <InputLabelWrapper htmlFor="confirmPassword">
                <FormattedMessage {...messages.confirmPasswordLabel} />
              </InputLabelWrapper>
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                placeholder={confirmPasswordPlaceholder}
                fullWidth
                type={showConfirmPassword ? "text" : "password"}
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(
                  touched.confirmPassword && errors.confirmPassword,
                )}
                // disabled={disable}
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <FormHelperText
                  sx={{ mt: "10px" }}
                  error
                  id="standard-weight-helper-text-confirmPassword"
                >
                  {errors.confirmPassword}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
        </CardContent>
        <ButtonWrapper
          variant="contained"
          type="submit"
          sx={{ flex: "1 1 auto", marginTop: "30px" }}
          // onClick={handleNext}
          disabled={
            (values.firstName &&
              values.lastName &&
              values.nickName &&
              values.gender &&
              values.email &&
              values.rfuID &&
              values.program &&
              values.graduation &&
              values.birthPlace &&
              values.userName &&
              values.password &&
              values.confirmPassword) === ""
          }
        >
          <FormattedMessage {...messages.signUp} />
        </ButtonWrapper>
      </form>
    </>
  );
};

export default StepOne;
