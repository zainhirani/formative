import React, { useEffect, useState } from "react";
import { BoxWrapper } from "./Styled";
import { pageSizeManageQuiz } from "mock-data/Teacher/ManageQuiz";
import CustomDataGrid from "components/CustomDataGrid";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import {
  useQuizDuplicate,
  useQuizRemove,
  useTeacherQuizListing,
} from "providers/Teacher/TeacherQuiz";
import { Box, Grid, IconButton } from "@mui/material";
import Link from "next/link";
import APP_ROUTES from "constants/RouteConstants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import Image from "next/image";
import editSvg from "../../../public/quiz/edit.svg";
import copySvg from "../../../public/quiz/copy.svg";
import circleLeftSvg from "../../../public/quiz/circle-left.svg";
import trashSvg from "../../../public/quiz/trash.svg";
import { enqueueSnackbar } from "notistack";
import ShareIcon from "@material-ui/icons/Share";

const TableSection = (props: any) => {
  const { searchChange, selectCourse, selectFolder, selectStatus } = props;
  const [page, setPage] = useState(1);

  const {
    data: quizList,
    refetch,
    isFetching,
  } = useTeacherQuizListing({
    Limit: pageSizeManageQuiz,
    Page: page,
    courseId: selectCourse,
    folderId: selectFolder,
    status: selectStatus,
    ...(searchChange && { SearchBy: searchChange }),
  });
  const deleteQuiz = useQuizRemove();
  const duplicateQuiz = useQuizDuplicate();
  useEffect(() => {
    refetch({
      Limit: pageSizeManageQuiz,
      Page: page,
      courseId: selectCourse,
      folder: selectFolder,
      status: selectStatus,
      ...(searchChange && { SearchBy: searchChange }),
    });
  }, [
    searchChange,
    selectCourse,
    selectFolder,
    selectStatus,
    deleteQuiz.isSuccess,
    duplicateQuiz.isSuccess,
    page,
  ]);

  const columnsManageQuiz = [
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
              <Link
                href={`${APP_ROUTES.EDIT_QUIZ.replace("[id]", params?.id)}`}
              >
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
            <Grid item xs>
              {status == "DRAFT" ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    color: (theme) => theme.additionalColors?.primaryYellow,
                  }}
                >
                  <SaveAsIcon style={{ fontSize: "20px" }} /> {status}
                </Box>
              ) : status == "AVAILABLE" ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    color: "#266d5e",
                  }}
                >
                  <CheckCircleIcon style={{ fontSize: "20px" }} /> Available
                </Box>
              ) : status == "DISTRIBUTED" ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    color: "#d9690f",
                  }}
                >
                  <ShareIcon style={{ fontSize: "20px" }} /> Distributed
                </Box>
              ) : status == "ONGOING" ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    color: "#8B6508",
                  }}
                >
                  <CheckCircleIcon style={{ fontSize: "20px" }} /> Ongoing
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    color: (theme) => theme.additionalColors?.primaryGreen,
                  }}
                >
                  <CheckCircleIcon style={{ fontSize: "20px" }} /> Completed
                </Box>
              )}
            </Grid>
          </Grid>
        );
      },
    },
    {
      field: "difficulty",
      headerName: "Difficulty",
      minWidth: 200,
      flex: 1,
      renderCell: (params) => params?.row?.difficulty?.toFixed(2),
    },
    {
      field: "std_difficulty",
      headerName: "Std. Difficulty",
      minWidth: 180,
      flex: 1,
      renderCell: (params) => params?.row?.difficulty?.toFixed(2),
    },
    {
      field: "quick_actions",
      headerName: "Quick Actions",
      width: 200,
      headerClassName: "super-app-theme--header",
      renderCell: (params: any) => {
        const selectedRowId = params?.row?.id;
        const handleDeleteQuiz = () => {
          deleteQuiz.mutateAsync({ id: selectedRowId });
          enqueueSnackbar("Quiz Deleted Successfully", {
            variant: "success",
            autoHideDuration: 3000,
          });
        };
        const handleDuplicateQuiz = () => {
          duplicateQuiz.mutateAsync({ id: selectedRowId });
          enqueueSnackbar("Quiz Duplicate Successfully", {
            variant: "success",
            autoHideDuration: 3000,
          });
        };
        return (
          <Grid container spacing={3}>
            <Grid item xs>
              <Link
                href={`${APP_ROUTES.EDIT_QUIZ.replace("[id]", params?.id)}`}
              >
                <IconButton>
                  <Image alt="quiz-logo" src={editSvg} />
                </IconButton>
              </Link>
              <IconButton onClick={handleDuplicateQuiz}>
                <Image alt="quiz-logo" src={copySvg} />
              </IconButton>
              <IconButton>
                <Image alt="quiz-logo" src={circleLeftSvg} />
              </IconButton>
              <IconButton onClick={handleDeleteQuiz}>
                <Image alt="quiz-logo" src={trashSvg} />
              </IconButton>
            </Grid>
          </Grid>
        );
      },
    },
  ];
  return (
    <BoxWrapper>
      {/* @ts-ignore */}
      <CustomDataGrid
        rows={quizList?.data || []}
        columns={columnsManageQuiz}
        pageSizeData={pageSizeManageQuiz}
        type={"1"}
        isCheckbox={false}
        handlePageChange={(_, v) => setPage(v)}
        page={page}
        loading={isFetching || deleteQuiz.isLoading || duplicateQuiz.isLoading}
        totalRows={quizList?.count}
      />
    </BoxWrapper>
  );
};

export default TableSection;
