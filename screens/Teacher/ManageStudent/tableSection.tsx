import React from "react";
import { BoxWrapper } from "./Styled";
import {
  columnsManageQuiz,
  pageSizeManageQuiz,
  rowsManageStudent,
} from "mock-data/Teacher/ManageStudent";

import CustomDataGrid from "components/CustomDataGrid";


const TableSection = (props: any) => {
  const {setChecked} = props;
    return (
    <BoxWrapper>
      <CustomDataGrid
        rows={rowsManageStudent}
        columns={columnsManageQuiz}
        pageSizeData={pageSizeManageQuiz}
        type={"1"}
        isCheckbox={true}
        setChecked={setChecked}
      />
    </BoxWrapper>
  );
};

export default TableSection;
