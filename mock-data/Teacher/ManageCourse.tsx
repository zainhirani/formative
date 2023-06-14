// import { Box, Grid } from "@mui/material";
// import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import React from "react";

export const pageSizeManageCourse = 12;

export const columnsManageCourse = [
  {
    field: "id",
    headerName: "ID",
    minWidth: 60,
  },
  {
    field: "course_name",
    headerName: "Course",
    minWidth: 500,
    flex: 1,
  },
  {
    field: "course",
    headerName: "Target Students",
    minWidth: 150,
    flex: 1,
    renderCell: (params: any) => {
      // return params.value?.programs.replaceAll(/[""]/g, "");
      return params.value?.programs
        .slice(2, -2)
        .replaceAll(/[""]/g, "")
        .toUpperCase();
    },
  },
];

export const rowsManageCourse = [
  {
    id: 1,
    quizNoSort: 306,
    name: "Molecular Biology 2019",
    course_name: "Molecular Biology 2019",
    target_students: "COP",
    status: "Completed",
  },
  {
    id: 2,
    quizNoSort: 307,
    name: "Molecular Biology 2019",
    course_name: "Molecular Biology 2019",
    target_students: " ",
    status: "Completed",
  },
  {
    id: 3,
    quizNoSort: 308,
    name: "Molecular Biology 2019",
    course_name: "Molecular Biology 2019",
    target_students: "COP-2024; POD-2024",
    status: "Completed",
  },
  {
    id: 4,
    quizNoSort: 309,
    name: "Molecular Biology 2019",
    course_name: "Molecular Biology 2019",
    target_students: "COP-2024",
    status: "Completed",
  },
  {
    id: 5,
    quizNoSort: 310,
    name: "Molecular Biology 2019",
    course_name: "Molecular Biology 2019",
    target_students: "COP",
    status: "Completed",
  },
  {
    id: 6,
    quizNoSort: 311,
    name: "Molecular Biology 2019",
    course_name: "Molecular Biology 2019",
    target_students: "COP-2026",
    status: "Draft",
  },
];
