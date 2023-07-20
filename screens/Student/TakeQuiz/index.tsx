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
  const questionTypeArr = ["MSN", "MSR", "MCN", "MCR"];
  const {
    setSelectedOptions,
    setAnwserCorrect,
    inputCaseSchema,
    setInputCaseSchema,
    quesLoading,
    setQuesLoading,
  } = useAppState();
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
            autoHideDuration: 1500,
          });
          // setSelectedOptions([]);
          // setInputCaseSchema()
        } else {
          setOpen(true);
        }
        const currentAllOptions = eval(data?.option || "");
        if (currentAllOptions?.length > 0) {
          setQuestionOptionNew(currentAllOptions);
        }
        if (!questionTypeArr.includes(data?.type)) {
          if (data?.selected_before?.length > 0) {
            const updatedObject = data?.selected_before?.map(
              (item: any, index: number) => {
                return {
                  id: index + 1,
                  anws: item,
                  isDisabled: true,
                  isColor: "#8C2531",
                };
              },
            );
            const itemsArrg = {
              id: updatedObject?.length + 1,
              anws: "",
              isCorrect: false,
              isDisabled: false,
            };
            const itemsAddNewObj = [...updatedObject, itemsArrg];
            setInputCaseSchema(itemsAddNewObj);
          } else {
            const itemsArrg = {
              id: 1,
              anws: "",
              isCorrect: false,
              isDisabled: false,
            };
            setInputCaseSchema([itemsArrg]);
          }
          // console.log(inputCaseSchema, "inputCaseSchema");
        } else {
          setSelectedOptions(data?.selected_before);
        }
      },
      (error: any) => {
        if (error) {
          enqueueSnackbar(error?.message, {
            variant: "error",
            autoHideDuration: 1500,
          });
        } else {
          setOpen(false);
        }
      },
    );

  // useEffect(() => {
  //   if (refQuesQuizById?.isloading) {
  //     console.log("Main Screen");
  //     setQuesLoading(refQuesQuizById?.isloading);
  //   }
  // }, refQuesQuizById?.isloading);

  useEffect(() => {
    if (checked?.length > 0) {
      if (checked?.find(Boolean)) {
        const firstFirstObject = checked?.find(Boolean);
        refQuesQuizById({
          id: firstFirstObject,
        });
      }
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

  const handleNext = async () => {
    setQuesLoading(true);
    const firstFirstObject = checked?.find(Boolean);
    const response = await refQuesQuizById({
      id: firstFirstObject,
    });
    setSelectedOptions([]);
    setAnwserCorrect(true);
    setQuesLoading(false);
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
