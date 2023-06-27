import React, { useEffect, useState } from "react";
import { BoxWrapper } from "./Styled";
import { GridColDef } from "@mui/x-data-grid";
import CustomDataGrid from "components/CustomDataGrid";
import { useStudentListing } from "providers/Teacher/student";
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
    isCheckbox,
    checkedId,
    handleSelection,
    studentData,
    loading,
    totalCount,
    page,
    handlePageChange,
    getRowId,
  } = props;
  return (
    <BoxWrapper>
      <CustomDataGrid
        rows={studentData}
        //@ts-ignore
        getRowId={getRowId}
        columns={columnsManageStudent}
        pageSizeData={10}
        type={"1"}
        isCheckbox={isCheckbox}
        setChecked={setChecked}
        // loading={studentListing.isFetching}
        loading={loading}
        getSelectedId={(e) => setUserId(e?.[0])}
        page={page}
        selectedIds={checkedId}
        onRowSelect={handleSelection}
        handlePageChange={handlePageChange}
        totalRows={totalCount}
      />
    </BoxWrapper>
  );
};

export default TableSection;
