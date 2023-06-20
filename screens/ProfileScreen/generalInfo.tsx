import {
  Box,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  CardHeaderWrapper,
  InputLabelWrapper,
  IconButtonWrapper,
  LoadingButtonWrapper,
} from "./Styled";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import { genderSelect, programSelect } from "../RegisterScreen/fields/data";
import messages from "./messages";
import { useState, useEffect, useCallback } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { BoxWrapper, ButtonWrapper } from "./Styled";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRegisterDetail, useRegisterUpdate } from "providers/Auth";
import { useSnackbar } from "notistack";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useRouter } from "next/router";
import CustomSelect from "components/CustomSelect/CustomSelect";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
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
  currentPassword: Yup.string().required().min(6).label("Password"),
});

export const GeneralInfo = () => {
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
  const registerUpdate = useRegisterUpdate();
  const registerDetail = useRegisterDetail();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [year, setYear] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (registerUpdate.isSuccess) {
      enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
        variant: "success",
      });
    }
  }, [registerUpdate.isSuccess]);

  useEffect(() => {
    if (registerUpdate.isError) {
      const errorMessage = registerUpdate.error.message;
      enqueueSnackbar(errorMessage, {
        variant: "error",
      });
    }
  }, [registerUpdate.isError]);

  const onSubmit = useCallback((data: any) => {
    registerUpdate.mutate({
      email: data.email,
      password: data.password,
      username: data.userName,
      first_name: data.firstName,
      last_name: data.lastName,
      nick_name: data.nickName,
      gender: data.gender,
      rfu_id: data.rfuID,
      year_of_graduation: Number(data.graduation),
      program: data.program,
      birth_place: data.birthPlace,
    });
  }, []);
  // console.log(registerDetail.data, "registerDetail");
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
      firstName: registerDetail.data?.first_name || "",
      lastName: registerDetail.data?.last_name || "",
      nickName: registerDetail.data?.nick_name || "",
      gender: registerDetail.data?.gender || "",
      email: registerDetail.data?.email || "",
      rfuID: registerDetail.data?.rfu_id || "",
      program: registerDetail.data?.program || "",
      graduation: registerDetail.data?.year_of_graduation || 0,
      // graduation: 2022,
      birthPlace: registerDetail.data?.birth_place || "",
      userName: registerDetail.data?.username || "",
      password: "",
      confirmPassword: "",
      currentPassword: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit,
  });

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <BoxWrapper sx={{ padding: "40px 50px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
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
            <Grid item xs={12} md={3}>
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
                variant="standard"
              />
              {touched.lastName && errors.lastName && (
                <FormHelperText error id="standard-weight-helper-text-lastName">
                  {errors.lastName}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={3}>
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
                variant="standard"
              />
              {touched.nickName && errors.nickName && (
                <FormHelperText error id="standard-weight-helper-text-nickName">
                  {errors.nickName}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabelWrapper htmlFor="gender">
                <FormattedMessage {...messages.genderLabel} />
              </InputLabelWrapper>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={values.gender}
                onChange={(e) => {
                  if (setFieldValue) {
                    setFieldValue("gender", e.target.value);
                  }
                }}
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
            <Grid item xs={12} md={6}>
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
                variant="standard"
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-email">
                  {errors.email}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={3}>
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
                variant="standard"
              />
              {touched.rfuID && errors.rfuID && (
                <FormHelperText error id="standard-weight-helper-text-rfuID">
                  {errors.rfuID}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} md={3}>
              <InputLabelWrapper htmlFor="program">
                <FormattedMessage {...messages.programLabel} />
              </InputLabelWrapper>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={values.program}
                IconComponent={KeyboardArrowDownIcon}
                onChange={(e) => {
                  if (setFieldValue) {
                    setFieldValue("program", e.target.value);
                  }
                }}
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
            <Grid sx={{ position: "relative" }} item xs={12} md={3}>
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
            </Grid>
            <Grid item xs={12} md={3}>
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
            <Grid item xs={12} md={6}>
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
                variant="standard"
              />
              {touched.userName && errors.userName && (
                <FormHelperText error id="standard-weight-helper-text-userName">
                  {errors.userName}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
        </BoxWrapper>
        <BoxWrapper
          sx={{
            mt: "40px",
            justifyContent: "start",
            width: "max-content",
            padding: { md: "40px", sm: "20px", xs: "40px" },
            gap: "20px",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "18px" }}>
              <FormattedMessage {...messages.changePassword} />
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Grid item xs={12} md={3}>
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
            <Grid item xs={12} md={3}>
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
                  error
                  id="standard-weight-helper-text-confirmPassword"
                  sx={{ mt: "10px" }}
                >
                  {errors.confirmPassword}
                </FormHelperText>
              )}
            </Grid>
          </Box>
        </BoxWrapper>
        <Box
          sx={{
            boxShadow: (theme) => theme.shadow.boxShadow,
            display: "flex",
            alignItems: "center",
            mt: "120px",
            background: "transparent",
            width: { sm: "100%", xs: "max-content", md: "max-content" },
            position: "relative",
            flexDirection: { sm: "column", xs: "row", md: "row" },
          }}
        >
          <TextField
            id="currentPassword"
            name="currentPassword"
            placeholder={passwordPlaceholder}
            fullWidth
            type="password"
            value={values.currentPassword}
            onBlur={handleBlur}
            onChange={handleChange}
            variant="standard"
            error={Boolean(touched.currentPassword && errors.currentPassword)}
            sx={{
              background: (theme) => theme.palette.primary.light,
              borderRadius: "0",
              justifyContent: "center",
              width: { md: "350px", sm: "100%", xs: "250px" },
              height: { sm: "50px", xs: "100%", md: "100%" },
              position: "relative",
              px: "10px",
              ".MuiInputBase-root": {
                "&::before": {
                  borderWidth: 0,
                },
              },
            }}
          />
          {touched.currentPassword && errors.currentPassword && (
            <FormHelperText
              sx={{ position: "absolute", bottom: "-45%" }}
              error
              id="standard-weight-helper-text-currentPassword"
            >
              {errors.currentPassword}
            </FormHelperText>
          )}
          <LoadingButtonWrapper
            startIcon={<ArrowCircleRightOutlinedIcon />}
            variant="contained"
            type="submit"
            loading={registerUpdate.isLoading}
            loadingPosition="start"
            sx={{
              background: (theme) => theme.palette.secondary.main,
              width: { xs: "100%", md: "max-content" },
              display: "flex",
              borderRadius: "none",
              ".MuiLoadingButton-loadingIndicator": {
                top: "35%",
                left: "30%",
              },
            }}
          >
            <FormattedMessage {...messages.submit} />
          </LoadingButtonWrapper>
          <ButtonWrapper
            sx={{
              borderTopRightRadius: (theme) => theme.borderRadius.radius1,
              borderBottomRightRadius: (theme) => theme.borderRadius.radius1,
              width: { sm: "100%", xs: "max-content", md: "max-content" },
            }}
            startIcon={<HighlightOffIcon />}
            variant="contained"
            onClick={() => router.push("/dashboard")}
          >
            <FormattedMessage {...messages.cancel} />
          </ButtonWrapper>
        </Box>
      </form>
    </>
  );
};
