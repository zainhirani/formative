import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import { useFormattedMessage } from "theme/FormattedMessage";
import messages from "../messages";
import { BoxWrapper, ButtonWrapper, TypographyStyled } from "../Styled";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Question from "components/QuizMultiQuestionsFormat";
import RemainingTimer from "components/RemainingTimer/RemainingTimer";

const QuestionsStepper = (props: any) => {
  const {
    handleChangeState,
    setModalTitle,
    quesQuizByIdData,
    selectedQuizId,
    questionOptionNew,
    setQuestionOptionNew,
    handleNext,
    handleTimerEnd,
    handleRemainingTimer,
    remainingTime,
  } = props;
  const [selectedOption, setSelectedOption] = useState<string>("");
  const quizKeyExistOutof = quesQuizByIdData?.outof;
  const quizKeyExistScore = quesQuizByIdData?.score;
  const timerLimit = quesQuizByIdData?.timelimit;
  const questionCurrentNo = quesQuizByIdData?.current;
  const questionTotalNo = quesQuizByIdData?.total;
  const quizScore = useFormattedMessage(messages.quizScore);
  const quizScoreText = useFormattedMessage(messages.quizScoreText);
  const quizScorePoints = useFormattedMessage(messages.quizScorePoints);
  const percentage = useFormattedMessage(messages.percentage);
  const close = useFormattedMessage(messages.close);
  const handleOptionChange = (optionId: string) => {
    setSelectedOption(optionId);
  };
  const calculatedVal = Math.max(
    0,
    Math.round((quizKeyExistScore / quizKeyExistOutof) * 100),
  );

  const getTimeColor = (): string => {
    if (calculatedVal <= 10) {
      return "#ff0000";
    } else if (calculatedVal <= 30) {
      return "orange";
    } else if (calculatedVal <= 60) {
      return "#005E84";
    } else {
      return "#225A41";
    }
  };
  return (
    <>
      {quizKeyExistOutof == undefined && quizKeyExistScore == undefined ? (
        <>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TypographyStyled>
              Question no. {questionCurrentNo} of {questionTotalNo}
            </TypographyStyled>
            <Box sx={{ display: "flex" }}>
              <RemainingTimer
                seconds={timerLimit}
                onEnd={handleTimerEnd}
                remainingTimer={handleRemainingTimer}
              />
            </Box>
          </Box>

          <Question
            quesQuizByIdData={quesQuizByIdData}
            selectedQuizId={selectedQuizId}
            handleNext={handleNext}
            onOptionChange={handleOptionChange}
            questionOptionNew={questionOptionNew}
            setQuestionOptionNew={setQuestionOptionNew}
            remainingTime={remainingTime}
          />
        </>
      ) : (
        <Box>
          <Typography>
            {quizScore} {quizKeyExistScore} {quizScoreText} {quizKeyExistOutof}{" "}
            {quizScorePoints}
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
                sx={{
                  width: "50%",
                  border: "1px solid #EAEAEA",
                  p: "15px",
                  display: "flex",
                  gap: "5px",
                }}
              >
                {percentage}
                <TypographyStyled
                  variant="body1"
                  style={{ color: getTimeColor() }}
                >
                  {calculatedVal}%
                </TypographyStyled>
              </TypographyStyled>
              <TypographyStyled
                sx={{ width: "50%", border: "1px solid #EAEAEA", p: "15px" }}
              >
                {quizScore} {quizKeyExistScore} {quizScorePoints}
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
