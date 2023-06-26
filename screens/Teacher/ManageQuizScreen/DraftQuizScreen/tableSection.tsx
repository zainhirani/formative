import React, { useState, useEffect } from "react";
import { Box, Button, ButtonGroup } from "@mui/material";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import CachedIcon from "@mui/icons-material/Cached";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { BoxButtonWrapper, BoxWrapper, QuizGroupButtonBox } from "./Styled";
import { ButtonConfig } from "components/GroupedButton/types";
import GroupedButton from "components/GroupedButton";
import CustomDataGrid from "components/CustomDataGrid";
import {
  columnsManageQuizDraft,
  pageSizeManageQuizDraft,
  rowsManageQuizDraft,
} from "mock-data/Teacher/ManageQuizDraft";
import SideDrawer from "components/Drawer";
import DrawerQuestionsSection from "./DrawerSections/DrawerQuestionsSection";
import DrawerStudentsSection from "./DrawerSections/DrawerStudentsSection";
import DrawerQuestionsDetailSection from "./DrawerSections/DrawerQuestionsDetailSection";
import QuizQuestionFormat from "components/QuizQuestionFormat";
import CustomeDateTimePicker from "components/CustomDateTimePicker";
import { ButtonWrapper } from "components/GroupedButton/Styled";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import dayjs from "dayjs";
import {
  useQuizDuplicate,
  useQuizRemove,
  useQuizSave,
  useQuizSaveEdit,
} from "providers/Teacher/TeacherQuiz";
import APP_ROUTES from "constants/RouteConstants";

