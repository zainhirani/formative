import React from "react";
import { Grid, IconButton, Box } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { CheckBox } from "@mui/icons-material";

export const pageSizeManageQuiz = 12;

export const columnsManageStudent: GridColDef[] = [
  {
    field: "lastName",
    headerName: "Last Name",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "firstName",
    headerName: "First Name",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "userName",
    headerName: "User Name",
    minWidth: 100,
    flex: 1,
  },

  {
    field: "yog",
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

export const rowsManageStudent = [
  {
    id: 1,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 2,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 3,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 4,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 5,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 6,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 7,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 8,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 9,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 10,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 11,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 12,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 13,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
];
