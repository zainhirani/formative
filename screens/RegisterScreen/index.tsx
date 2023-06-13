import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Card,
  Link,
} from "@mui/material";
import FormattedMessage from "theme/FormattedMessage";
import messages from "./messages";
import {
  BoxWrapper,
  ButtonWrapper,
  CardHeaderWrapper,
  IconButtonWrapper,
  LoadingButtonWrapper,
} from "./Styled";
import * as Yup from "yup";
import StepOne from "./fields/Signup";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useFormik } from "formik";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useAuthContext } from "contexts/AuthContext";
import { StepTwo } from "./fields/Profile";
import { useProfile } from "providers/Users";
// import { register } from "services/auth";

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

const steps = [
  <FormattedMessage {...messages.stepOneTitle} />,
  <FormattedMessage {...messages.stepTwoTitle} />,
];

const RegisterScreen: React.FC = () => {
  const profile = useProfile();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [initial, setInitial] = useState({
    firstName: "",
    lastName: "",
    nickName: "",
    gender: "",
    email: "",
    rfuID: "12",
    program: "",
    graduation: "2022",
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

  useEffect(() => {
    if (profile.isSuccess) {
      enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
        variant: "success",
      });
      // localStorage.setItem(TOKEN, profile?.data.token);
      handleNext();
    }
  }, [profile.isSuccess]);

  useEffect(() => {
    if (profile.isError) {
      const errorMessage = profile.error.message;
      enqueueSnackbar(errorMessage, {
        variant: "error",
      });
    }
  }, [profile.isError]);

  // const onSubmit = useCallback(async (data: any) => {}, []);
  const onSubmit = useCallback((data: any) => {
    profile.mutate({
      date_of_birth: data.dob,
      experience: data.pharmacy,
      working_part_time: data.partTime,
      athlete: data.played,
      concept: data.learn,
      hobbies: data.hobbies,
      learning_sequence: data.sequence,
      math_skills: data.maths,
      study_prefer: data.study,
      taken_biochemistry: data.bioChemistry,
      volunteer: data.volunteer,
    });
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
  const isStepOptional = (step: number) => {
    return step === 1;
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* <form onSubmit={handleSubmit}> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: { md: "80px 0", xs: "40px 0", lg: "45px" },
        }}
      >
        <Card
          sx={{
            marginBottom: (theme) => theme.spacing(3),
            padding: "20px 30px",
            boxShadow: (theme) => theme.shadow.boxShadow,
            borderRadius: 0,
            width:
              activeStep === steps.length - 1 ? "80%" : { md: 650, xs: "80%" },
          }}
        >
          {activeStep === steps.length - 1 ? (
            <React.Fragment>
              <CardHeaderWrapper
                title={<FormattedMessage {...messages.stepTwoTitle} />}
              />
              <Typography sx={{ marginLeft: "15px" }}>
                <FormattedMessage {...messages.description} />
              </Typography>
              {/* <form onSubmit={handleSubmit}> */}
              <StepTwo
              // handleChange={handleChange}
              // handleBlur={handleBlur}
              // errors={errors}
              // values={values}
              // touched={touched}
              // setFieldValue={setFieldValue}
              // disable={false}
              />
              {/* <Box
                  sx={{
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                  }}
                >
                  <Box
                    sx={{
                      width: { md: "75%", xs: "100%", xl: "65%" },
                      display: "flex",
                      mt: "10px",
                      justifyContent: { xs: "center", md: "end" },
                    }}
                  >
                    <LoadingButtonWrapper
                      variant="contained"
                      type="submit"
                      disabled={
                        (values.dob &&
                          values.pharmacy &&
                          values.partTime &&
                          values.bioChemistry &&
                          values.maths &&
                          values.learn &&
                          values.sequence &&
                          values.study &&
                          values.played &&
                          values.volunteer &&
                          values.hobbies) === ""
                      }
                      loading={profile.isLoading}
                      loadingPosition="start"
                      sx={{
                        width: { xs: "100%", md: "500px" },
                        ".MuiLoadingButton-loadingIndicator": {
                          top: "35%",
                          left: "35%",
                        },
                      }}
                    >
                      <FormattedMessage {...messages.profile} />
                    </LoadingButtonWrapper>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { md: "end", xs: "center" },
                      width: { md: "25%", xs: "100%", xl: "35%" },
                      mr: 1,
                      mt: { xs: "10px", md: 0 },
                    }}
                  >
                    <Button
                      onClick={() => {
                        router.push("/");
                      }}
                      sx={{
                        textDecoration: "none",
                        color: (theme) => theme.palette.primary.main,
                        textTransform: "initial",
                        fontWeight: "500",
                      }}
                    >
                      <FormattedMessage {...messages.skip} />
                      <IconButtonWrapper>
                        <ArrowForwardIcon />
                      </IconButtonWrapper>
                    </Button>
                  </Box>
                </Box> */}
              {/* </form> */}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <CardHeaderWrapper
                title={<FormattedMessage {...messages.stepOneTitle} />}
              />
              <Typography sx={{ marginLeft: "15px" }}>
                <FormattedMessage {...messages.description} />
              </Typography>
              {/* <form onSubmit={() => handleSubmit}> */}
              <StepOne
                handleNext={handleNext}
                // handleChange={handleChange}
                // handleBlur={handleBlur}
                // errors={errors}
                // values={values}
                // touched={touched}
                // setFieldValue={setFieldValue}
                // disable={false}
              />
              {/* <ButtonWrapper
                  variant="contained"
                  type="submit"
                  sx={{ flex: "1 1 auto", marginTop: "30px" }}
                  // onClick={handleNext}
                  // onClick={handleSubmit}
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
                </ButtonWrapper> */}
              {/* </form> */}
            </React.Fragment>
          )}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Typography
              sx={{
                flex: "1 1 auto",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {activeStep === steps.length - 1 ? (
                <FormattedMessage {...messages.finalStepText} />
              ) : (
                <>
                  <FormattedMessage {...messages.nextStepText} />
                  <Link sx={{ marginLeft: "5px", textDecoration: "none" }}>
                    "<FormattedMessage {...messages.nextStep} />"
                  </Link>
                </>
              )}
            </Typography>
          </Box>
        </Card>
        {/* <Box sx={{ padding: "20px 0 40px" }}> */}
        <Box>
          <Typography>
            <FormattedMessage {...messages.textSignIn} />
            <Link
              href="/login"
              sx={{ marginLeft: "5px", textDecoration: "none" }}
            >
              <FormattedMessage {...messages.signIn} />
            </Link>
          </Typography>
        </Box>
      </Box>
      {/* </form> */}
    </Box>
  );
};

export default RegisterScreen;
