import React, { useCallback, useState } from "react";
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
import { BoxWrapper, ButtonWrapper, IconButtonWrapper } from "./Styled";
import * as Yup from "yup";
import { StepOne } from "./fields/Signup";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useFormik } from "formik";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useAuthContext } from "contexts/AuthContext";
import { StepTwo } from "./fields/Profile";
import { log } from "console";

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
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { signUp } = useAuthContext();
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
    // await signUp(data.email, data.password)
    //   .then((userCredential: any) => {
    //     const user = userCredential.user;
    //     if (user) {
    //       enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
    //         variant: "success",
    //       });
    //     } else if (userCredential.error) {
    //       enqueueSnackbar(userCredential.error, {
    //         variant: "error",
    //       });
    //     }
    //   })
    //   .catch((error: any) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //     enqueueSnackbar(errorMessage, {
    //       variant: "error",
    //     });
    //   });
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
      <form onSubmit={handleSubmit}>
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
                activeStep === steps.length - 1
                  ? "80%"
                  : { md: 650, xs: "80%" },
            }}
          >
            {activeStep === steps.length - 1 ? (
              <React.Fragment>
                <StepTwo
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  values={values}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  disable={false}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                  }}
                >
                  <Box
                    sx={{
                      width: { md: "75%", xs: "100%" },
                      display: "flex",
                      mt: "10px",
                      justifyContent: { xs: "center", md: "end" },
                    }}
                  >
                    <ButtonWrapper
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
                      sx={{ width: { xs: "100%", md: "500px" } }}
                    >
                      <FormattedMessage {...messages.profile} />
                    </ButtonWrapper>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { md: "end", xs: "center" },
                      width: { md: "25%", xs: "100%" },
                      mr: 1,
                      mt: { xs: "10px", md: 0 },
                    }}
                  >
                    <Button
                      type="submit"
                      onClick={() => {
                        router.push("/login");
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
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <StepOne
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  values={values}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  disable={false}
                />
                <ButtonWrapper
                  variant="contained"
                  sx={{ flex: "1 1 auto", marginTop: "30px" }}
                  onClick={handleNext}
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
      </form>
    </Box>
  );
};

export default RegisterScreen;
