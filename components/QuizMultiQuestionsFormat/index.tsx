import React, { FC, useEffect } from "react";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import messages from "screens/Student/TakeQuiz/messages";
import {
  ButtonWrapper,
  TypographyStyled,
} from "screens/Student/TakeQuiz/Styled";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import Image from "theme/Image";
import { BoxWrapper } from "../TakeQuizFormat/Styled";
import { PUBLIC_IMAGE_URL } from "configs";
import { isStringNotURL, removeHTMLTags } from "utils";
import { useQuesAttempt } from "providers/Student/TakeQuiz";
import { useAppState } from "contexts/AppStateContext";

interface IOptionProps {
  name: string;
  isCorrect: boolean;
  disabled: boolean;
}

type ITakeQuizProps = {
  onOptionChange?: (optionId: string) => void;
  handleNext?: () => void;
  quesQuizByIdData?: any;
  selectedQuizId?: number;
  questionOptionNew?: any;
  setQuestionOptionNew?: any;
  remainingTime?: any;
};

const Question: FC<ITakeQuizProps> = ({
  quesQuizByIdData,
  onOptionChange,
  handleNext,
  selectedQuizId,
  questionOptionNew,
  setQuestionOptionNew,
  remainingTime,
}): JSX.Element => {
  const {
    selectedOptions,
    setSelectedOptions,
    anwserCorrect,
    setAnwserCorrect,
  } = useAppState();

  const { mutateAsync: quesAttempt, data: quesData }: any = useQuesAttempt(
    undefined,
    (data: any) => {},
  );

  useEffect(() => {
    if (selectedOptions.length > 0) {
      const lastVal = selectedOptions[selectedOptions?.length - 1];

      const tempQuestionNew: any = [...questionOptionNew];
      const findIndex = tempQuestionNew?.findIndex(
        (singleQuestionNew: any) => singleQuestionNew.key === lastVal,
      );
      if (quesData?.answer) {
        if (findIndex !== -1) {
          tempQuestionNew[findIndex] = {
            ...tempQuestionNew[findIndex],
            color: "green",
          };

          tempQuestionNew?.forEach((item: any, index: number) => {
            tempQuestionNew[index] = {
              ...item,
              disabled: true,
            };
          });
          setAnwserCorrect(false);
        }

        setQuestionOptionNew(tempQuestionNew);
      } else {
        if (findIndex !== -1) {
          tempQuestionNew[findIndex] = {
            ...tempQuestionNew[findIndex],
            color: "#8C2531",
          };
        }
        setQuestionOptionNew(tempQuestionNew);
        setAnwserCorrect(true);
      }
    }
  }, [selectedOptions]);

  const quizScore = useFormattedMessage(messages.quizScore);
  const questionId = quesQuizByIdData?.id;
  const questionDetail = removeHTMLTags(quesQuizByIdData?.detail);
  const questionTimtelimit = quesQuizByIdData?.timelimit;
  const questionImage = `${PUBLIC_IMAGE_URL}/${quesQuizByIdData?.media}`;

  const isOptionSelected = (optionId: string) =>
    selectedOptions.includes(optionId);
  const handleOptionChange = async (optionId: any) => {
    await quesAttempt({
      quizId: selectedQuizId,
      questionId: questionId,
      payloadData: {
        option_selected: optionId,
        submission_duration: questionTimtelimit - remainingTime,
      },
    });

    if (!selectedOptions.includes(optionId)) {
      const newSelectedOptions = [...selectedOptions, optionId];
      setSelectedOptions(newSelectedOptions);
    }
  };

  return (
    <>
      <Box
        sx={{
          background: (theme) => theme.palette.background.paper,
          width: "100%",
          height: "100%",
        }}
      >
        <Box sx={{ paddingTop: "10px" }}>
          <Typography sx={{ marginBottom: "30px" }} fontSize={18}>
            {questionDetail}
          </Typography>
          {quesQuizByIdData?.media !== null ? (
            <Image
              alt="quiz-image"
              lazyLoadProps={{ height: 240 }}
              src={questionImage}
              lazyLoad={true}
              style={{ maxWidth: "100%" }}
            />
          ) : (
            ""
          )}
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          <Typography sx={{ marginBottom: "10px" }} fontSize={14}>
            Choose the best answer
          </Typography>
          {questionOptionNew?.map((el: any, index: number) => (
            <Box
              key={index}
              sx={{
                height: "56px",
                border: "1px solid #EAEAEA",
                borderRadius: "6px",
                paddingLeft: "20px",
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    id={`custom-checkbox-${index}`}
                    checked={isOptionSelected(el.key)}
                    onChange={() => handleOptionChange(el.key)}
                    disabled={
                      el?.disabled ? el?.disabled : isOptionSelected(el.key)
                    }
                    sx={{ color: el?.color }}
                    color="default"
                  />
                }
                label={el.value}
              />
            </Box>
          ))}
        </Box>
        <BoxWrapper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "40px",
            width: "100%",
          }}
        >
          <Box sx={{ p: "15px 15px 15px 0px" }}>
            <TypographyStyled>
              {quizScore}: {quesData?.score}
            </TypographyStyled>
          </Box>
          <ButtonWrapper
            startIcon={<ArrowCircleRightOutlinedIcon />}
            onClick={handleNext}
            disabled={anwserCorrect}
            sx={{
              ":disabled": {
                background: (theme) => theme.palette.text.secondary,
                color: (theme) => theme.palette.primary.light,
              },
              "&:hover": {
                background: (theme) => theme.palette.secondary.main,
              },
            }}
          >
            <FormattedMessage {...messages.submit} />
          </ButtonWrapper>
        </BoxWrapper>
      </Box>
    </>
  );
};

export default Question;
