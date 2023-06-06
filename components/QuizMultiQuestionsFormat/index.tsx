import React, { FC, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import Image from "theme/Image";

import messages from "screens/Student/TakeQuiz/messages";
import { BoxWrapper } from "../TakeQuizFormat/Styled";
import {
  TypographyStyled,
  ButtonWrapper,
} from "screens/Student/TakeQuiz/Styled";

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
  time?: number;
  questionSelected: boolean;
  handleNext?: () => void;
};

const Question: FC<ITakeQuizProps> = ({
  question,
  image,
  options,
  time,
  QNo,
  id,
  questionSelected,
  handleNext,
}): JSX.Element => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const quizScore = useFormattedMessage(messages.quizScore);

  const handleOptionChange = (optionId: string) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter(
          (selectedOption) => selectedOption !== optionId,
        ),
      );
    } else {
      setSelectedOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        optionId,
      ]);
      //   setOptionSet((prevOptions) =>
      //     prevOptions.map((option) =>
      //       option.id === optionId ? { ...option, disabled: true } : option,
      //     ),
      //   );
    }
  };
  const isSubmitDisabled = selectedOptions.length === 0;

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
                    checked={selectedOptions.includes(el.name)}
                    onChange={() => handleOptionChange(el.name)}
                    disabled={el.disabled}
                    sx={{
                      color:
                        selectedOptions.includes(el.name) && !el.isCorrect
                          ? (theme) => theme.palette.primary.main
                          : selectedOptions.includes(el.name) && el.isCorrect
                          ? (theme) => theme.additionalColors?.primaryGreen
                          : (theme) => theme.palette.text.primary,
                    }}
                    color="default"
                  />
                }
                label={el.name}
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
