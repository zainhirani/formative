import React, { FC, useEffect, useState } from "react";
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

interface IOptionProps {
  name: string;
  isCorrect: boolean;
  disabled: boolean;
}

type ITakeQuizProps = {
  id: string;
  QNo: string;
  question: string;
  image?: string;
  options: IOptionProps[];
  onOptionChange?: (optionId: string) => void;
  time?: number;
  questionSelected: boolean;
  handleNext?: () => void;
};

const Question: FC<ITakeQuizProps> = ({
  question,
  image,
  options,
  onOptionChange,
  handleNext,
}): JSX.Element => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState<boolean[]>([]);
  const quizScore = useFormattedMessage(messages.quizScore);

  useEffect(() => {
    setSelectedOptions([]);
  }, [options]);

  const handleOptionChange = (optionId: string) => {
    const updatedSelectedOptions = [...selectedOptions];

    if (updatedSelectedOptions.includes(optionId)) {
      const index = updatedSelectedOptions.indexOf(optionId);
      updatedSelectedOptions.splice(index, 1);
    } else {
      updatedSelectedOptions.push(optionId);
    }

    setSelectedOptions(updatedSelectedOptions);
    if (onOptionChange) {
      onOptionChange(optionId);
    }
  };

  const isOptionSelected = (optionId: string) =>
    selectedOptions.includes(optionId);

  const isOptionCorrect = (optionId: string) => {
    const selectedOption = options.find((option) => option.name === optionId);
    return selectedOption?.isCorrect || false;
  };

  const getOptionColor = (optionId: string) => {
    if (isOptionSelected(optionId)) {
      if (isOptionCorrect(optionId)) {
        return (theme: any) => theme.additionalColors?.primaryGreen;
      } else {
        return (theme: any) => theme.palette.primary.main;
      }
    }
    return (theme: any) => theme.palette.text.primary;
  };
  const isSubmitDisabled = !selectedOptions.some((optionId) =>
    isOptionCorrect(optionId),
  );
  const isCorrectOptionSelected = selectedOptions.some((optionId) =>
    isOptionCorrect(optionId),
  );

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
            {question}
          </Typography>
          <Image
            alt="quiz-image"
            lazyLoadProps={{ height: 240 }}
            src={image}
            lazyLoad={true}
            style={{ maxWidth: "100%" }}
          />
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          <Typography sx={{ marginBottom: "10px" }} fontSize={14}>
            Choose the best answer
          </Typography>
          {options?.map((el, index) => (
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
                    checked={isOptionSelected(el.name)}
                    onChange={() => handleOptionChange(el.name)}
                    disabled={
                      isCorrectOptionSelected || isOptionSelected(el.name)
                    }
                    sx={{ color: getOptionColor(el.name) }}
                    color="default"
                  />
                }
                label={el.name}
                sx={{ color: getOptionColor(el.name) }}
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
          <Box sx={{ p: "15px" }}>
            <TypographyStyled>{quizScore}</TypographyStyled>
          </Box>
          <ButtonWrapper
            startIcon={<ArrowCircleRightOutlinedIcon />}
            onClick={handleNext}
            disabled={isSubmitDisabled}
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
