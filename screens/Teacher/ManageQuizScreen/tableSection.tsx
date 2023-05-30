import React from "react";
import { BoxWrapper } from "./Styled";
import {
  columnsManageQuiz,
  pageSizeManageQuiz,
  rowsManageQuiz,
} from "mock-data/Teacher/ManageQuiz";
import CustomDataGrid from "components/CustomDataGrid";
import { Box } from "@mui/material";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import CachedIcon from "@mui/icons-material/Cached";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const TableSection = () => {
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
  const configExport = [
    {
      key: "export",
      startIcon: <LocalPrintshopOutlinedIcon />,
      render: () => {
        return <Box>Export</Box>;
      },
      onClick: () => {
        // console.log("Export");
      },
    },
  ];
  const configCreate = [
    {
      key: "create",
      customClass: "filled",
      startIcon: <AddCircleOutlineIcon />,
      render: () => {
        return <Box>Create</Box>;
      },
      onClick: () => {
        // console.log("Create");
      },
    },
  ];
  return (
    <BoxWrapper>
      <CustomDataGrid
        rows={rowsManageQuiz}
        columns={columnsManageQuiz}
        pageSizeData={pageSizeManageQuiz}
        type={"1"}
      />
    </BoxWrapper>
  );
};

export default TableSection;
