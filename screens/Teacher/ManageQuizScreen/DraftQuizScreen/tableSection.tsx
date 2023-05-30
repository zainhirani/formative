import React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import CachedIcon from "@mui/icons-material/Cached";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import Image from "next/image";
import eyeSvg from "../../../../public/quiz/eye.svg";
import trashSvg from "../../../../public/quiz/trash.svg";
import FormattedMessage from "theme/FormattedMessage";
import messages from "./messages";
import {
  BoxButtonWrapper,
  BoxWrapper,
  ButtonWrapper,
  Showed,
  TableBox,
} from "./Styled";
import { ButtonConfig } from "components/GroupedButton/types";
import GroupedButton from "components/GroupedButton";

const columns: GridColDef[] = [
  {
    field: "order",
    headerName: "Order",
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

const rows = [
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

const TableSection = () => {
  const config: ButtonConfig[] = [
    {
      key: "addStudents",
      startIcon: <ArrowCircleRightOutlinedIcon />,
      render: () => {
        return <Box>Add Students</Box>;
      },
      onClick: () => {
        // console.log("Add Students");
      },
    },
    {
      key: "save",
      startIcon: <ArrowCircleRightOutlinedIcon />,
      render: () => {
        return <Box>Save</Box>;
      },
      onClick: () => {
        // console.log("Save");
      },
    },
    {
      key: "duplicate",
      startIcon: <ArrowCircleRightOutlinedIcon />,
      render: () => {
        return <Box>Duplicate</Box>;
      },
      onClick: () => {
        // console.log("Duplicate");
      },
    },
    {
      key: "withdraw",
      startIcon: <ArrowCircleRightOutlinedIcon />,
      render: () => {
        return <Box>Withdraw</Box>;
      },
      onClick: () => {
        // console.log("Withdraw");
      },
    },
    {
      key: "delete",
      startIcon: <ArrowCircleRightOutlinedIcon />,
      render: () => {
        return <Box>Delete</Box>;
      },
      onClick: () => {
        // console.log("Delete");
      },
    },
  ];
  return (
    <>
      <TableBox>
        <BoxWrapper>
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  height: 470,
                }}
              >
                <DataGrid
                  hideFooter
                  rows={rows}
                  columns={columns}
                  disableColumnMenu
                  disableColumnSelector
                  disableDensitySelector
                  disableRowSelectionOnClick
                />
              </Box>
            </Grid>

            <Grid item xs={7}>
              <Showed>
                Showing {rows.length} of {rows.length}
              </Showed>
            </Grid>
            <Grid item xs={5} className="table_row_btn">
              <ButtonWrapper
                className={"print_arrow_btn"}
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  background: "none",
                  boxShadow: "none",
                  border: "1px solid #EAEAEA",
                  "&:hover": {
                    color: (theme) => theme.palette.primary.light,
                    borderColor: (theme) => theme.palette.primary.main,
                  },
                }}
                variant="contained"
                startIcon={
                  <IconButton
                    className={"print_arrow"}
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <LocalPrintshopOutlinedIcon />
                  </IconButton>
                }
              >
                <FormattedMessage {...messages.print} />
              </ButtonWrapper>
              <ButtonWrapper
                className={"print_arrow_btn"}
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  background: "none",
                  boxShadow: "none",
                  border: "1px solid #EAEAEA",
                  "&:hover": {
                    color: (theme) => theme.palette.primary.light,
                    borderColor: (theme) => theme.palette.primary.main,
                  },
                }}
                variant="contained"
                startIcon={
                  <IconButton
                    className={"print_arrow"}
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <CachedIcon />
                  </IconButton>
                }
              >
                <FormattedMessage {...messages.Refresh} />
              </ButtonWrapper>
              <ButtonWrapper
                className={"print_arrow_btn"}
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  background: "none",
                  boxShadow: "none",
                  border: "1px solid #EAEAEA",
                  "&:hover": {
                    color: (theme) => theme.palette.primary.light,
                    borderColor: (theme) => theme.palette.primary.main,
                  },
                }}
                variant="contained"
                startIcon={
                  <IconButton
                    className={"print_arrow"}
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                }
              >
                <FormattedMessage {...messages.addQuestion} />
              </ButtonWrapper>
            </Grid>
          </Grid>
        </BoxWrapper>
      </TableBox>
      <BoxButtonWrapper>
        <Box>Test</Box>
        <GroupedButton config={config} />
      </BoxButtonWrapper>
    </>
  );
};

export default TableSection;
