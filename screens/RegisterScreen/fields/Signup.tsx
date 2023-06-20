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
  LoadingButtonWrapper,
} from "screens/RegisterScreen/Styled";

import {
  CardHeaderWrapper,
  InputLabelWrapper,
} from "screens/RegisterScreen/Styled";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";

import { RegisterProps } from "./formProps";
import { genderSelect, programSelect } from "./data";
import messages from "../messages";
import { useState, useEffect, useCallback } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRegister } from "providers/Auth";
import { useSnackbar } from "notistack";
import { TOKEN } from "configs";
import CustomSelect from "components/CustomSelect/CustomSelect";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
  const [year, setYear] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (register.isSuccess) {
      enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
        variant: "success",
      });
      localStorage.setItem(TOKEN, register?.data.token);
      handleNext();
    }
  }, [register.isSuccess]);

  useEffect(() => {
    if (register.isError) {
      const errorMessage = register.error.message;
      enqueueSnackbar(errorMessage, {
        variant: "error",
      });
    }
  }, [register.isError]);

  const onSubmit = useCallback((data: any) => {
    register.mutate({
      email: data.email,
      password: data.password,
      username: data.userName,
      first_name: data.firstName,
      last_name: data.lastName,
      nick_name: data.nickName,
      gender: data.gender,
      rfu_id: data.rfuID,
      year_of_graduation: Number(data.graduation),
      // year_of_graduation: 2021,
      program: data.program,
      birth_place: data.birthPlace,
    });
    console.log(data);
  }, []);

  const handleSetYear = (e: any) => {
    setFieldValue("graduation", e?.value);
    setYear(e);
    console.log(e);
  };
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
      graduation: 2022,
      birthPlace: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit,
  });

  //year of graduation
  const year_of_graduation = [
    { value: "1990", label: "1990" },
    { value: "1991", label: "1991" },
    { value: "1992", label: "1992" },
    { value: "1993", label: "1993" },
    { value: "1994", label: "1994" },
    { value: "1995", label: "1995" },
    { value: "1996", label: "1996" },
    { value: "1997", label: "1997" },
    { value: "1998", label: "1998" },
    { value: "1999", label: "1999" },
    { value: "2000", label: "2000" },
    { value: "2001", label: "2001" },
    { value: "2002", label: "2002" },
    { value: "2003", label: "2003" },
    { value: "2004", label: "2004" },
    { value: "2005", label: "2005" },
    { value: "2006", label: "2006" },
    { value: "2007", label: "2007" },
    { value: "2008", label: "2008" },
    { value: "2009", label: "2009" },
    { value: "2010", label: "2010" },
    { value: "2011", label: "2011" },
    { value: "2012", label: "2012" },
    { value: "2013", label: "2013" },
    { value: "2014", label: "2014" },
    { value: "2015", label: "2015" },
    { value: "2016", label: "2016" },
    { value: "2017", label: "2017" },
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
    { value: "2027", label: "2027" },
    { value: "2028", label: "2028" },
    { value: "2029", label: "2029" },
    { value: "2030", label: "2030" },
    { value: "2031", label: "2031" },
    { value: "2032", label: "2032" },
    { value: "2033", label: "2033" },
    { value: "2034", label: "2034" },
    { value: "2035", label: "2035" },
    { value: "2036", label: "2036" },
    { value: "2037", label: "2037" },
    { value: "2038", label: "2038" },
    { value: "2039", label: "2039" },
    { value: "2040", label: "2040" },
  ];

  // const increment = () => {
  //   if (year < 2200) {
  //     setYear((year) => year + 1);
  //   }
  // };

  // const decrement = () => {
  //   if (year > 1950) {
  //     setYear((year) => year - 1);
  //   }
  // };
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
              <Box
                sx={{ borderBottom: "1px solid", marginTop: "-10px" }}
                gridColumn="span 2"
              >
                <CustomSelect
                  name="graduation"
                  placeholder="2004"
                  // controlText="Year of Graduation:"
                  value={year}
                  onBlur={handleBlur}
                  onChange={handleSetYear}
                  dropdownIcon={<ExpandMoreIcon />}
                  options={year_of_graduation}
                />
              </Box>
              {/* <TextField
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
              )}*/}
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
        <LoadingButtonWrapper
          variant="contained"
          type="submit"
          loading={register.isLoading}
          loadingPosition="start"
          sx={{
            flex: "1 1 auto",
            marginTop: "30px",
            ".MuiLoadingButton-loadingIndicator": {
              top: "35%",
              left: "35%",
            },
          }}
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
        </LoadingButtonWrapper>
      </form>
    </>
  );
};

export default StepOne;
