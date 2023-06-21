import React from "react";
import { BoxWrapper } from "./Styled";
import {
  columnsManageQuiz,
  pageSizeManageQuiz,
  rowsManageQuiz,
} from "mock-data/Teacher/ManageQuiz";
import CustomDataGrid from "components/CustomDataGrid";
import { Box } from "@mui/material";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import CachedIcon from "@mui/icons-material/Cached";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { allCourses, allTeacherQuiz } from "providers/Teacher/TeacherQuiz/api";
import { useTeacherQuizListing } from "providers/Teacher/TeacherQuiz";

const TableSection = (props: any) => {
  const { searchChange, selectCourse, selectFolder, selectStatus } = props;
  const quizList = useTeacherQuizListing({
    courseId: selectCourse,
    folder: selectFolder,
    status: selectStatus,
    Limit: 10,
    Page: 1,
    ...(searchChange && { SearchBy: searchChange }),
  });
  console.log(
    { quizList, searchChange, selectCourse, selectFolder, selectStatus },
    "quizList",
  );

  const configManageQuiz = [
    {
      key: "print",
      startIcon: <LocalPrintshopOutlinedIcon />,
      render: () => {
        return <Box>Print</Box>;
      },
      onClick: () => {
        // console.log("Print");
      },
    },
    {
      key: "refresh",
      startIcon: <CachedIcon />,
      render: () => {
        return <Box>Refresh</Box>;
      },
      onClick: () => {
        // console.log("Refresh");
      },
    },
    {
      key: "addQuestion",
      startIcon: <AddCircleOutlineIcon />,
      render: () => {
        return <Box>Add Question</Box>;
      },
      onClick: () => {
        // console.log("Add Question");
      },
    },
  ];
  const configExport = [
    {
      key: "export",
      startIcon: <LocalPrintshopOutlinedIcon />,
      render: () => {
        return <Box>Export</Box>;
      },
      onClick: () => {
        // console.log("Export");
      },
    },
  ];
  const configCreate = [
    {
      key: "create",
      customClass: "filled",
      startIcon: <AddCircleOutlineIcon />,
      render: () => {
        return <Box>Create</Box>;
      },
      onClick: () => {
        // console.log("Create");
      },
    },
  ];
  return (
    <BoxWrapper>
      {/* @ts-ignore */}
      <CustomDataGrid
        // rows={rowsManageQuiz}
        // columns={columnsManageQuiz}
        // pageSizeData={pageSizeManageQuiz}
        // type={"1"}
        // isCheckbox={false}

        rows={quizList?.data?.data || []}
        columns={columnsManageQuiz}
        pageSizeData={pageSizeManageQuiz}
        type={"1"}
        isCheckbox={false}
        loading={quizList.isFetching}
      />
    </BoxWrapper>
  );
};

export default TableSection;
