import React from "react";
import { Grid, IconButton, Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Image from "next/image";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import FormattedMessage from "theme/FormattedMessage";
import messages from "screens/Teacher/ManageQuizScreen/messages";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Link from "next/link";
import APP_ROUTES from "constants/RouteConstants";

export const pageSizeManageQuiz = 12;

export const columnsQuizResults: GridColDef[] = [
  {
    field: "quizNoSort",
    headerName: "Quiz No.",
    minWidth: 180,
    flex: 1,
    renderCell: (params: any) => {
      const num = params.formattedValue;
      return (
        <Grid container spacing={3} alignItems="center">
          <Grid item xs>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                color: (theme) => theme.palette.text.primary,
                fontWeight: "700",
              }}
            >
              {num} <ArrowForwardRoundedIcon style={{ fontSize: "20px" }} />
            </Box>
          </Grid>
        </Grid>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "course",
    headerName: "Course",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "folder",
    headerName: "Folder",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 150,
    flex: 1,
    renderCell: (params: any) => {
      const status = params.formattedValue;
      return (
        <Grid container spacing={3} alignItems="center">
          {status == "Draft" ? (
            <Grid item xs>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  color: (theme) => theme.additionalColors?.primaryYellow,
                }}
              >
                <SaveAsIcon style={{ fontSize: "20px" }} />{" "}
                <FormattedMessage {...messages.statusDraft} />
              </Box>
            </Grid>
          ) : (
            <Grid item xs>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  color: (theme) => theme.additionalColors?.primaryGreen,
                }}
              >
                <CheckCircleIcon style={{ fontSize: "20px" }} />{" "}
                <FormattedMessage {...messages.statusCompleted} />
              </Box>
            </Grid>
          )}
        </Grid>
      );
    },
  },
  {
    field: "difficulty",
    headerName: "Difficulty",
    minWidth: 200,
    flex: 1,
  },
  {
    field: "std_difficulty",
    headerName: "Std. Difficulty",
    minWidth: 180,
    flex: 1,
  },
  {
    field: "quick_actions",
    headerName: "Quick Actions",
    width: 200,
    headerClassName: "super-app-theme--header",
    renderCell: (params: any) => {
      return (
        <Grid container spacing={3}>
          <Grid item xs>
            <Link href={APP_ROUTES.QUIZ_RESULTS + "/1"}>
              <IconButton>
                <Image
                  alt="quiz-logo"
                  src={"/view.svg"}
                  width={20}
                  height={20}
                />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      );
    },
  },
];

export const rowsQuizResults = [
  {
    id: 1,
    quizNoSort: 306,
    name: "Team 2023",
    course: "Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "1.00",
    std_difficulty: "1.00",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 2,
    quizNoSort: 307,
    name: "Team 2023",
    course: "Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "1.00",
    std_difficulty: "1.0",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 3,
    quizNoSort: 308,
    name: "Team 2023",
    course: "Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "1.00",
    std_difficulty: "1.0",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 4,
    quizNoSort: 309,
    name: "Team 2023",
    course: "Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "1.00",
    std_difficulty: "1.0",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 5,
    quizNoSort: 310,
    name: " 1Team 2023 ",
    course: "2Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "1.00",
    std_difficulty: "1.0",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 6,
    quizNoSort: 311,
    name: "Team 2023",
    course: "4Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "1.00",
    std_difficulty: "1.0",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 7,
    quizNoSort: 311,
    name: "Team 2023",
    course: "4Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "1.00",
    std_difficulty: "1.0",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 8,
    quizNoSort: 311,
    name: "Team 2023",
    course: "4Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "1.00",
    std_difficulty: "1.0",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 9,
    quizNoSort: 311,
    name: "Team 2023",
    course: "4Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "1.00",
    std_difficulty: "1.0",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 10,
    quizNoSort: 311,
    name: "Team 2023",
    course: "4Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "1.00",
    std_difficulty: "1.0",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 11,
    quizNoSort: 311,
    name: "Team 2023",
    course: "4Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "1.00",
    std_difficulty: "1.0",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 12,
    quizNoSort: 311,
    name: "Team 2023",
    course: "4Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "1.00",
    std_difficulty: "1.0",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 13,
    quizNoSort: 311,
    name: "Team 2023",
    course: "4Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "1.00",
    std_difficulty: "1.0",
    quick_actions: "Cannabis 2023",
  },
];



export const columnsQuizQuestions: GridColDef[] = [
  {
    field: "id",
    headerName: "No.",
    minWidth: 80,
    flex: 1,
    renderCell: (params: any) => {
      const num = params.formattedValue;
      return (
        <Grid container spacing={3} alignItems="center">
          <Grid item xs>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                color: (theme) => theme.palette.text.primary,
                fontWeight: "700",
              }}
            >
              {num} <ArrowForwardRoundedIcon style={{ fontSize: "20px" }} />
            </Box>
          </Grid>
        </Grid>
      );
    },
  },
  {
    field: "detail",
    headerName: "Question",
    minWidth: 350,
    flex: 2,
  },
  {
    field: "score",
    headerName: "Score",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "difficulty",
    headerName: "Difficulty",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "averageTime",
    headerName: "Time",
    minWidth: 100,
    flex: 1,
  },

  {
    field: "A",
    headerName: "A",
    minWidth: 100,
    flex: 1,
    valueGetter(params) {return params?.row?.optionStatistics?.A},
  },
  {
    field: "B",
    headerName: "B",
    minWidth: 100,
    flex: 1,
    valueGetter(params) {return params?.row?.optionStatistics?.B},
  },
  {
    field: "c",
    headerName: "C",
    minWidth: 100,
    flex: 1,
    valueGetter(params) {return params?.row?.optionStatistics?.C},
  },
  {
    field: "D",
    headerName: "D",
    minWidth: 100,
    flex: 1,
    valueGetter(params) {return params?.row?.optionStatistics?.D},
  },
  {
    field: "e",
    headerName: "E",
    minWidth: 100,
    flex: 1,
    valueGetter(params) {return params?.row?.optionStatistics?.E},
  },
  {
    field: "f",
    headerName: "F",
    minWidth: 100,
    flex: 1,
    valueGetter(params) {return params?.row?.optionStatistics?.F},
  },
  {
    field: "g",
    headerName: "G",
    minWidth: 100,
    flex: 1,
    valueGetter(params) {return params?.row?.optionStatistics?.G},
  },
  {
    field: "h",
    headerName: "H",
    minWidth: 100,
    flex: 1,
    valueGetter(params) {return params?.row?.optionStatistics?.H},
  },
];

