import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import CachedIcon from "@mui/icons-material/Cached";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { BoxButtonWrapper, BoxWrapper } from "./Styled";
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

const TableSection = (props: any) => {
  const { handleChange, setFieldValue, values } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerOpenStudents, setDrawerOpenStudents] = useState(false);

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

  // console.log("table section component is re-render");
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
        <Box>Date</Box>
        <GroupedButton config={config} />
      </BoxButtonWrapper>

      <SideDrawer
        title="Add Students"
        open={drawerOpenStudents}
        onClose={handleDrawerCloseStudents}
      >
        <DrawerStudentsSection />
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
