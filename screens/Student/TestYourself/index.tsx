// @ts-nocheck

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Box, IconButton } from "@mui/material";
import { Checkbox } from "@mui/material";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import Loader from "components/Loader";
import DataTable from "components/DataTable";
import TakeQuizFormat from "components/TakeQuizFormat";
import { BoxWrapper, ImageWrapper, SelectBoxWrapper } from "./Styled";
import { questionData } from "mock-data/Student/Test-Yourself";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import Image from "next/image";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import CustomSelectTestYourSelf from "components/CustomSelectTestYourSelf/CustomSelectTestYourSelf";
import { useCategoryListing } from "providers/Students/TestYourself/TestQuestions/Categories";
import {
  useQuestionDetail,
  useQuestionListing,
} from "providers/Students/TestYourself/QuestionByCategory";
import { useTestQuestion } from "providers/Students/TestYourself/TestQuestions";
import { useQueryClient } from "react-query";
import { useSnackbar } from "notistack";
import CloseIcon from "@mui/icons-material/Close";

type Item = {
  id: number;
  title: string;
  type: string;
  attempted: boolean;
  correct: boolean;
};

const TestYourself = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [questionId, setQuestionId] = useState(0);
  const categoryList = useCategoryListing();
  const questionDetail = useQuestionDetail({ id: questionId });
  const optionsCourse = categoryList?.data?.data?.map((item) => ({
    value: item.id,
    label: item.name,
  }));
  const defaultOption = { value: 0, label: "Please select a category" };

  const [category, setCategory] = useState({
    value: defaultOption.value,
    label: defaultOption.label,
  });

  const questionList = useQuestionListing({ id: category?.value });
  const submitQuestion = useTestQuestion();

  const [questionListing, setQuestionListing] = useState<Item[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const questionOptions = eval(questionDetail?.data?.option || "");
  const [questionOption, setQuestionOption] = useState([]);
  const [textAnswer, setTextAnswer] = useState("");
  const [isTextField, setIsTextField] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const [selectedOptionKeys, setSelectedOptionKeys] = useState("");

  const handleAnswerChange = (e: React.ChangeEvent) => {
    setTextAnswer(e.target.value);
    setSelectedOptionKeys("");
  };

  useEffect(() => {
    if (textAnswer?.length > 0) {
      setCheckedStateAns([]);
      setSelectedOptionKeys("");
    }
  }, [textAnswer]);

  useEffect(() => {
    questionDetail?.data?.type.includes("SA") ||
    questionDetail?.data?.type.includes("NUM")
      ? setIsTextField(true)
      : setIsTextField(false);
  }, [questionDetail?.data?.type]);

  useEffect(() => {
    if (questionOptions?.length > 0) {
      setQuestionOption((prevQuestionOption) => {
        if (
          JSON.stringify(prevQuestionOption) !== JSON.stringify(questionOptions)
        ) {
          return [...questionOptions];
        }
        return prevQuestionOption;
      });
    }
  }, [questionOptions]);

  useEffect(() => {
    setQuestionListing(questionList?.data || []);
  }, [questionList?.data]);

  const timer = questionDetail?.data?.timelimit;
  const [remainingTime, setRemainingTime] = useState(timer);
  const [checkedStateAns, setCheckedStateAns] = useState([]);

  useEffect(() => {
    setCheckedStateAns(new Array(questionOption?.length).fill(false));
  }, [questionOption]);

  const [show, setShow] = useState(false);

  const handleCategoryChange = (e: any) => {
    setCategory({ value: e?.value, label: e?.label });
    setSelectedItemId(0);
    setShow(false);
  };
  useEffect(() => {
    if (!selectedItemId) {
      setShow(false);
    }
  }, [selectedItemId]);

  useEffect(() => {
    if (questionDetail?.data) {
      setRemainingTime(timer);
      setCheckedStateAns(new Array(questionOption?.length).fill(false));
    }
  }, [questionDetail?.data]);

  const handleOptionChange = (index: number) => {
    const optionType = questionDetail?.data?.type || "";
    const isSelected = checkedStateAns[index];

    let updatedCheckedState;
    if (optionType === "MSN" || optionType === "MSR") {
      updatedCheckedState = checkedStateAns.map(
        (_, i) => i === index && !isSelected,
      );
    } else {
      updatedCheckedState = checkedStateAns.map((state, i) => {
        if (i === index) {
          return !state;
        }
        return state;
      });
    }

    setCheckedStateAns(updatedCheckedState);

    const selectedOptions = updatedCheckedState
      .map((state, i) => (state ? questionOption[i]?.key || "" : ""))
      .filter(Boolean);

    setSelectedOptionKeys(selectedOptions.join(","));
    setTextAnswer("");
  };

  const [submit, setSubmit] = useState(false);

  const handleOnChange = (position: any, e: any) => {
    setSubmit(false);
    setCheckedStateAns(new Array(questionOption?.length).fill(false));
    setTextAnswer("");
    setQuestionId(position);
    setRemainingTime(timer);
    setShow(true);
  };

  const timeSpent =
    (questionDetail?.data?.timelimit || 0) - (remainingTime || 0);

  const handleQuestionSubmit = () => {
    setSubmit(true);
    submitQuestion.mutate({
      questionId: questionId,
      start_time: 1,
      end_time: timeSpent || 0,
      ...(selectedOptionKeys
        ? { option_selected: selectedOptionKeys }
        : { option_selected: textAnswer }),
    });
  };

  useEffect(() => {
    if (submitQuestion.isSuccess) {
      queryClient.invalidateQueries("Questions");
      setShow(true);
    }
  }, [submitQuestion.isSuccess]);

  const isAnswerCorrect = submitQuestion?.data?.data;

  useEffect(() => {
    remainingTime === 0 &&
      (!checkedStateAns.includes(true) || !textAnswer) &&
      (setShow(false),
      setSelectedItemId(0),
      enqueueSnackbar("Time has been finished, please try again!", {
        variant: "error",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)} size="small">
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        ),
      }));
    remainingTime === 0 &&
      (checkedStateAns.includes(true) || textAnswer) &&
      (handleQuestionSubmit(), setSubmit(true));
  }, [remainingTime]);

  let configTestYourself = [
    {
      columnName: "",
      maxWidth: "20px",
      render: (item: {
        title: any;
        id: number;
        type: string;
        attempted: boolean;
        correct: boolean;
      }) => {
        return (
          <>
            <Checkbox
              icon={
                <>
                  {item?.attempted == false && item?.correct == false ? (
                    <CircleUnchecked sx={{ fontSize: "20px" }} />
                  ) : (
                    <IconButton sx={{ width: "20px", padding: "0px" }}>
                      {item?.correct ? (
                        <Image
                          src="/correct.svg"
                          width={20}
                          height={20}
                          alt="tick"
                        />
                      ) : (
                        <Image
                          src="/wrong.svg"
                          width={20}
                          height={20}
                          alt="tick"
                        />
                      )}
                    </IconButton>
                  )}
                </>
              }
              checkedIcon={
                <>
                  <ImageWrapper
                    src="/tick.svg"
                    width={20}
                    height={20}
                    alt="tick"
                  />
                </>
              }
              checked={selectedItemId === item.id}
              id={`custom-checkbox-${item.id}`}
              onChange={(e) => {
                if (selectedItemId === item.id) {
                  setSelectedItemId(null);
                } else {
                  setSelectedItemId(item.id);
                }
                handleOnChange(item?.id, e);
              }}
              size="small"
              sx={{
                borderRadius: "50%",
                "&.Mui-checked": {
                  borderRadius: "50%",
                  mb: "-6px",
                },
              }}
              onClick={(e) => {
                return setQuestionOption([]), setRemainingTime(timer);
              }}
            />
          </>
        );
      },
      handleClick: (item: any) => {},
    },
    {
      columnName: "Name",
      maxWidth: "20px",
      render: (item: { title: any; id: number }) => {
        return <>{item.title}</>;
      },
      handleClick: (item: any) => {},
    },
    {
      columnName: "Type",
      render: (item: { type: any }) => {
        return item.type;
      },
    },
  ];

  return (
    // <PageLayout title="Test Yourself" icon={<HelpRoundedIcon />}>
    <Box
      sx={{
        display: { md: "flex", xs: "block" },
        padding: { md: "0", xs: "0 30px" },
      }}
    >
      <BoxWrapper sx={{ width: { md: "35%", xs: "100%" } }}>
        <SelectBoxWrapper>
          <CustomSelectTestYourSelf
            placeholder="Please select a category"
            controlText="Category:"
            value={category}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            options={optionsCourse}
            onChange={handleCategoryChange}
          />
        </SelectBoxWrapper>
        <DataTable
          data={questionList?.data || []}
          config={configTestYourself}
        />
      </BoxWrapper>
      <BoxWrapper
        sx={{
          width: { md: "60%", xs: "100%" },
          ml: { md: "15px" },
          mt: { xs: "20px", md: "0" },
        }}
      >
        <TakeQuizFormat
          questionID={questionDetail?.data?.id}
          questionTitle={questionDetail?.data?.title}
          questionDetail={questionDetail?.data?.detail}
          questionMedia={questionDetail?.data?.media}
          options={questionOption}
          // questionSelected={checkedState.indexOf(true) > -1}
          questionSelected={show}
          setSubmit={setSubmit}
          submit={submit}
          setCheckedStateAns={setCheckedStateAns}
          checkedStateAns={checkedStateAns}
          setRemainingTime={setRemainingTime}
          remainingTime={remainingTime}
          timer={timer}
          handleSubmit={handleQuestionSubmit}
          answer={isAnswerCorrect}
          handleOptionChange={handleOptionChange}
          isTextField={isTextField}
          textAnswer={textAnswer}
          handleAnswerChange={handleAnswerChange}
        />
      </BoxWrapper>
    </Box>
    // </PageLayout>
  );
};

export default TestYourself;
