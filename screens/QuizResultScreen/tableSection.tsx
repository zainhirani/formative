import React, { useMemo } from "react";
import { BoxWrapper } from "./Styled";
import {
  rowsQuizResults,
  pageSizeManageQuiz,
} from "mock-data/Teacher/QuizResult";
import CustomDataGrid from "components/CustomDataGrid";
import { Box, Grid, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { useQuizResultListing } from "providers/QuizResult";
import FormattedMessage from "theme/FormattedMessage";
import Link from "next/link";
import APP_ROUTES from "constants/RouteConstants";
import Image from "next/image";
import { GridColDef } from "@mui/x-data-grid";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import messages from "./messages";

interface TableSectionProps {
  quizName?:string,
  courseId?:number,
  folderId?:number,

}

const TableSection = ({quizName,courseId,folderId}:TableSectionProps) => {
const quizResult = useQuizResultListing({quizName,courseId,folderId})

 const columnsQuizResults: GridColDef[] = useMemo(() =>  [
  {
    field: "quizId",
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
    field: "quiz_name",
    headerName: "Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "course_name",
    headerName: "Course",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "folders_name",
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
      const status = params?.row?.status;
      return (
        <Grid container spacing={3} alignItems="center">
          {status !== "COMPLETE" ? (
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
            <Link href={APP_ROUTES.QUIZ_RESULTS + `/${params?.row?.quizId}`}>
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
],[quizResult?.data]);

  return (
    <BoxWrapper>
      {/* @ts-ignore */}
      <CustomDataGrid
        rows={quizResult?.data || []}
        columns={columnsQuizResults}
        pageSizeData={pageSizeManageQuiz}
        type={"1"}
        loading={quizResult?.isFetching}   
      />
    </BoxWrapper>
  );
};

export default TableSection;
