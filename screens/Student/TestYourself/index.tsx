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

const PageLayout = dynamic(() => import("components/PageLayout"), {
  ssr: false,
  loading: () => <Loader />,
});

const dataTestYourself = [
  {
    id: 0,
    name: "Q195",
    type: "MC",
    attempted: false,
    correct: false,
  },
  {
    id: 1,
    name: "Q196",
    type: "MC",
    attempted: true,
    correct: false,
  },
  {
    id: 2,
    name: "Q197",
    type: "MC",
    attempted: false,
    correct: false,
  },
  {
    id: 3,
    name: "Q198",
    type: "MC",
    attempted: false,
    correct: true,
  },
  {
    id: 4,
    name: "Q199",
    type: "MC",
    attempted: false,
    correct: false,
  },
];
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
  const handleCategoryChange = (e: any) => {
    setCategory({ value: e?.value, label: e?.label });
  };

  const questionList = useQuestionListing({ id: category?.value });
  const submitQuestion = useTestQuestion();

  const [questionListing, setQuestionListing] = useState<Item[]>([]);
  const [checkedState, setCheckedState] = useState<boolean[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const questionOption = eval(questionDetail?.data?.option || "");

  useEffect(() => {
    setQuestionListing(questionList?.data || []);
    setCheckedState(
      new Array<boolean>(questionList?.data?.length || 0).fill(false),
    );
  }, [questionList?.data]);

  const timer = questionDetail?.data?.timelimit;
  const [remainingTime, setRemainingTime] = useState(timer);

  const [checkedStateAns, setCheckedStateAns] = useState(
    new Array(questionOption?.length).fill(false),
  );

  const handleOptionChange = (index: number) => {
    const updatedCheckedState = checkedStateAns.map((checked, i) =>
      i === index ? !checked : checked,
    );
    setCheckedStateAns(updatedCheckedState);
  };
  const selectedOptionKeys = checkedStateAns
    .reduce((acc, option, index) => {
      if (option) {
        const optionKey = questionOption[index].key;
        acc.push(optionKey);
      }
      return acc;
    }, [])
    .join(",");

  const [submit, setSubmit] = useState(false);

  // const handleOnChange = (position: any, e: any) => {
  //   if (checkedState.filter((i) => i).length >= 1 && e.target.checked) return;
  //   const updatedCheckedState = checkedState.map((item, index) =>
  //     questionId === position ? e.target.checked : item,
  //   );
  //   setCheckedState(updatedCheckedState);
  //   setSubmit(false);
  //   setCheckedStateAns(new Array(questionData?.options?.length).fill(false));
  //   setQuestionId(position);
  // };

  const handleOnChange = (position: any, e: any) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      questionId === position ? e.target.checked : false,
    );
    setCheckedState(updatedCheckedState);
    setSubmit(false);
    setCheckedStateAns(new Array(questionData?.options?.length).fill(false));
    setQuestionId(position);
  };

  const timeSpent =
    (questionDetail?.data?.timelimit || 0) - (remainingTime || 0);
  const handleQuestionSubmit = () => {
    setSubmit(true);
    submitQuestion.mutate({
      questionId: questionId,
      start_time: 1,
      end_time: timeSpent || 0,
      option_selected: selectedOptionKeys,
    });
  };
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
              // checked={checkedState[item.id]}
              checked={selectedItemId === item.id}
              id={`custom-checkbox-${item.id}`}
              onChange={(e) => {
                if (selectedItemId === item.id) {
                  // If the same item is clicked, uncheck it
                  setSelectedItemId(null);
                } else {
                  // Otherwise, set the newly clicked item as the selected one
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
                return setRemainingTime(timer);
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
          QNo={questionData?.QNo}
          question={questionData?.question}
          image={questionData?.image}
          options={questionOption}
          time={questionData?.time}
          questionSelected={checkedState.indexOf(true) > -1}
          questionData={questionData}
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
