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
import RegisterForm from "./RegisterForm";
import messages from "./messages";
import { BoxWrapper, ButtonWrapper } from "./Styled";
import * as Yup from "yup";
import { StepOne } from "./fields/Signup";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useFormik } from "formik";
import { useAuthContext } from "contexts/AuthContext";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("title"),
  price: Yup.string().required().label("Regular Price"),
  category: Yup.string().required().label("Category"),
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
    title: "",
    description: "",
    price: 0,
    category: "",
    image: "",
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
            }}
          >
            {activeStep === steps.length - 1 ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <ButtonWrapper
                  variant="contained"
                  sx={{ flex: "1 1 auto" }}
                  onClick={handleNext}
                  disabled={(values.title && values.description) === ""}
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
                  sx={{ flex: "1 1 auto" }}
                  onClick={handleNext}
                  disabled={(values.title && values.description) === ""}
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