const TableSection = (props: any) => {
  const {
    handleChange,
    setFieldValue,
    values,
    quizByIdData,
    selectedQuestions,
    setSelectedQuestions,
    COLUMNS_CONFIG,
  } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerOpenStudents, setDrawerOpenStudents] = useState(false);
  const [afterDatevalue, setAfterDatevalue] = useState(null);
  const [beforeDatevalue, setBeforeDatevalue] = useState(null);
  const [loadingTable, setLoadingTable] = useState(false);
  const router = useRouter();
  const { id: editId } = router.query;
  const editPage = editId == undefined ? false : true;
  const quizSave = useQuizSave({});
  const quizSaveEdit = useQuizSaveEdit({});
  const deleteQuiz = useQuizRemove();
  const duplicateQuiz = useQuizDuplicate();

  useEffect(() => {
    if ((quizSave.isSuccess, deleteQuiz.isSuccess, duplicateQuiz.isSuccess)) {
      router.push(APP_ROUTES.MANAGE_QUIZ);
    }
  }, [quizSave.isSuccess, deleteQuiz.isSuccess, duplicateQuiz.isSuccess]);

  // Save Payload
  function extractIds(arr: any) {
    var ids = [];
    for (var i = 0; i < arr.length; i++) {
      ids.push(arr[i].id);
    }
    return ids;
  }

  const name = values?.name;
  const reviewable = values?.reviewable;
  const courseIdForm = values?.courseId?.value;
  const folderIdForm = values?.folderId?.value;
  const timeLimitPerSec = values?.timeLimitPerSec;
  const statusForm = values?.status?.value;
  const scoringIdForm = values?.scoringId?.value;
  const start_time_save = values?.start_time;
  const end_time_save = values?.end_time;
  const questionIds = extractIds(selectedQuestions);

  const saveObject: any = {
    name: name,
    reviewable: reviewable,
    courseId: courseIdForm,
    folderId: folderIdForm,
    timeLimitPerSec: timeLimitPerSec,
    status: statusForm,
    scoringId: scoringIdForm,
    start_time: start_time_save,
    end_time: end_time_save,
    questionsId: questionIds,
  };
  // console.log(saveObject, "saveObject");

  const handelSaveQuiz = (e: any) => {
    if (
      !saveObject?.name &&
      !saveObject?.reviewable &&
      !saveObject?.courseId &&
      !saveObject?.folderId &&
      !saveObject?.timeLimitPerSec &&
      !saveObject?.scoringId &&
      !saveObject?.status &&
      !saveObject?.start_time &&
      !saveObject?.end_time &&
      !saveObject?.questionsId
      // !questionIds
    ) {
      enqueueSnackbar(`Please fill the fields`, {
        variant: "error",
        autoHideDuration: 3000,
      });
    } else {
      if (!editPage) {
        quizSave.mutate(saveObject);
      } else {
        const quizId = quizByIdData?.id;
        const newData: any = { saveObject, quizId };
        quizSaveEdit.mutate(newData);
      }
    }
  };
  // Save Payload
  const configManageQuiz = [
    {
      key: "print",
      startIcon: <LocalPrintshopOutlinedIcon />,
      render: () => {
        return <Box>Print</Box>;
      },
      onClick: () => {
        window.print();
      },
    },
    {
      key: "refresh",
      startIcon: <CachedIcon />,
      render: () => {
        return <Box>Refresh</Box>;
      },
      onClick: () => {
        setLoadingTable(true);
        setTimeout(() => {
          setLoadingTable(false);
        }, 1000);
      },
    },
    {
      key: "addQuestion",
      startIcon: <AddCircleOutlineIcon />,
      render: () => {
        return <Box>Add Question</Box>;
      },
      onClick: () => {
        setDrawerOpen(true);
      },
    },
  ];

  const handleDrawerCloseStudents = () => {
    setDrawerOpenStudents(false);
  };

  const handleOpenDrawerStudent = () => {
    if (editId) {
      setDrawerOpenStudents(true);
    } else {
      enqueueSnackbar("You must save first", {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
  };

  const startDateHandler = (date: any) => {
    const formattedDate = date.toISOString();
    setFieldValue("start_time", formattedDate);
    setBeforeDatevalue(formattedDate);
  };
  const endDateHandler = (date: any) => {
    const formattedDate = date.toISOString();
    setFieldValue("end_time", formattedDate);
    setAfterDatevalue(formattedDate);
  };
  const handleDeleteQuiz = async () => {
    const result: any = await deleteQuiz.mutateAsync({ id: editId });
    if (result?.data) {
      router.push(APP_ROUTES.MANAGE_QUIZ);
    }
    enqueueSnackbar("Quiz Deleted Successfully", {
      variant: "success",
      autoHideDuration: 3000,
    });
  };
  const handleDuplicateQuiz = async () => {
    const result: any = await duplicateQuiz.mutateAsync({ id: editId });
    if (result?.id) {
      router.push(APP_ROUTES.MANAGE_QUIZ);
    }
    enqueueSnackbar("Quiz Duplicate Successfully", {
      variant: "success",
      autoHideDuration: 3000,
    });
  };
  const currentDate = editPage ? dayjs(`${quizByIdData?.start_time}`) : dayjs();

  return (
    <>
      <BoxWrapper>
        <CustomDataGrid
          rows={selectedQuestions}
          columns={columnsManageQuizDraft}
          pageSizeData={pageSizeManageQuizDraft}
          type={"2"}
          isCheckbox={false}
          buttonArray={configManageQuiz}
          loading={loadingTable}
        />
      </BoxWrapper>

      <BoxButtonWrapper>
        <Box sx={{ display: "flex" }}>
          <CustomeDateTimePicker
            label="Start Time"
            value={editId ? dayjs(`${quizByIdData?.start_time}`) : null}
            onChange={startDateHandler}
            currentDate={currentDate}
          />
          <CustomeDateTimePicker
            label="Stop Time:"
            value={editId ? dayjs(`${quizByIdData?.end_time}`) : null}
            onChange={endDateHandler}
          />
        </Box>
        <QuizGroupButtonBox>
          <ButtonGroup
            className="quizButtonGroup"
            variant="contained"
            // aria-label="Grouped button"
          >
            <ButtonWrapper
              startIcon={<AddCircleOutlineOutlinedIcon />}
              className="btn cusFirstChild"
              onClick={handleOpenDrawerStudent}
            >
              Add Students
            </ButtonWrapper>
            <ButtonWrapper
              type="submit"
              startIcon={<SaveOutlinedIcon />}
              className="btn"
              onClick={handelSaveQuiz}
            >
              Save
            </ButtonWrapper>
            {editId ? (
              <ButtonWrapper
                startIcon={<DifferenceOutlinedIcon />}
                className="btn"
                onClick={handleDuplicateQuiz}
              >
                Duplicate
              </ButtonWrapper>
            ) : (
              ""
            )}
            <ButtonWrapper
              startIcon={<ArrowCircleLeftOutlinedIcon />}
              className="btn"
            >
              Withdraw
            </ButtonWrapper>
            {editId ? (
              <ButtonWrapper
                startIcon={<DeleteOutlineOutlinedIcon />}
                className="btn"
                onClick={handleDeleteQuiz}
              >
                Delete
              </ButtonWrapper>
            ) : (
              ""
            )}
          </ButtonGroup>
        </QuizGroupButtonBox>
      </BoxButtonWrapper>

      <SideDrawer
        title="Add Students"
        open={drawerOpenStudents}
        onClose={handleDrawerCloseStudents}
      >
        <DrawerStudentsSection quizByIdData={quizByIdData} />
      </SideDrawer>

      <DrawerQuestionsSection
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        setSelectedQuestions={setSelectedQuestions}
        selectedQuestions={selectedQuestions}
        COLUMNS_CONFIG={COLUMNS_CONFIG}
      />

      <DrawerQuestionsDetailSection />
    </>
  );
};

export default React.memo(TableSection);
