import React, { useState } from "react";
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

const TestYourself = () => {
  const categoryList = useCategoryListing();
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

  console.log(defaultOption, "default");

  const [category, setCategory] = useState({
    value: defaultOption.value,
    label: defaultOption.label,
  });
  const handleCategoryChange = (e: any) => {
    setCategory({ value: e?.value, label: e?.label });
  };
  console.log(category, "selected course");

  const questionList = useQuestionListing({ id: category?.value });
  const timer = 120;
  const [remainingTime, setRemainingTime] = useState(timer);

  const [checkedStateAns, setCheckedStateAns] = useState(
    new Array(questionData?.options?.length).fill(false),
  );
  const [checkedState, setCheckedState] = useState(
    new Array(dataTestYourself.length).fill(false),
  );
  const [submit, setSubmit] = useState(false);

  const handleOnChange = (position: any, e: any) => {
    if (checkedState.filter((i) => i).length >= 1 && e.target.checked) return;
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );
    setCheckedState(updatedCheckedState);
    setSubmit(false);
    setCheckedStateAns(new Array(questionData?.options?.length).fill(false));
  };

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
        // console.log(item, "item item");
        // const questionDetail = useQuestionDetail({ id: item?.id });

        return (
          <>
            <Checkbox
              icon={
                <>
                  {item?.attempted == false && item?.correct == false ? (
                    <CircleUnchecked sx={{ fontSize: "20px" }} />
                  ) : (
                    <IconButton sx={{ width: "20px", padding: "0px" }}>
                      {item?.correct == true ? (
                        <Image
                          src="/correct.svg"
                          width={20}
                          height={20}
                          alt="tick"
                        />
                      ) : item?.attempted == true ? (
                        <Image
                          src="/wrong.svg"
                          width={20}
                          height={20}
                          alt="tick"
                        />
                      ) : (
                        ""
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
              checked={checkedState[item.id]}
              id={`custom-checkbox-${item.id}`}
              onChange={(e) => handleOnChange(item?.id, e)}
              size="small"
              sx={{
                borderRadius: "50%",
                "&.Mui-checked": {
                  borderRadius: "50%",
                },
              }}
              onClick={(e) => {
                // console.log(e, "event");
                return setRemainingTime(timer);
              }}
            />
          </>
        );
      },
      handleClick: (item: any) => {
        // useQuestionDetail({ id: item?.id });
      },
    },
    {
      columnName: "Name",
      maxWidth: "20px",
      render: (item: { title: any; id: number }) => {
        return <>{item.title}</>;
      },
      handleClick: (item: any) => {
        // console.log(item?.id, "item");
      },
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
    <Box sx={{ display: "flex" }}>
      <BoxWrapper>
        <SelectBoxWrapper>
          <CustomSelectTestYourSelf
            value={category}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            options={optionsCourse}
            onChange={handleCategoryChange}
          />
        </SelectBoxWrapper>
        <DataTable data={questionList?.data} config={configTestYourself} />
      </BoxWrapper>
      <BoxWrapper sx={{ width: "60%", marginLeft: "15px" }}>
        <TakeQuizFormat
          id={questionData?.id}
          QNo={questionData?.QNo}
          question={questionData?.question}
          image={questionData?.image}
          options={questionData?.options}
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
        />
      </BoxWrapper>
    </Box>
    // </PageLayout>
  );
};

export default TestYourself;
