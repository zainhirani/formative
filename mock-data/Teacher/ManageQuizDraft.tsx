import React from "react";
import { Grid, IconButton } from "@mui/material";
import Image from "next/image";
import trashSvg from "../../public/quiz/trash.svg";
import { GridColDef } from "@mui/x-data-grid";
import eyeSvg from "../../public/quiz/eye.svg";

export const pageSizeManageQuizDraft = 1000000;

export const columnsManageQuizDraft: GridColDef[] = [
  {
    field: "order",
    headerName: "Order",
    minWidth: 120,
    flex: 1,
    renderCell: (params) => {
      const num = params.formattedValue;
      return (
        <Grid container spacing={3} alignItems="center">
          <Grid item xs>
            {num}
          </Grid>
        </Grid>
      );
    },
  },
  {
    field: "question",
    headerName: "Question",
    minWidth: 180,
    flex: 1,
  },
  {
    field: "id",
    headerName: "ID/REV",
    minWidth: 180,
    flex: 1,
  },
  {
    field: "type",
    headerName: "Type",
    minWidth: 180,
    flex: 1,
  },
  {
    field: "difficulty",
    headerName: "Difficulty",
    minWidth: 180,
    flex: 1,
  },
  {
    field: "categories",
    headerName: "Categories",
    minWidth: 300,
    flex: 1,
  },
  {
    field: "quick_actions",
    headerName: "Quick Actions",
    width: 150,
    renderCell: (params) => {
      return (
        <Grid container spacing={3}>
          <Grid item xs>
            <IconButton>
              <Image alt="quiz-logo" src={eyeSvg} />
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

export const rowsManageQuizDraft = [
  {
    id: 1,
    order: 1,
    question: "Rose Q2",
    Number: "10/2",
    type: "MCR",
    difficulty: "1.00",
    categories: "Biochem - NA;Childish",
    quick_actions: "1.00",
  },
  {
    id: 2,
    order: 2,
    question: "Rose Q2",
    Number: "10/2",
    type: "MCR",
    difficulty: "1.00",
    categories: "Biochem - NA;Childish",
    quick_actions: "1.00",
  },
  {
    id: 3,
    order: 3,
    question: "Rose Q2",
    Number: "10/2",
    type: "MCR",
    difficulty: "1.00",
    categories: "Biochem - NA;Childish",
    quick_actions: "1.00",
  },
  {
    id: 4,
    order: 4,
    question: "Rose Q2",
    Number: "10/2",
    type: "MCR",
    difficulty: "1.00",
    categories: "Biochem - NA;Childish",
    quick_actions: "1.00",
  },
  {
    id: 5,
    order: 5,
    question: " 1Rose Q2 ",
    Number: "10/2",
    type: "MCR",
    difficulty: "1.00",
    categories: "Biochem - NA;Childish",
    quick_actions: "1.00",
  },
  {
    id: 6,
    order: 6,
    question: "Rose Q2",
    Number: "10/2",
    type: "MCR",
    difficulty: "1.00",
    categories: "Biochem - NA;Childish",
    quick_actions: "1.00",
  },
  {
    id: 7,
    order: 7,
    question: "Rose Q2",
    Number: "10/2",
    type: "MCR",
    difficulty: "1.00",
    categories: "Biochem - NA;Childish",
    quick_actions: "1.00",
  },
  {
    id: 8,
    order: 8,
    question: "Rose Q2",
    Number: "10/2",
    type: "MCR",
    difficulty: "1.00",
    categories: "Biochem - NA;Childish",
    quick_actions: "1.00",
  },
  {
    id: 9,
    order: 9,
    question: "Rose Q2",
    Number: "10/2",
    type: "MCR",
    difficulty: "1.00",
    categories: "Biochem - NA;Childish",
    quick_actions: "1.00",
  },
  {
    id: 10,
    order: 10,
    question: "Rose Q2",
    Number: "10/2",
    type: "MCR",
    difficulty: "1.00",
    categories: "Biochem - NA;Childish",
    quick_actions: "1.00",
  },
  {
    id: 11,
    order: 11,
    question: "Rose Q2",
    Number: "10/2",
    type: "MCR",
    difficulty: "1.00",
    categories: "Biochem - NA;Childish",
    quick_actions: "1.00",
  },
  {
    id: 12,
    order: 12,
    question: "Rose Q2",
    Number: "10/2",
    type: "MCR",
    difficulty: "1.00",
    categories: "Biochem - NA;Childish",
    quick_actions: "1.00",
  },
  {
    id: 13,
    order: 13,
    question: "Rose Q2",
    Number: "10/2",
    type: "MCR",
    difficulty: "1.00",
    categories: "Biochem - NA;Childish",
    quick_actions: "1.00",
  },
];
