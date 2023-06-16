import React, { useState,useMemo } from "react";
import { useRouter } from "next/router";

import { Box, Paper, Typography } from "@mui/material";
import {
  pageSizeManageQuiz,
} from "mock-data/Teacher/QuizResult";
import { GridColDef } from "@mui/x-data-grid";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

import CustomDataGrid from "components/CustomDataGrid";
import { useQuizResultDetail } from "providers/QuizResult";
import QuizQuestionFormat from "components/QuizQuestionFormat";

import {  TableWrapper } from "./Styled";
import { Grid } from "@material-ui/core";
import { string } from "yup";
import { useStudentAttempQuestion } from "providers/QuestionAttempt";

const columnsQuizAttemptedStds: GridColDef[] = [
  {
    field: "std_id",
    headerName: "ID",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "first_name",
    headerName: "First Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "last_name",
    headerName: "Last Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "score",
    headerName: "Score",
    minWidth: 150,
    flex: 1,
  },

  {
    field: "tradition",
    headerName: "Traditional",
    minWidth: 150,
    flex: 1,
  },
];

const SelectedQuizDetails = () => {

  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [stdId, setStdid] = useState<string| undefined>(undefined)

  const id = router?.query?.quizId !== undefined ? router?.query?.quizId.toString() : ''
  const quizResultDetail = useQuizResultDetail({id:parseInt(id,10)})
  const studentQuestion = useStudentAttempQuestion({quizId:id, userId:stdId})

   const columnsQuizQuestions: GridColDef[] = useMemo(() =>[
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
      renderCell:(params) => {
        const Answer = params?.row?.answer.charAt(1)
        return (
          <Typography fontWeight='700' color={params?.field === Answer ? 'green' : 'black'}>{params?.row?.optionStatistics?.A}</Typography>
        )
      },
    },
    {
      field: "B",
      headerName: "B",
      minWidth: 100,
      flex: 1,
      renderCell:(params) => {
        const Answer = params?.row?.answer.charAt(1)
        return (
          <Typography fontWeight='700' color={params?.field === Answer ? 'green' : 'black'}>{params?.row?.optionStatistics?.B}</Typography>
        )
      },
    },
    {
      field: "c",
      headerName: "C",
      minWidth: 100,
      flex: 1,
      renderCell:(params) => {
        const Answer = params?.row?.answer.charAt(1)
        return (
          <Typography fontWeight='700' color={params?.field === Answer ? 'green' : 'black'}>{params?.row?.optionStatistics?.C}</Typography>
        )
      },
    },
    {
      field: "D",
      headerName: "D",
      minWidth: 100,
      flex: 1,
      renderCell:(params) => {
        const Answer = params?.row?.answer.charAt(1)
        return (
          <Typography fontWeight='700' color={params?.field === Answer ? 'green' : 'black'}>{params?.row?.optionStatistics?.D}</Typography>
        )
      },
    },
    {
      field: "e",
      headerName: "E",
      minWidth: 100,
      flex: 1,
      renderCell:(params) => {
        const Answer = params?.row?.answer.charAt(1)
        return (
          <Typography fontWeight='700' color={params?.field === Answer ? 'green' : 'black'}>{params?.row?.optionStatistics?.E}</Typography>
        )
      },
    },
    {
      field: "f",
      headerName: "F",
      minWidth: 100,
      flex: 1,
      renderCell:(params) => {
        const Answer = params?.row?.answer.charAt(1)
        return (
          <Typography fontWeight='700' color={params?.field === Answer ? 'green' : 'black'}>{params?.row?.optionStatistics?.F}</Typography>
        )
      },
    },
    {
      field: "g",
      headerName: "G",
      minWidth: 100,
      flex: 1,
      renderCell:(params) => {
        const Answer = params?.row?.answer.charAt(1)
        return (
          <Typography fontWeight='700' color={params?.field === Answer ? 'green' : 'black'}>{params?.row?.optionStatistics?.G}</Typography>
        )
      },
    },
    {
      field: "h",
      headerName: "H",
      minWidth: 100,
      flex: 1,
      renderCell:(params) => {
        const Answer = params?.row?.answer.charAt(1)
        return (
          <Typography fontWeight='700' color={params?.field === Answer ? 'green' : 'black'}>{params?.row?.optionStatistics?.H}</Typography>
        )
      },
    },
  ], [quizResultDetail?.data?.questions]);

  const configExport = [
    {
      key: "export",
      startIcon: <LocalPrintshopOutlinedIcon />,
      render: () => {
        return <Box>Export</Box>;
      },
      onClick: () => {
        // console.log("Export");
      },
    },
  ];

  const handleOnRowClick = (e: any) => {
    setStdid(e?.row?.std_id.toString())
    setDrawerOpen(true)
  };

  return (
    <>
      <TableWrapper
        component={Paper}
      
      >
        {/* @ts-ignore  */}
        <CustomDataGrid
          getRowId={(row:any) => row.std_id}
          onRowClick={(e) =>handleOnRowClick(e)}
          buttonArray={configExport}
          rows={quizResultDetail?.data?.student || []}
          columns={columnsQuizAttemptedStds}
          pageSizeData={pageSizeManageQuiz}
          type={"1"}
        />
      </TableWrapper>

      <Box
        sx={{
          overflow: "scroll",
          height: "40vh",
          borderRadius: "5px",
        }}
        component={Paper}
        elevation={6}
      >
        {/* @ts-ignore */}
        <CustomDataGrid
          rows={quizResultDetail?.data?.questions || []}
          columns={columnsQuizQuestions}
          pageSizeData={pageSizeManageQuiz}
          type={"1"}
        />
      </Box>
      {/* @ts-ignore */}
      <QuizQuestionFormat
        quizOptions={[
          { id: 1, optionText: "Roses are red!" },
          { id: 2, optionText: "Grass is green!" },
          { id: 3, optionText: "Violets are blue" },
          { id: 4, optionText: "Humpty Dumpty sat on a wall" },
        ]}
        title="Quiz review for Zakira Akbari on Group Final"
        questionContext={studentQuestion?.data?.[0]?.question?.detail}
        actualQuestion={studentQuestion?.data?.[0]?.question?.title}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        answerStats={[]}
        isHeader={false}
        score={studentQuestion?.data?.[0]?.score}
        timeSpent={studentQuestion?.data?.[0]?.submission_duration}
        loading={studentQuestion?.isFetching}
        disable={true}
       

      />
    </>
  );
};

export default SelectedQuizDetails;
