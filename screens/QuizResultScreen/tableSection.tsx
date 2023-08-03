// @ts-nocheck
import React, { useMemo, useState, useEffect } from "react";
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

import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import { useTheme } from "@emotion/react";
import { QUIZ_STATUS } from "constants/QuizStatus";
import ShareIcon from "@material-ui/icons/Share";

const LIMIT = 10;

interface TableSectionProps {
  quizName?: string;
  courseId?: number;
  folderId?: number;
}

const TableSection = ({ quizName, courseId, folderId }: TableSectionProps) => {
  const [page, setPage] = useState(1);
  const theme = useTheme();

  const quizResult = useQuizResultListing({
    quizName,
    courseId,
    folderId,
    Limit: LIMIT,
    Page: page,
  });

  const columnsQuizResults: GridColDef[] = useMemo(
    () => [
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
        renderCell: (params) => {
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                color: [STATUS_CLASSES[params.row.status]?.color],
              }}
            >
              {[STATUS_CLASSES[params.row.status]?.icon]}
              <div>{params.row.status}</div>
            </Box>
          );
        },
      },
      {
        field: "difficulty",
        headerName: "Difficulty",
        minWidth: 200,
        flex: 1,
        renderCell: (params) => Math.abs(params?.row?.difficulty?.toFixed(2)),
      },
      {
        field: "std_difficulty",
        headerName: "Std. Difficulty",
        minWidth: 180,
        flex: 1,
        renderCell: (params) =>
          Math.abs(params?.row?.std_difficulty?.toFixed(2)),
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
                <Link
                  href={APP_ROUTES.QUIZ_RESULTS + `/${params?.row?.quizId}`}
                >
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
    ],
    [quizResult?.data?.data],
  );

  const STATUS_CLASSES = {
    [QUIZ_STATUS.DRAFT]: {
      color: theme.additionalColors.primaryYellow,
      icon: <SaveAsIcon fontSize="small" />,
    },

    [QUIZ_STATUS.AVAILABLE]: {
      color: "#266d5e",
      icon: <CheckCircleIcon fontSize="small" />,
    },
    [QUIZ_STATUS.COMPLETED]: {
      color: theme.additionalColors.primaryGreen,
      icon: <CheckCircleIcon fontSize="small" />,
    },
    [QUIZ_STATUS.DISTRIBUTED]: {
      color: "#d9690f",
      icon: <ShareIcon fontSize="small" />,
    },
    [QUIZ_STATUS.ONGOING]: {
      color: "#8B6508",
      icon: <CheckCircleIcon fontSize="small" />,
    },
  };

  useEffect(() => {
    quizResult.refetch({
      quizName,
      courseId,
      folderId,
      Limit: LIMIT,
      Page: page,
    });
  }, [courseId, folderId, page, quizName]);

  return (
    <BoxWrapper>
      {/* @ts-ignore */}
      <CustomDataGrid
        rows={quizResult?.data?.data || []}
        columns={columnsQuizResults}
        pageSizeData={10}
        type={"1"}
        loading={quizResult?.isFetching}
        totalRows={parseInt(quizResult?.data?.count, 10)}
        handlePageChange={(_: any, v: React.SetStateAction<number>) =>
          setPage(v)
        }
        page={page}
      />
    </BoxWrapper>
  );
};

export default TableSection;
