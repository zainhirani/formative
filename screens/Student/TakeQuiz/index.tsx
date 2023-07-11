import React, { useEffect, useState, useMemo } from "react";
import { Box, IconButton, InputAdornment, Backdrop } from "@mui/material";
import { BoxWrapper, SelectBoxWrapper, TextFieldStyled } from "./Styled";
import CustomDataGrid from "components/CustomDataGrid";
import { Search } from "@mui/icons-material";
import { columnsTakeQuiz, pageSizeTakeQuiz } from "mock-data/Student/TakeQuiz";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import CustomSelect from "components/CustomSelect/CustomSelect";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import QuestionsModal from "./QuestionsModalSection";
import {
  useCourseListing,
  useQuesQuizById,
  useTakeQuizListing,
} from "providers/Student/TakeQuiz";
import { debounce } from "lodash";
import { enqueueSnackbar } from "notistack";
import { useAppState } from "contexts/AppStateContext";
import Head from "next/head";

const TakeQuizScreen = () => {
  const { setSelectedOptions, setAnwserCorrect } = useAppState();
  const searchQuiz = useFormattedMessage(messages.searchQuiz);
  const selectCourseText = useFormattedMessage(messages.selectCourse);
  const [remainingTime, setRemainingTime] = useState(0);
  const [questionOptionNew, setQuestionOptionNew] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState<number[]>([]);
  const [lastSelected, setLastSelected] = useState(-1);
  const [searchChange, setSearchChange] = useState("");
  const [selectCourse, setSelectCourse] = useState("");
  const [page, setPage] = useState(1);
  const { data: coursesList } = useCourseListing();
  const {
    data: quizList,
    refetch: quizListRef,
    isFetching,
  }: any = useTakeQuizListing({
    Limit: pageSizeTakeQuiz,
    Page: page,
    ...(selectCourse && { courseId: selectCourse }),
    ...(searchChange && { SearchBy: searchChange }),
  });
  const { data: quesQuizByIdData, refetch: refQuesQuizById }: any =
    useQuesQuizById(
      {
        id: checked[0],
      },
      (data: any) => {
        if (data?.message === "Quiz completed successfully") {
          enqueueSnackbar(data?.message, {
            variant: "success",
          });
        } else {
          setOpen(true);
        }
        const currentAllOptions = eval(data?.option || "");
        if (currentAllOptions?.length > 0) {
          setQuestionOptionNew(currentAllOptions);
        }
      },
      (data: any) => {
        enqueueSnackbar(data?.message, {
          variant: "error",
        });
      },
    );

  useEffect(() => {
    if (checked?.length > 0) {
      const firstFirstObject = checked?.find(Boolean);
      refQuesQuizById({
        id: firstFirstObject,
      });
    }
  }, [checked]);

  useEffect(() => {
    if (!open) {
      setSelectedOptions([]);
      setAnwserCorrect(true);
    }
  }, [open]);

  useEffect(() => {
    quizListRef({
      Limit: pageSizeTakeQuiz,
      Page: page,
      ...(selectCourse && { courseId: selectCourse }),
      ...(searchChange && { SearchBy: searchChange }),
    });
  }, [searchChange, selectCourse, page]);

  const handleNext = () => {
    const firstFirstObject = checked?.find(Boolean);
    refQuesQuizById({
      id: firstFirstObject,
    });
    setSelectedOptions([]);
    setAnwserCorrect(true);
    // console.log(quesQuizByIdData?.timelimit, "quesQuizByIdData?.timelimit");
    // console.log(remainingTime, "remainingTime");
    setRemainingTime(quesQuizByIdData?.timelimit);
    // console.log(remainingTime, "set remainingTime");
  };

  const courseData = useMemo(() => {
    return coursesList?.data?.map((item: any) => ({
      value: item.id,
      label: item.course_name,
    }));
  }, [coursesList?.data]);

  const showColumns = {
    id: false,
    quiz: true,
    course: true,
    due_date: true,
  };

  const handleSelection = React.useCallback((ids: number[]) => {
    setLastSelected(ids[ids.length - 1]);
    setChecked([ids[ids?.length - 1]]);
  }, []);

  const onDrowerClose = () => {
    quizListRef({
      Limit: pageSizeTakeQuiz,
      Page: page,
      ...(selectCourse && { courseId: selectCourse }),
      ...(searchChange && { SearchBy: searchChange }),
    });
    setChecked((prev) => {
      if (prev?.length) {
        let newArray = prev.filter((cId) => cId !== lastSelected);
        return newArray;
      }
      return prev;
    });
  };
  const debouncedSearch = debounce((criteria) => {
    setSearchChange(criteria);
  }, 400);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const handleCourse = (course: any) => {
    setSelectCourse(course?.value);
  };

  const handleTimerEnd = () => {};

  const handleRemainingTimer = (remainingSeconds: any) => {
    setRemainingTime(remainingSeconds);
  };

  return (
    <>
      <Head>
        <title>Take Quiz</title>
      </Head>
      <Box>
        <BoxWrapper>
          <QuestionsModal
            drawerOpen={open}
            setDrawerOpen={() => setOpen((prev) => !prev)}
            onClose={onDrowerClose}
            selectedRowId={checked}
            quesQuizByIdData={quesQuizByIdData}
            refQuesQuizById={refQuesQuizById}
            questionOptionNew={questionOptionNew}
            setQuestionOptionNew={setQuestionOptionNew}
            handleNext={handleNext}
            handleTimerEnd={handleTimerEnd}
            handleRemainingTimer={handleRemainingTimer}
            remainingTime={remainingTime}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "60px",
            }}
          >
            <TextFieldStyled
              placeholder={searchQuiz}
              variant="outlined"
              onChange={onInputChange}
              InputProps={{
                style: { border: "none", outline: "0px" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="visibility" edge="end">
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <SelectBoxWrapper>
              <Box sx={{ width: "100%" }}>
                <CustomSelect
                  placeholder={selectCourseText}
                  dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                  // options={courseSelect}
                  options={courseData || []}
                  onChange={handleCourse}
                  isClearable={true}
                />
              </Box>
            </SelectBoxWrapper>
          </Box>
        </BoxWrapper>
        <BoxWrapper
          sx={{
            ".MuiDataGrid-columnHeaderDraggableContainer .MuiCheckbox-root": {
              display: "none",
            },
          }}
        >
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          />
          {/* @ts-ignore */}
          <CustomDataGrid
            rows={quizList?.data || []}
            columns={columnsTakeQuiz}
            pageSizeData={pageSizeTakeQuiz}
            type={"1"}
            isCheckbox={true}
            columnVisibilityModel={showColumns}
            onRowSelect={handleSelection}
            selectedIds={checked}
            handlePageChange={(_, v) => setPage(v)}
            page={page}
            loading={isFetching}
            totalRows={quizList?.count}
          />
        </BoxWrapper>
      </Box>
    </>
  );
};

export default TakeQuizScreen;
