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

export const pageSizeManageQuestion = 11;

export const columnsManageQuestion: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    minWidth: 180,
    flex: 1,
  },
  {
    field: "id",
    headerName: "ID",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "type",
    headerName: "Type",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "difficulty",
    headerName: "Difficulty",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "details",
    headerName: "Details",
    minWidth: 400,
    flex: 1,
  },
  {
    field: "image",
    headerName: "Image",
    minWidth: 150,
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
            <IconButton>
              <Image alt="quiz-logo" src={editSvg} />
            </IconButton>
            <IconButton>
              <Image alt="quiz-logo" src={copySvg} />
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

export const rowsManageQuestion = [
  {
    title: "Rose Q2",
    id: 10,
    type: "MCR",
    difficulty: 0.646,
    details: `In the child's poem "...,..., sugar is sweet! and so are you!"`,
    image: "File",
  },
  {
    title: "Rose Q2",
    id: 11,
    type: "MCR",
    difficulty: 0.646,
    details: `In the child's poem "...,..., sugar is sweet! and so are you!"`,
    image: "File",
  },
  {
    title: "Rose Q2",
    id: 12,
    type: "MCR",
    difficulty: 0.646,
    details: `In the child's poem "...,..., sugar is sweet! and so are you!"`,
    image: "File",
  },
  {
    title: "Rose Q2",
    id: 13,
    type: "MCR",
    difficulty: 0.646,
    details: `In the child's poem "...,..., sugar is sweet! and so are you!"`,
    image: "File",
  },
  {
    title: "Rose Q2",
    id: 14,
    type: "MCR",
    difficulty: 0.646,
    details: `In the child's poem "...,..., sugar is sweet! and so are you!"`,
    image: "File",
  },
  {
    title: "Rose Q2",
    id: 15,
    type: "MCR",
    difficulty: 0.646,
    details: `In the child's poem "...,..., sugar is sweet! and so are you!"`,
    image: "File",
  },
  {
    title: "Rose Q2",
    id: 16,
    type: "MCR",
    difficulty: 0.646,
    details: `In the child's poem "...,..., sugar is sweet! and so are you!"`,
    image: "File",
  },
];
