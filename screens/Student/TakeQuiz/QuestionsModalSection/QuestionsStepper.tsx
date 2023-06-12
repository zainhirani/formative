import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "../messages";
import { BoxWrapper, ButtonWrapper, TypographyStyled } from "../Styled";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { questionData } from "mock-data/Student/TakeQuiz";
import TakeQuizFormat from "components/TakeQuizFormat";
import Question from "components/QuizMultiQuestionsFormat";

const QuestionsStepper = (props: any) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const { handleChangeState, setModalTitle } = props;
  const timer = 120;
  const steps = questionData;
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
  const quizScoreTitle = useFormattedMessage(messages.quizScoreTitle);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        }
        return prevTime;
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
    console.log("Workingggggggg");
    console.log(activeStep, "activeStep");
    console.log(steps.length, "steps.length");

    if (activeStep === steps.length - 1) {
      setModalTitle(quizScoreTitle);
    }
    if (activeStep === steps.length) {
      setCompleted(true);
      setSelectedOption("");
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSelectedOption("");
    }
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

  const handleOptionChange = (optionId: string) => {
    setSelectedOption(optionId);
  };

  return (
    <>
      {activeStep !== steps.length ? (
        <>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TypographyStyled>{`${questionNo} ${activeStep + 1} of ${
              steps.length
            }`}</TypographyStyled>
            <Box sx={{ display: "flex" }}>
              {remainingTime ? (
                <>
                  <TypographyStyled>{remainingTimeText}</TypographyStyled>
                  <TypographyStyled style={{ color: getTimeColor() }}>
                    {remainingTime} seconds
                  </TypographyStyled>
                </>
              ) : (
                <>
                  <TypographyStyled>{remainingTimeText}</TypographyStyled>
                  <TypographyStyled style={{ color: "#ff0000" }}>
                    0 seconds
                  </TypographyStyled>
                </>
              )}
            </Box>
          </Box>
          <Question
            id={steps[activeStep]?.id}
            QNo={steps[activeStep]?.QNo}
            question={steps[activeStep]?.question}
            options={steps[activeStep]?.options}
            questionSelected={false}
            image={steps[activeStep]?.image}
            handleNext={handleNext}
            onOptionChange={handleOptionChange}
            // handleLast={handleChangeTitle}
          />
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
              onClick={handleChangeState}
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
