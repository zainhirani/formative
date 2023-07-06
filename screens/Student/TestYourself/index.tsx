// @ts-nocheck

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Box, IconButton } from "@mui/material";
import { Checkbox } from "@mui/material";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import Loader from "components/Loader";
import DataTable from "components/DataTable";
import TakeQuizFormat from "components/TakeQuizFormat";
import { BoxWrapper, SelectBoxWrapper } from "./Styled";
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

type Item = {
  id: number;
  title: string;
  type: string;
  attempted: boolean;
  correct: boolean;
};

const TestYourself = () => {
  const [questionId, setQuestionId] = useState(0);
  const categoryList = useCategoryListing();
  const questionDetail = useQuestionDetail({ id: questionId });
  const optionsCourse = categoryList?.data?.data?.map((item) => ({
    value: item.id,
    label: item.name,
  }));
  const defaultOption =
    optionsCourse && optionsCourse.length > 0
      ? {
          value: optionsCourse[0]?.value,
          label: optionsCourse[0]?.label,
        }
      : { value: 0, label: "" };

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
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!questionOption?.length) {
      setQuestionOption(questionOptions);
    }
  }, [questionOption, questionOptions]);

  useEffect(() => {
    setQuestionListing(questionList?.data || []);
  }, [questionList?.data]);

  const timer = questionDetail?.data?.timelimit;
  const [remainingTime, setRemainingTime] = useState(timer);

  const [checkedStateAns, setCheckedStateAns] = useState(
    new Array(questionOption?.length).fill(false),
  );
  const [selectedOptionKey, setSelectedOptionKey] = useState("");
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
    }
  }, [questionDetail?.data]);

  const handleOptionChange = (index: number) => {
    const updatedCheckedState = checkedStateAns.map(
      (_, i) => i === index && !checkedStateAns[index],
    );
    setCheckedStateAns(updatedCheckedState);

    if (updatedCheckedState[index]) {
      const selectedOptionKey = questionOption[index]?.key || "";
      setSelectedOptionKey(selectedOptionKey);
    } else {
      setSelectedOptionKey("");
    }
  };

  const [submit, setSubmit] = useState(false);

  const handleOnChange = (position: any, e: any) => {
    setSubmit(false);
    setCheckedStateAns(new Array(questionData?.options?.length).fill(false));
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
      option_selected: selectedOptionKey,
    });
  };

  useEffect(() => {
    if (submitQuestion.isSuccess) {
      queryClient.invalidateQueries("Questions");
      setShow(true);
    }
  }, [submitQuestion.isSuccess]);

  const isAnswerCorrect = submitQuestion?.data?.data;

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
                  <Image src="/tick.svg" width={20} height={20} alt="tick" />
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
        />
      </BoxWrapper>
    </Box>
    // </PageLayout>
  );
};

export default TestYourself;
