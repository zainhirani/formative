import React from "react";
import { BoxWrapper } from "./Styled";
import DataGridWithPagination from "components/DataGridWithPagination";
import {
  columnsManageQuiz,
  pageSizeManageQuiz,
  rowsManageQuiz,
} from "mock-data/Teacher/ManageQuiz";
import { Box } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const TableSection = () => {
  const config = {
    key: "addStudents",
    startIcon: <ArrowCircleRightOutlinedIcon />,
    render: () => {
      return <Box>Create New</Box>;
    },
    onClick: () => {
      // console.log("Add Students");
    },
  };
  return (
    <BoxWrapper>
      <DataGridWithPagination
        rows={rowsManageQuiz}
        columns={columnsManageQuiz}
        pageSizeData={pageSizeManageQuiz}
      />
    </BoxWrapper>
  );
};

export default TableSection;