export const rowsQuizAttemptedStds = [
  {
    id: 1,
    fname: "Zakria",
    lname: "Akbari",
    score: "115.7%",
    traditional: "80.0%",
  },
  {
    id: 2,
    fname: "Zakria",
    lname: "Akbari",
    score: "115.7%",
    traditional: "80.0%",
  },
  {
    id: 3,
    fname: "Zakria",
    lname: "Akbari",
    score: "115.7%",
    traditional: "80.0%",
  },
  {
    id: 4,
    fname: "Zakria",
    lname: "Akbari",
    score: "115.7%",
    traditional: "80.0%",
  },
  {
    id: 5,
    fname: "Zakria",
    lname: "Akbari",
    score: "115.7%",
    traditional: "80.0%",
  },
  {
    id: 6,
    fname: "Zakria",
    lname: "Akbari",
    score: "115.7%",
    traditional: "80.0%",
  },
  {
    id: 7,
    fname: "Zakria",
    lname: "Akbari",
    score: "115.7%",
    traditional: "80.0%",
  },
  {
    id: 8,
    fname: "Zakria",
    lname: "Akbari",
    score: "115.7%",
    traditional: "80.0%",
  },
  {
    id: 9,
    fname: "Zakria",
    lname: "Akbari",
    score: "115.7%",
    traditional: "80.0%",
  },
  {
    id: 10,
    fname: "Zakria",
    lname: "Akbari",
    score: "115.7%",
    traditional: "80.0%",
  },
];

export const rowsQuizQuestions = [
  {
    id: 1,
    no: "108/1",
    question: "In the muscle which enzyme is used in b",
    score: "10",
    difficulty: "1.00",
    time: "13 Sec",
    a: "0",
    b: "0",
    c: "0",
    d: "0",
    e: "0",
    f: "",
    g: "",
    h: "",
  },
  {
    id: 2,
    no: "108/1",
    question: "In the muscle which enzyme is used in b",
    score: "10",
    difficulty: "1.00",
    time: "13 Sec",
    a: "0",
    b: "0",
    c: "0",
    d: "0",
    e: "0",
    f: "",
    g: "",
    h: "",
  },
  {
    id: 3,
    no: "108/1",
    question: "In the muscle which enzyme is used in b",
    score: "10",
    difficulty: "1.00",
    time: "13 Sec",
    a: "0",
    b: "0",
    c: "0",
    d: "0",
    e: "0",
    f: "",
    g: "",
    h: "",
  },
  {
    id: 4,
    no: "108/1",
    question: "In the muscle which enzyme is used in b",
    score: "10",
    difficulty: "1.00",
    time: "13 Sec",
    a: "0",
    b: "0",
    c: "0",
    d: "0",
    e: "0",
    f: "",
    g: "",
    h: "",
  },
  {
    id: 5,
    no: "108/1",
    question: "In the muscle which enzyme is used in b",
    score: "10",
    difficulty: "1.00",
    time: "13 Sec",
    a: "0",
    b: "0",
    c: "0",
    d: "0",
    e: "0",
    f: "",
    g: "",
    h: "",
  },
  {
    id: 6,
    no: "108/1",
    question: "In the muscle which enzyme is used in b",
    score: "10",
    difficulty: "1.00",
    time: "13 Sec",
    a: "0",
    b: "0",
    c: "0",
    d: "0",
    e: "0",
    f: "",
    g: "",
    h: "",
  },
  {
    id: 7,
    no: "108/1",
    question: "In the muscle which enzyme is used in b",
    score: "10",
    difficulty: "1.00",
    time: "13 Sec",
    a: "0",
    b: "0",
    c: "0",
    d: "0",
    e: "0",
    f: "",
    g: "",
    h: "",
  },
  {
    id: 8,
    no: "108/1",
    question: "In the muscle which enzyme is used in b",
    score: "10",
    difficulty: "1.00",
    time: "13 Sec",
    a: "0",
    b: "0",
    c: "0",
    d: "0",
    e: "0",
    f: "",
    g: "",
    h: "",
  },
  {
    id: 7,
    no: "108/1",
    question: "In the muscle which enzyme is used in b",
    score: "10",
    difficulty: "1.00",
    time: "13 Sec",
    a: "0",
    b: "0",
    c: "0",
    d: "0",
    e: "0",
    f: "",
    g: "",
    h: "",
  },
  {
    id: 10,
    no: "108/1",
    question: "In the muscle which enzyme is used in b",
    score: "10",
    difficulty: "1.00",
    time: "13 Sec",
    a: "0",
    b: "0",
    c: "0",
    d: "0",
    e: "0",
    f: "",
    g: "",
    h: "",
  },
];
