import React, { useEffect, useState } from "react";
import { BoxWrapper } from "./Styled";
import { pageSizeManageQuiz } from "mock-data/Teacher/ManageStudent";
import { GridColDef } from "@mui/x-data-grid";

import CustomDataGrid from "components/CustomDataGrid";
import { useStudentListing } from "providers/teacher/student";

export const columnsManageStudent: GridColDef[] = [
  {
    field: "last_name",
    headerName: "Last Name",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "first_name",
    headerName: "First Name",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "username",
    headerName: "User Name",
    minWidth: 100,
    flex: 1,
  },

  {
    field: "year_of_graduation",
    headerName: "YOG",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "program",
    headerName: "Program",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "email",
    headerName: "E-mail ",
    minWidth: 100,
    flex: 1,
  },
];

const LIMIT= 10

const TableSection = (props: any) => {
  const { setChecked,program,yearOfGraduation, isCheckbox,setUserId,searchBy,selectNewCourse} = props;
  const [page,setPage] = useState(1)
  const studentListing = useStudentListing({yop:yearOfGraduation,program:program,SearchBy:searchBy,Limit:LIMIT,Page:page});
 

  return (
    <BoxWrapper>
      <CustomDataGrid
        rows={studentListing.data  || []}
        columns={columnsManageStudent}
        pageSizeData={10}
        type={"1"}
        isCheckbox={isCheckbox}
        setChecked={setChecked}
        loading={studentListing.isFetching}
        getSelectedId={(e) => setUserId(e?.[0])}
        page={page}
        handlePageChange={(_,v) => setPage(v)}
        totalRows={14}
        
      
      />
    </BoxWrapper>
  );
};

export default TableSection;
