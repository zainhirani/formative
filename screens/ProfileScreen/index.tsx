import {
  FormHelperText,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Box,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import { TabContext, TabPanel } from "@mui/lab";
import { StepTwo } from "screens/RegisterScreen/fields/Profile";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PageLayout from "components/PageLayout";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { BoxWrapper, ButtonWrapper } from "./Styled";
import { GeneralInfo } from "./generalInfo";

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
  dob: Yup.string().required().label("Date of Birth"),
  pharmacy: Yup.string().required().label("Pharmacy"),
  partTime: Yup.string().required().label("Part Time"),
  bioChemistry: Yup.string().required().label("Bio Chemistry"),
  maths: Yup.string().required().label("Maths"),
  learn: Yup.string().required().label("Learn"),
  sequence: Yup.string().required().label("Sequence"),
  study: Yup.string().required().label("Study"),
  played: Yup.string().required().label("Played"),
  volunteer: Yup.string().required().label("Volunteer"),
  hobbies: Yup.string().required().label("Hobbies"),
});

const ProfileScreen = () => {
  const [initial, setInitial] = useState({
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
    dob: "",
    pharmacy: "",
    partTime: "",
    bioChemistry: "",
    maths: "",
    learn: "",
    sequence: "",
    study: "",
    played: "",
    volunteer: "",
    hobbies: "",
  });
  const onSubmit = useCallback(async (data: any) => {
    console.log(data);
  }, []);
  // use formik
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
    errors,
    values,
    touched,
  } = useFormik({
    initialValues: initial,
    validationSchema,
    onSubmit,
  });
  const [value, setValue] = React.useState("one");
  const [showPassword, setShowPassword] = useState(false);
  const passwordPlaceholder = useFormattedMessage(
    messages.currentPasswordPlaceholder,
  );
  return (
    <>
      <PageLayout title="Profile" icon={<HelpRoundedIcon />}>
        <Box>
          <TabContext value={value}>
            <Tabs
              value={value}
              onChange={(event: React.SyntheticEvent, newValue: string) =>
                setValue(newValue)
              }
              textColor="primary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab
                value="one"
                label={<FormattedMessage {...messages.stepOneTitle} />}
                sx={{
                  textTransform: "capitalize",
                }}
              />
              <Tab
                value="two"
                label={<FormattedMessage {...messages.stepTwoTitle} />}
                sx={{ textTransform: "capitalize" }}
              />
            </Tabs>
            <TabPanel sx={{ px: 0 }} value="one">
              <GeneralInfo
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                values={values}
                touched={touched}
                setFieldValue={setFieldValue}
                disable={false}
              />
            </TabPanel>
            <TabPanel sx={{ px: 0 }} value="two">
              <BoxWrapper>
                <StepTwo
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  values={values}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  disable={false}
                />
              </BoxWrapper>
            </TabPanel>
          </TabContext>
          <Box
            sx={{
              boxShadow: (theme) => theme.shadow.boxShadow,
              display: "flex",
              alignItems: "center",
              mt: "120px",
              background: "transparent",
              width: "max-content",
            }}
          >
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
              sx={{
                background: (theme) => theme.palette.primary.light,
                borderRadius: "0",
                ".MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  width: "250px",
                },
              }}
            />
            {touched.password && errors.password && (
              <FormHelperText error id="standard-weight-helper-text-password">
                {errors.password}
              </FormHelperText>
            )}
            <ButtonWrapper
              startIcon={<ArrowCircleRightOutlinedIcon />}
              variant="contained"
              sx={{ background: (theme) => theme.palette.secondary.main }}
            >
              <FormattedMessage {...messages.submit} />
            </ButtonWrapper>
            <ButtonWrapper
              sx={{
                borderTopRightRadius: (theme) => theme.borderRadius.radius1,
                borderBottomRightRadius: (theme) => theme.borderRadius.radius1,
              }}
              startIcon={<HighlightOffIcon />}
              variant="contained"
            >
              <FormattedMessage {...messages.cancel} />
            </ButtonWrapper>
          </Box>
        </Box>
      </PageLayout>
    </>
  );
};

export default ProfileScreen;
