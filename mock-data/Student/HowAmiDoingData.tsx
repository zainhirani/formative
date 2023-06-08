import React from "react";
import { Grid, IconButton, Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import UnfoldMoreSharpIcon from "@mui/icons-material/UnfoldMoreSharp";
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

export const pageSizeManageHowAmiDoing = 12;

export const columnsManageHowAmiDoing: GridColDef[] = [
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
    minWidth: 250,
    flex: 1,
  },
  {
    field: "course",
    headerName: "Course",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "quizdate",
    headerName: "Quiz Date",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "datetaken",
    headerName: "Date Taken",
    minWidth: 150,
    flex: 1,
    renderCell: (params: any) => {
      const date = params.formattedValue;
      return (
        <Box
          sx={{
            color: (theme) => theme.palette.success.dark,
            fontWeight: "700",
          }}
        >
          {date}
        </Box>
      );
    },
  },
  {
    field: "score",
    headerName: "Score",
    minWidth: 200,
    flex: 1,
  },
];

export const rowsManageHowAmiDoing = [
  {
    id: 1,
    quizNoSort: 296,
    name: "MedChem Week 5 Formative",
    course: "MedChem",
    quizdate: "2023-3-20",
    datetaken: "2023-5-14",
    score: "47.6%",
  },
  {
    id: 1,
    quizNoSort: 296,
    name: "MedChem Week 5 Formative",
    course: "MedChem",
    quizdate: "2023-3-20",
    datetaken: "2023-5-14",
    score: "47.6%",
  },
  {
    id: 1,
    quizNoSort: 296,
    name: "MedChem Week 5 Formative",
    course: "MedChem",
    quizdate: "2023-3-20",
    datetaken: "2023-5-14",
    score: "47.6%",
  },
  {
    id: 1,
    quizNoSort: 296,
    name: "MedChem Week 5 Formative",
    course: "MedChem",
    quizdate: "2023-3-20",
    datetaken: "2023-5-14",
    score: "47.6%",
  },
  {
    id: 1,
    quizNoSort: 296,
    name: "MedChem Week 5 Formative",
    course: "MedChem",
    quizdate: "2023-3-20",
    datetaken: "2023-5-14",
    score: "47.6%",
  },
  {
    id: 1,
    quizNoSort: 296,
    name: "MedChem Week 5 Formative",
    course: "MedChem",
    quizdate: "2023-3-20",
    datetaken: "2023-5-14",
    score: "47.6%",
  },
  {
    id: 1,
    quizNoSort: 296,
    name: "MedChem Week 5 Formative",
    course: "MedChem",
    quizdate: "2023-3-20",
    datetaken: "2023-5-14",
    score: "47.6%",
  },
  {
    id: 1,
    quizNoSort: 296,
    name: "MedChem Week 5 Formative",
    course: "MedChem",
    quizdate: "2023-3-20",
    datetaken: "2023-5-14",
    score: "47.6%",
  },
  {
    id: 1,
    quizNoSort: 296,
    name: "MedChem Week 5 Formative",
    course: "MedChem",
    quizdate: "2023-3-20",
    datetaken: "2023-5-14",
    score: "47.6%",
  },
  {
    id: 1,
    quizNoSort: 296,
    name: "MedChem Week 5 Formative",
    course: "MedChem",
    quizdate: "2023-3-20",
    datetaken: "2023-5-14",
    score: "47.6%",
  },
  {
    id: 1,
    quizNoSort: 296,
    name: "MedChem Week 5 Formative",
    course: "MedChem",
    quizdate: "2023-3-20",
    datetaken: "2023-5-14",
    score: "47.6%",
  },
  {
    id: 1,
    quizNoSort: 296,
    name: "MedChem Week 5 Formative",
    course: "MedChem",
    quizdate: "2023-3-20",
    datetaken: "2023-5-14",
    score: "47.6%",
  },
  {
    id: 1,
    quizNoSort: 296,
    name: "MedChem Week 5 Formative",
    course: "MedChem",
    quizdate: "2023-3-20",
    datetaken: "2023-5-14",
    score: "47.6%",
  },
];
