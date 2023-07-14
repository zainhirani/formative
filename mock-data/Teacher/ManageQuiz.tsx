import React from "react";
import { Grid, IconButton, Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Image from "next/image";
import editSvg from "../../public/quiz/edit.svg";
import copySvg from "../../public/quiz/copy.svg";
import circleLeftSvg from "../../public/quiz/circle-left.svg";
import trashSvg from "../../public/quiz/trash.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import FormattedMessage from "theme/FormattedMessage";
import messages from "screens/Teacher/ManageQuizScreen/messages";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Link from "next/link";
import APP_ROUTES from "constants/RouteConstants";

export const pageSizeManageQuiz = 12;

export const columnsManageQuiz: GridColDef[] = [
  {
    field: "id",
    headerName: "Quiz No. sort",
    minWidth: 180,
    flex: 1,
    renderCell: (params: any) => {
      const num = params.formattedValue;
      return (
        <Grid container spacing={3} alignItems="center">
          <Grid item xs>
            <Link href={`${APP_ROUTES.EDIT_QUIZ.replace("[id]", params?.id)}`}>
              <Box
                sx={{
                  width: "inline",
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                {num} <ArrowForwardRoundedIcon style={{ fontSize: "20px" }} />
              </Box>
            </Link>
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
    field: "courses",
    headerName: "Course",
    minWidth: 150,
    flex: 1,
    renderCell: (params: any) => {
      return params?.row?.courses?.course_name;
    },
  },
  {
    field: "folders",
    headerName: "Folder",
    minWidth: 150,
    flex: 1,
    renderCell: (params: any) => {
      return params?.row?.folders?.name;
    },
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
          {status == "DRAFT" ||
          status == "AVAILABLE" ||
          status == "DISTRIBUTED" ||
          status == "ONGOING" ? (
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
            <Link href={`${APP_ROUTES.EDIT_QUIZ.replace("[id]", params?.id)}`}>
              <IconButton>
                <Image alt="quiz-logo" src={editSvg} />
              </IconButton>
            </Link>
            <IconButton>
              <Image alt="quiz-logo" src={copySvg} />
            </IconButton>
            <IconButton>
              <Image alt="quiz-logo" src={circleLeftSvg} />
            </IconButton>
            <IconButton>
              <Image alt="quiz-logo" src={trashSvg} />
            </IconButton>
          </Grid>
        </Grid>
      );
    },
  },
];

export const rowsManageQuiz = [
  {
    id: 1,
    quizNoSort: 306,
    name: "Team 2023",
    course: "Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "Cannabis 2023",
    std_difficulty: "Cannabis 2023",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 2,
    quizNoSort: 307,
    name: "Team 2023",
    course: "Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "Cannabis 2023",
    std_difficulty: "Cannabis 2023",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 3,
    quizNoSort: 308,
    name: "Team 2023",
    course: "Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "Cannabis 2023",
    std_difficulty: "Cannabis 2023",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 4,
    quizNoSort: 309,
    name: "Team 2023",
    course: "Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "Cannabis 2023",
    std_difficulty: "Cannabis 2023",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 5,
    quizNoSort: 310,
    name: " 1Team 2023 ",
    course: "2Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "Cannabis 2023",
    std_difficulty: "Cannabis 2023",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 6,
    quizNoSort: 311,
    name: "Team 2023",
    course: "4Cannabis 2023",
    folder: "/ Daily",
    status: "Draft",
    difficulty: "Cannabis 2023",
    std_difficulty: "Cannabis 2023",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 7,
    quizNoSort: 311,
    name: "Team 2023",
    course: "4Cannabis 2023",
    folder: "/ Daily",
    status: "Draft",
    difficulty: "Cannabis 2023",
    std_difficulty: "Cannabis 2023",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 8,
    quizNoSort: 311,
    name: "Team 2023",
    course: "4Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "Cannabis 2023",
    std_difficulty: "Cannabis 2023",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 9,
    quizNoSort: 311,
    name: "Team 2023",
    course: "4Cannabis 2023",
    folder: "/ Daily",
    status: "Draft",
    difficulty: "Cannabis 2023",
    std_difficulty: "Cannabis 2023",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 10,
    quizNoSort: 311,
    name: "Team 2023",
    course: "4Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "Cannabis 2023",
    std_difficulty: "Cannabis 2023",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 11,
    quizNoSort: 311,
    name: "Team 2023",
    course: "4Cannabis 2023",
    folder: "/ Daily",
    status: "Draft",
    difficulty: "Cannabis 2023",
    std_difficulty: "Cannabis 2023",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 12,
    quizNoSort: 311,
    name: "Team 2023",
    course: "4Cannabis 2023",
    folder: "/ Daily",
    status: "Draft",
    difficulty: "Cannabis 2023",
    std_difficulty: "Cannabis 2023",
    quick_actions: "Cannabis 2023",
  },
  {
    id: 13,
    quizNoSort: 311,
    name: "Team 2023",
    course: "4Cannabis 2023",
    folder: "/ Daily",
    status: "Completed",
    difficulty: "Cannabis 2023",
    std_difficulty: "Cannabis 2023",
    quick_actions: "Cannabis 2023",
  },
];
