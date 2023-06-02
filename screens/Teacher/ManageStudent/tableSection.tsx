import React from "react";
import { BoxWrapper } from "./Styled";
import {
  columnsManageStudent,
  pageSizeManageStudent,
  rowsManageStudent,
} from "mock-data/Teacher/ManageStudent";
import CustomDataGrid from "components/CustomDataGrid";


const TableSection = (props: any) => {
  const {setChecked} = props;
  
  return (
    <BoxWrapper>
      <CustomDataGrid      
        rows={rowsManageStudent}
        columns={columnsManageStudent}
        pageSizeData={pageSizeManageStudent}
        type={"1"}
        isCheckbox={true}
        setChecked={setChecked}
      />
    </BoxWrapper>
  );
};

export default TableSection;
