import React from "react";
import { Box } from "@mui/material";
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

const TableSection = () => {
  const config: ButtonConfig[] = [
    {
      key: "addStudents",
      startIcon: <ArrowCircleRightOutlinedIcon />,
      render: () => {
        return <Box>Add Students</Box>;
      },
      onClick: () => {
        // console.log("Add Students");
      },
    },
    {
      key: "save",
      startIcon: <ArrowCircleRightOutlinedIcon />,
      render: () => {
        return <Box>Save</Box>;
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
        // console.log("Add Question");
      },
    },
  ];
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
        <Box>Test</Box>
        <GroupedButton config={config} />
      </BoxButtonWrapper>
    </>
  );
};

export default TableSection;
