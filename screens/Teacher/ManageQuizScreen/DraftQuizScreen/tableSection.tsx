import React, { useState } from "react";
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

const TableSection = (props: any) => {
  const { handleChange, setFieldValue, values, quizByIdData } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerOpenStudents, setDrawerOpenStudents] = useState(false);
  const [afterDatevalue, setAfterDatevalue] = useState(null);
  const [beforeDatevalue, setBeforeDatevalue] = useState(null);
  const router = useRouter();

  const { id: editId } = router.query;

  const config: ButtonConfig[] = [
    {
      key: "addStudents",
      startIcon: <ArrowCircleRightOutlinedIcon />,
      render: () => {
        return <Box>Add Students</Box>;
      },
      onClick: () => {
        setDrawerOpenStudents(true);
      },
    },
    {
      key: "save",
      startIcon: <ArrowCircleRightOutlinedIcon />,
      render: () => {
        return <Button type="submit">Save</Button>;
      },
      onClick: () => {
        // console.log("Save");
      },
    },
    {
      key: "duplicate",
      startIcon: <ArrowCircleRightOutlinedIcon />,
      render: () => {
        return <Box>Duplicate</Box>;
      },
      onClick: () => {
        // console.log("Duplicate");
      },
    },
    {
      key: "withdraw",
      startIcon: <ArrowCircleRightOutlinedIcon />,
      render: () => {
        return <Box>Withdraw</Box>;
      },
      onClick: () => {
        // console.log("Withdraw");
      },
    },
    {
      key: "delete",
      startIcon: <ArrowCircleRightOutlinedIcon />,
      render: () => {
        return <Box>Delete</Box>;
      },
      onClick: () => {
        // console.log("Delete");
      },
    },
  ];
  const configManageQuiz = [
    {
      key: "print",
      startIcon: <LocalPrintshopOutlinedIcon />,
      render: () => {
        return <Box>Print</Box>;
      },
      onClick: () => {
        // console.log("Print");
      },
    },
    {
      key: "refresh",
      startIcon: <CachedIcon />,
      render: () => {
        return <Box>Refresh</Box>;
      },
      onClick: () => {
        // console.log("Refresh");
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
      });
    }
  };

  // console.log(quizByIdData?.start_time, "table section component is re-render");
  return (
    <>
      <BoxWrapper>
        <CustomDataGrid
          rows={rowsManageQuizDraft}
          columns={columnsManageQuizDraft}
          pageSizeData={pageSizeManageQuizDraft}
          type={"2"}
          isCheckbox={false}
          buttonArray={configManageQuiz}
        />
      </BoxWrapper>

      <BoxButtonWrapper>
        <Box sx={{ display: "flex" }}>
          <CustomeDateTimePicker
            label="Start Time"
            value={editId ? dayjs(`${quizByIdData?.start_time}`) : ""}
            onChange={setBeforeDatevalue}
          />
          <CustomeDateTimePicker
            label="Stop Time:"
            value={dayjs(`${quizByIdData?.end_time}`)}
            onChange={setAfterDatevalue}
          />
        </Box>
        <QuizGroupButtonBox>
          <ButtonGroup
            className="quizButtonGroup"
            variant="contained"
            aria-label="Grouped button"
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
              onClick={() => {}}
            >
              Save
            </ButtonWrapper>
            <ButtonWrapper
              startIcon={<DifferenceOutlinedIcon />}
              className="btn"
            >
              Duplicate
            </ButtonWrapper>
            <ButtonWrapper
              startIcon={<ArrowCircleLeftOutlinedIcon />}
              className="btn"
            >
              Withdraw
            </ButtonWrapper>
            <ButtonWrapper
              startIcon={<DeleteOutlineOutlinedIcon />}
              className="btn"
            >
              Delete
            </ButtonWrapper>
          </ButtonGroup>
        </QuizGroupButtonBox>
        {/* <GroupedButton config={config} /> */}
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
      />

      <DrawerQuestionsDetailSection />
    </>
  );
};

export default React.memo(TableSection);
