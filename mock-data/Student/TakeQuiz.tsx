import React from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

export const courseSelect = [
  { value: "Physics", label: "Physics" },
  { value: "MedChem", label: "MedChem" },
  { value: "Chemistry", label: "Chemistry" },
];

export const pageSizeTakeQuiz = 12;

export const columnsTakeQuiz: GridColDef[] = [
  {
    field: "quiz",
    headerName: "Quiz",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "course",
    headerName: "Course",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "due_date",
    headerName: "Due Date",
    minWidth: 150,
    flex: 1,
  },
];

export const rowsTakeQuiz = [
  {
    quiz: "MedChem Week 4",
    course: "MedChem",
    due_date: "March 17, 2024 at 10:26:00 AM",
  },
  {
    quiz: "MedChem Week 5",
    course: "MedChem",
    due_date: "March 18, 2024 at 10:26:00 AM",
  },
  {
    quiz: "MedChem Week 6",
    course: "MedChem",
    due_date: "March 19, 2024 at 10:26:00 AM",
  },
  {
    quiz: "MedChem Week 7",
    course: "MedChem",
    due_date: "March 20, 2024 at 10:26:00 AM",
  },
  {
    quiz: "MedChem Week 8",
    course: "MedChem",
    due_date: "March 21, 2024 at 10:26:00 AM",
  },
  {
    quiz: "MedChem Week 9",
    course: "MedChem",
    due_date: "March 22, 2024 at 10:26:00 AM",
  },
  {
    quiz: "MedChem Week 10",
    course: "MedChem",
    due_date: "March 23, 2024 at 10:26:00 AM",
  },
  {
    quiz: "MedChem Week 11",
    course: "MedChem",
    due_date: "March 24, 2024 at 10:26:00 AM",
  },
  {
    quiz: "MedChem Week 12",
    course: "MedChem",
    due_date: "March 25, 2024 at 10:26:00 AM",
  },
  {
    quiz: "MedChem Week 13",
    course: "MedChem",
    due_date: "March 25, 2024 at 10:26:00 AM",
  },
];
