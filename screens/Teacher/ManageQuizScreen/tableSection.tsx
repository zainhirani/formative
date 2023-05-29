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
  const test = "working";
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
