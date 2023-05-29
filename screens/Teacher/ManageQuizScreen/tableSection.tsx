import React from "react";
import { BoxWrapper } from "./Styled";
import DataGridWithPagination from "components/DataGridWithPagination";
import {
  columnsManageQuiz,
  pageSizeManageQuiz,
  rowsManageQuiz,
} from "mock-data/Teacher/ManageQuiz";

const TableSection = () => {
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
