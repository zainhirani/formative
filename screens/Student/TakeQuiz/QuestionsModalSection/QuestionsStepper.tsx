import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "../messages";
import { BoxWrapper, ButtonWrapper, TypographyStyled } from "../Styled";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const steps = [
  "Step 1 Content",
  "Step 2 Content",
  "Step 3 Content",
  "Step 4 Content",
  "Step 5 Content",
  "Step 6 Content",
  "Step 7 Content",
  "Step 8 Content",
  "Step 9 Content",
  "Step 10 Content",
  "Step 11 Content",
  "Step 12 Content",
  "Step 13 Content",
  "Step 14 Content",
  "Step 15 Content",
];

const QuestionsStepper = () => {
  const timer = 120;

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [remainingTime, setRemainingTime] = useState(timer);
  const questionNo = useFormattedMessage(messages.questionNo);
  const remainingTimeText = useFormattedMessage(messages.remainingTime);
  const quizScore = useFormattedMessage(messages.quizScore);
  const submit = useFormattedMessage(messages.submit);
  const quizScoreText = useFormattedMessage(messages.quizScoreText);
  const quizScorePoints = useFormattedMessage(messages.quizScorePoints);
  const percentage = useFormattedMessage(messages.percentage);
  const close = useFormattedMessage(messages.close);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          handleNext();
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [activeStep]);

  useEffect(() => {
    setRemainingTime(timer);
  }, [activeStep]);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setCompleted(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setCompleted(false);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(false);
    setRemainingTime(timer);
  };

  const getTimeColor = () => {
    if (remainingTime <= 10) {
      return "#ff0000";
    } else if (remainingTime <= 30) {
      return "orange";
    } else if (remainingTime <= 60) {
      return "#005E84";
    } else {
      return "#225A41";
    }
  };

  return (
    <>
      {activeStep !== steps.length - 1 ? (
        <>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TypographyStyled>{`${questionNo} ${activeStep + 1} of ${
              steps.length
            }`}</TypographyStyled>
            <Box sx={{ display: "flex" }}>
              <TypographyStyled>{remainingTimeText}</TypographyStyled>
              <TypographyStyled style={{ color: getTimeColor() }}>
                {remainingTime} seconds
              </TypographyStyled>
            </Box>
          </Box>
          <TypographyStyled sx={{ mt: "30px" }} variant="body1">
            {steps[activeStep]}
          </TypographyStyled>
          <BoxWrapper
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ p: "15px" }}>
              <TypographyStyled>{quizScore}</TypographyStyled>
            </Box>
            <ButtonWrapper
              startIcon={<ArrowCircleRightOutlinedIcon />}
              onClick={handleNext}
              sx={{
                "&:hover": {
                  background: (theme) => theme.palette.secondary.main,
                },
              }}
            >
              {submit}
            </ButtonWrapper>
          </BoxWrapper>
        </>
      ) : (
        <Box>
          <Typography>
            {quizScore} 81 {quizScoreText} 170 {quizScorePoints}
          </Typography>
          <BoxWrapper
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <TypographyStyled
                sx={{ width: "50%", border: "1px solid #EAEAEA", p: "15px" }}
              >
                {percentage} {Math.round((81 / 170) * 100)}
              </TypographyStyled>
              <TypographyStyled
                sx={{ width: "50%", border: "1px solid #EAEAEA", p: "15px" }}
              >
                {quizScore} 81 {quizScorePoints}
              </TypographyStyled>
            </Box>
            <ButtonWrapper
              startIcon={<CancelOutlinedIcon />}
              onClick={handleNext}
              sx={{
                "&:hover": {
                  background: (theme) => theme.palette.secondary.main,
                },
              }}
            >
              {close}
            </ButtonWrapper>
          </BoxWrapper>
        </Box>
      )}
    </>
  );
};

export default QuestionsStepper;
