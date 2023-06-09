import React from "react";
import { BoxWrapper } from "./Styled";
import {
  columnsManageStudent,
  pageSizeManageQuiz,
  rowsManageStudent,
} from "mock-data/Teacher/ManageStudent";

import CustomDataGrid from "components/CustomDataGrid";
import { Box } from "@mui/material";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import CachedIcon from "@mui/icons-material/Cached";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const TableSection = (props: any) => {
  const { setChecked } = props;

  return (
    <BoxWrapper>
      <CustomDataGrid
        rows={rowsManageStudent}
        columns={columnsManageStudent}
        pageSizeData={pageSizeManageQuiz}
        type={"1"}
        isCheckbox={true}
        setChecked={setChecked}
      />
    </BoxWrapper>
  );
};

export default TableSection;
