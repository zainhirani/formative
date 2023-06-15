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



const TableSection = (props: any) => {
  const { setChecked,program,yearOfGraduation, isCheckbox } = props;
  console.log(program,'program')
  console.log(yearOfGraduation,'yearOfGraduation')
  const studentListing = useStudentListing({queryParams:{yop:yearOfGraduation?.toString(),program:program?.toString()}});
  // const studentListing = useStudentListing({queryParams:{yop:"2022",program:"Business Administration"}});

  // const studentListing = useStudentListing({});
  // console.log(studentListing?.data,'studentListing')


  return (
    <BoxWrapper>
      <CustomDataGrid
        rows={studentListing.data}
        columns={columnsManageStudent}
        pageSizeData={pageSizeManageQuiz}
        type={"1"}
        isCheckbox={isCheckbox}
        setChecked={setChecked}
        loading={studentListing.isFetching}
      />
    </BoxWrapper>
  );
};

export default TableSection;
