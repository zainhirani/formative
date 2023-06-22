import React, { useEffect, useState } from "react";
import { BoxWrapper } from "./Styled";
import { GridColDef } from "@mui/x-data-grid";
import CustomDataGrid from "components/CustomDataGrid";
import { useStudentListing } from "providers/teacher/student";
import { BoxItemWrapper } from "../ManageQuizScreen/DraftQuizScreen/DrawerSections/Styled";

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

const LIMIT = 10;

const TableSection = (props: any) => {
  const {
    setChecked,
    program,
    yearOfGraduation,
    setUserId,
    isCheckbox
  } = props;
  const [page, setPage] = useState(1);
  const studentListing = useStudentListing({
    yop: yearOfGraduation,
    program: program,
    Limit: LIMIT,
    Page: page,
  });

  return (
    <BoxWrapper>
      <CustomDataGrid
        rows={studentListing?.data?.data || []}
        columns={columnsManageStudent}
        pageSizeData={10}
        type={"1"}
        isCheckbox={isCheckbox}
        setChecked={setChecked}
        loading={studentListing.isFetching}
        getSelectedId={(e) => setUserId(e?.[0])}
        page={page}
        handlePageChange={(_, v) => setPage(v)}
        totalRows={studentListing?.data?.count}
      />
    </BoxWrapper>
  );
};

export default TableSection;
