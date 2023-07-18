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

const initialItems: any = [
  { id: 1, anws: "", isCorrect: false, isDisabled: false },
];

const Question: FC<ITakeQuizProps> = ({
  quesQuizByIdData,
  onOptionChange,
  handleNext,
  selectedQuizId,
  questionOptionNew,
  setQuestionOptionNew,
  remainingTime,
}): JSX.Element => {
  const [inputField, setInputField] = useState<any>("");
  const [count, setCount] = useState(initialItems.length);
  const {
    selectedOptions,
    setSelectedOptions,
    anwserCorrect,
    setAnwserCorrect,
    inputCaseSchema,
    setInputCaseSchema,
  } = useAppState();

  const { mutateAsync: quesAttempt, data: quesData }: any = useQuesAttempt(
    undefined,
    (data: any) => {},
  );
  // useEffect(() => {
  //   setInputCaseSchema([...inputCaseSchema, initialItems]);
  // }, []);
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
          console.log(quesData, "quesData");

          if (quesData?.isQuestionComplete === true) {
            console.log("isQuestionComplete");
            tempQuestionNew?.forEach((item: any, index: number) => {
              tempQuestionNew[index] = {
                ...item,
                disabled: true,
              };
            });
            setAnwserCorrect(false);
          }
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
  const questionType = quesQuizByIdData?.type;
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
  const questionTypesWithFormControl = ["MSN", "MSR", "MCN", "MCR"];

  const handleInputChange = (val: any, id: number) => {
    setInputField(val);
    const updatedItems = inputCaseSchema?.map((item: any) => {
      if (item?.id === id) {
        // if (item?.id === count) {
        return { ...item, anws: val };
      }
      return item;
    });
    setInputCaseSchema(updatedItems);
  };

  // Input Case
  const handleInputCaseOptionChange = async (optionId: any) => {
    const result = inputCaseSchema?.find(({ id }: any) => id === optionId);

    try {
      await quesAttempt({
        quizId: selectedQuizId,
        questionId: questionId,
        payloadData: {
          option_selected: result?.anws,
          submission_duration: questionTimtelimit - remainingTime,
        },
      });

      //on success work
      if (quesData?.is_correct == true) {
        const updatedItemsCorrect = inputCaseSchema?.map((item: any) => {
          if (item?.id === optionId) {
            return {
              ...item,
              isCorrect: true,
              isDisabled: true,
              isColor: "green",
            };
          }
          return item;
        });
        setInputCaseSchema(updatedItemsCorrect);
        setAnwserCorrect(false);
        console.log(updatedItemsCorrect, "updatedItems correct");
        console.log(inputCaseSchema, "inputCaseSchema correct");
      } else {
        const updatedItems = inputCaseSchema?.map((item: any) => {
          if (item?.id === optionId) {
            return { ...item, isDisabled: true, isColor: "#8C2531" };
          }
          return item;
        });
        const itemsArrg = {
          id: updatedItems?.length + 1,
          // id: count,
          anws: "",
          isCorrect: false,
          isDisabled: false,
        };

        const itemsAddNewObj = [...updatedItems, itemsArrg];
        setInputCaseSchema(itemsAddNewObj);
        setInputField("");
        setAnwserCorrect(true);
        console.log(updatedItems, "updatedItems inCorrect");
        console.log(itemsAddNewObj, "itemsAddNewObj inCorrect");
        console.log(inputCaseSchema, "inputCaseSchema inCorrect");
      }
    } catch (error) {
      //on error work
    }

    // if (!selectedOptions.includes(optionId)) {
    //   const newSelectedOptions = [...selectedOptions, optionId];
    //   setSelectedOptions(newSelectedOptions);
    // }
    // console.log(inputCaseSchema, "inputCaseSchema");
  };

  // console.log(
  //   questionTypesWithFormControl.includes(questionType),
  //   "questionTypesWithFormControl.includes(questionType)",
  // );

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

          {!questionTypesWithFormControl.includes(questionType) ? (
            <>
              {inputCaseSchema?.map((item: any, index: number) => {
                return (
                  <Box key={index}>
                    {quesQuizByIdData?.timelimit !== inputCaseSchema?.length ? (
                      <>
                        <Checkbox
                          id={`custom-checkbox`}
                          // id={`custom-checkbox-${index}`}
                          checked={item?.isDisabled ? true : false}
                          disabled={
                            !item?.isDisabled
                              ? inputField == ""
                                ? true
                                : false
                              : item?.isDisabled
                          }
                          onChange={(e) =>
                            handleInputCaseOptionChange(item?.id)
                          }
                          color="default"
                          sx={{ color: item?.isColor }}
                        />
                        {item?.isDisabled ? (
                          item?.anws
                        ) : (
                          <input
                            type="text"
                            // value={el.value}
                            onChange={(e) =>
                              handleInputChange(e?.target?.value, item?.id)
                            }
                            placeholder="Type the text"
                            style={{
                              border: "none",
                              outline: "none",
                              color: "#404040",
                              fontSize: "16px",
                            }}
                          />
                        )}
                      </>
                    ) : (
                      ""
                    )}
                  </Box>
                );
              })}
            </>
          ) : (
            <>
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
            </>
          )}
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
