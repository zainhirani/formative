import { IconButton } from "@mui/material";
import Image from "next/image";
import courseRestoreSvg from "../../public/CourseType.svg";
import React from "react";

export const pageSizeManageCourse = 12;

export const columnsManageCourse = [
  {
    field: "id",
    headerName: "id",
    minWidth: 500,
    flex: 1,
  },
  {
    field: "course_name",
    headerName: "Course",
    minWidth: 500,
    flex: 1,
  },
  {
    field: "courseTarget",
    headerName: "Target Students",
    minWidth: 200,
    flex: 1,
    renderCell: (params: any) => {
      return params.value?.map((item: any) => item.programs);
      // .slice(2, -2)
      // .replaceAll(/[""]/g, "")
      // .toUpperCase();
    },
  },
  {
    field: "restore",
    headerName: " ",
    minWidth: 90,
    flex: 1,
    headerClassName: "restore-icon-left",
    renderCell: (params: any) => {
      return (
        <IconButton>
          <Image alt="restore-logo" src={courseRestoreSvg} />
        </IconButton>
      );
    },
  },
];

export const rowsManageCourse = [
  {
    id: 1,
    quizNoSort: 306,
    name: "Molecular Biology 2019",
    course: "Molecular Biology 2019",
    target_students: "COP",
    restore: "Completed",
  },
  {
    id: 2,
    quizNoSort: 307,
    name: "Molecular Biology 2019",
    course: "Molecular Biology 2019",
    target_students: " ",
    restore: "Completed",
  },
  {
    id: 3,
    quizNoSort: 308,
    name: "Molecular Biology 2019",
    course: "Molecular Biology 2019",
    target_students: "COP-2024; POD-2024",
    restore: "Completed",
  },
  {
    id: 4,
    quizNoSort: 309,
    name: "Molecular Biology 2019",
    course: "Molecular Biology 2019",
    target_students: "COP-2024",
    restore: "Completed",
  },
  {
    id: 5,
    quizNoSort: 310,
    name: "Molecular Biology 2019",
    course: "Molecular Biology 2019",
    target_students: "COP",
    restore: "Completed",
  },
  {
    id: 6,
    quizNoSort: 311,
    name: "Molecular Biology 2019",
    course: "Molecular Biology 2019",
    target_students: "COP-2026",
    restore: "Draft",
  },
];
