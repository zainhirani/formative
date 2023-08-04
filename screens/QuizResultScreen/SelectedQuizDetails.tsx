import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";

import { Grid } from "@material-ui/core";
import { GridColDef } from "@mui/x-data-grid";
import { Box, Pagination, Paper, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

import CustomDataGrid from "components/CustomDataGrid";
import { useDownload, useQuizResultDetail } from "providers/QuizResult";
import { pageSizeManageQuiz } from "mock-data/Teacher/QuizResult";
import { BoxPaginate, ShowingBox, TableWrapper } from "./Styled";
import QuestionDrawer from "./QuestionDrawer";
import StudentQuestionDrawer from "./StudentQuestionDrawer";
import { removeHTMLTags } from "utils";

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
  const [stdId, setStdid] = useState<string | undefined>(undefined);
  const [questionId, setQuestionId] = useState<string | undefined>(undefined);
  const [questiondrawer, setQuestionDrawer] = useState(false);
  const downloadcsv = useDownload();
  console.log(downloadcsv,'downloadcsv')

  // useEffect(() => {
  //   const downloadCsv = () => {
  //     if (downloadcsv?.data) {
  //       const blob = new Blob([csvData], { type: 'text/csv' });
  //       const url = URL.createObjectURL(blob);
  //       const a = document.createElement('a');
  //       a.href = url;
  //       a.download = 'data.csv';
  //       document.body.appendChild(a);
  //       a.click();
  //       document.body.removeChild(a);
  //       URL.revokeObjectURL(url);
  //     }
  //   };
  // },[])


  const id =
    router?.query?.quizId !== undefined ? router?.query?.quizId.toString() : "";

  const quizResultDetail = useQuizResultDetail({ id: parseInt(id, 10) });
  // const exportQuizResult = useDownload({id: parseInt(id, 10)})




  const columnsQuizQuestions: GridColDef[] = useMemo(
    () => [
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
        renderCell: (params) => {
          return removeHTMLTags(params?.row?.detail);
        },
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
        // renderCell: (params) => params?.row?.difficulty?.toFixed(2),
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
        renderCell: (params) => {
          const Answer = params?.row?.answer.charAt(1);
          return (
            <Typography
              fontWeight="700"
              color={params?.field === Answer ? "green" : "black"}
            >
              {params?.row?.optionStatistics?.A}
            </Typography>
          );
        },
      },
      {
        field: "B",
        headerName: "B",
        minWidth: 100,
        flex: 1,
        renderCell: (params) => {
          const Answer = params?.row?.answer.charAt(1);
          return (
            <Typography
              fontWeight="700"
              color={params?.field === Answer ? "green" : "black"}
            >
              {params?.row?.optionStatistics?.B}
            </Typography>
          );
        },
      },
      {
        field: "c",
        headerName: "C",
        minWidth: 100,
        flex: 1,
        renderCell: (params) => {
          const Answer = params?.row?.answer.charAt(1);
          return (
            <Typography
              fontWeight="700"
              color={params?.field === Answer ? "green" : "black"}
            >
              {params?.row?.optionStatistics?.C}
            </Typography>
          );
        },
      },
      {
        field: "D",
        headerName: "D",
        minWidth: 100,
        flex: 1,
        renderCell: (params) => {
          const Answer = params?.row?.answer.charAt(1);
          return (
            <Typography
              fontWeight="700"
              color={params?.field === Answer ? "green" : "black"}
            >
              {params?.row?.optionStatistics?.D}
            </Typography>
          );
        },
      },
      {
        field: "e",
        headerName: "E",
        minWidth: 100,
        flex: 1,
        renderCell: (params) => {
          const Answer = params?.row?.answer.charAt(1);
          return (
            <Typography
              fontWeight="700"
              color={params?.field === Answer ? "green" : "black"}
            >
              {params?.row?.optionStatistics?.E}
            </Typography>
          );
        },
      },
      {
        field: "f",
        headerName: "F",
        minWidth: 100,
        flex: 1,
        renderCell: (params) => {
          const Answer = params?.row?.answer.charAt(1);
          return (
            <Typography
              fontWeight="700"
              color={params?.field === Answer ? "green" : "black"}
            >
              {params?.row?.optionStatistics?.F}
            </Typography>
          );
        },
      },
      {
        field: "g",
        headerName: "G",
        minWidth: 100,
        flex: 1,
        renderCell: (params) => {
          const Answer = params?.row?.answer.charAt(1);
          return (
            <Typography
              fontWeight="700"
              color={params?.field === Answer ? "green" : "black"}
            >
              {params?.row?.optionStatistics?.G}
            </Typography>
          );
        },
      },
      {
        field: "h",
        headerName: "H",
        minWidth: 100,
        flex: 1,
        renderCell: (params) => {
          const Answer = params?.row?.answer.charAt(1);
          return (
            <Typography
              fontWeight="700"
              color={params?.field === Answer ? "green" : "black"}
            >
              {params?.row?.optionStatistics?.H}
            </Typography>
          );
        },
      },
    ],
    [quizResultDetail?.data?.questions],
  );



  const configExport = [
    {
      key: "export",
      startIcon: <LocalPrintshopOutlinedIcon />,
      render: () => {
        return <Box>Export</Box>;
      },
      onClick:() => downloadcsv.mutateAsync({id:240}),
    },
  ];

  const handleOnRowClick = (e: any) => {
    setStdid(e?.row?.std_id.toString());
    setDrawerOpen(true);
  };

  return (
    <>
      <TableWrapper component={Paper}>
        <CustomDataGrid
          //@ts-ignore
          getRowId={(row: any) => row.std_id}
          onRowClick={(e) => handleOnRowClick(e)}
          buttonArray={configExport}
          rows={quizResultDetail?.data?.student || []}
          columns={columnsQuizAttemptedStds}
          pageSizeData={pageSizeManageQuiz}
          type={"1"}
          loading={quizResultDetail?.isFetching}
        />
      </TableWrapper>

      <Box
        sx={{
          overflow: "scroll",
          height: "40vh",
          minHeight: "400px",
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
          loading={quizResultDetail?.isFetching}
          onRowClick={(e) => {
            setQuestionDrawer(true), setQuestionId(e?.id);
          }}
        />
      </Box>
      {/* @ts-ignore */}
      <StudentQuestionDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        stdId={stdId}
        quizId={id}
      />
      <QuestionDrawer
        isOpen={questiondrawer}
        onClose={() => setQuestionDrawer(false)}
        questionId={questionId?.toString() || ""}
      />
    </>
  );
};

export default SelectedQuizDetails;
