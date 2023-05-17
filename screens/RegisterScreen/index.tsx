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
  StepConnector,
} from "@mui/material";
import FormattedMessage from "theme/FormattedMessage";
import messages from "./messages";
import { BoxWrapper, ButtonWrapper, StepConnectorWrapper } from "./Styled";
import * as Yup from "yup";
import { StepOne } from "./fields/Signup";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useFormik } from "formik";
import { useAuthContext } from "contexts/AuthContext";
import { StepTwo } from "./fields/Profile";

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
  const [activeStep, setActiveStep] = React.useState(0);
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
    setFieldValue,
    errors,
    values,
    touched,
  } = useFormik({
    initialValues: initial,
    validationSchema,
    onSubmit,
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
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
          }}
        >
          <Stepper
            connector={
              <StepConnectorWrapper
              // sx={{ borderColor: (theme) => theme.palette.primary.main }}
              />
            }
            alternativeLabel
            sx={{
              justifyContent: "center",
              padding: "30px 0 40px",
              width: "350px",
            }}
            activeStep={activeStep}
          >
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              return (
                <Step key={index} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Card
            sx={{
              marginBottom: (theme) => theme.spacing(3),
              padding: "20px 30px",
              boxShadow: (theme) => theme.shadow.boxShadow,
              borderRadius: 0,
              // width: { md: 650, xs: "80%" },
              width:
                activeStep === steps.length - 1
                  ? "80%"
                  : { md: 650, xs: "80%" },
            }}
          >
            {activeStep === steps.length - 1 ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  <StepTwo
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    errors={errors}
                    values={values}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    disable={false}
                  />
                </Typography>
                <ButtonWrapper
                  variant="contained"
                  sx={{ flex: "1 1 auto" }}
                  // onClick={handleNext}
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
                >
                  <FormattedMessage {...messages.profile} />
                </ButtonWrapper>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
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
                    <Button
                      sx={{
                        paddingLeft: "10px",
                        padding: 0,
                        textTransform: "capitalize",
                        color: (theme) => theme.palette.primary.main,
                      }}
                      onClick={handleNext}
                    >
                      {<FormattedMessage {...messages.nextStep} />}
                    </Button>
                  </>
                )}
              </Typography>
            </Box>
          </Card>
          <Box sx={{ padding: "20px 0 40px" }}>
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
