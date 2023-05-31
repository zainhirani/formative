import { Box, Grid } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import React from "react";


export const pageSizeManageCourse = 12;

export const columnsManageCourse = [
  // {
  //   field: "quizNoSort",
  //   headerName: "Course No. sort",
  //   minWidth: 180,
  //   flex: 1,
  //   renderCell: (params: any) => {
  //     const num = params.formattedValue;
  //     return (
  //       <Grid container spacing={3} alignItems="center">
  //         <Grid item xs>
  //           <Box
  //             sx={{
  //               display: "flex",
  //               alignItems: "center",
  //               gap: "2px",
  //               color: (theme) => theme.palette.text.primary,
  //               fontWeight: "700",
  //             }}
  //           >
  //             {num} <ArrowForwardRoundedIcon style={{ fontSize: "20px" }} />
  //           </Box>
  //         </Grid>
  //       </Grid>
  //     );
  //   },
  // },
  {
    field: "course",
    headerName: "Course",
    minWidth: 1200,
    flex: 1,
  },
  {
    field: "target_students",
    headerName: "Target Students",
    minWidth: 150,
    flex: 1,
  },
  // {
  //   field: "folder",
  //   headerName: "Folder",
  //   minWidth: 150,
  //   flex: 1,
  // },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   minWidth: 150,
  //   flex: 1,
  //   renderCell: (params: any) => {
  //     const status = params.formattedValue;
  //     return (
  //       <Grid container spacing={3} alignItems="center">
  //         {status == "Draft" ? (
  //           <Grid item xs>
  //             <Box
  //               sx={{
  //                 display: "flex",
  //                 alignItems: "center",
  //                 gap: "2px",
  //                 color: (theme) => theme.additionalColors?.primaryYellow,
  //               }}
  //             >
  //               <SaveAsIcon style={{ fontSize: "20px" }} />{" "}
  //               <FormattedMessage {...messages.statusDraft} />
  //             </Box>
  //           </Grid>
  //         ) : (
  //           <Grid item xs>
  //             <Box
  //               sx={{
  //                 display: "flex",
  //                 alignItems: "center",
  //                 gap: "2px",
  //                 color: (theme) => theme.additionalColors?.primaryGreen,
  //               }}
  //             >
  //               <CheckCircleIcon style={{ fontSize: "20px" }} />{" "}
  //               <FormattedMessage {...messages.statusCompleted} />
  //             </Box>
  //           </Grid>
  //         )}
  //       </Grid>
  //     );
  //   },
  // },
  // {
  //   field: "difficulty",
  //   headerName: "Difficulty",
  //   minWidth: 200,
  //   flex: 1,
  // },
  // {
  //   field: "std_difficulty",
  //   headerName: "Std. Difficulty",
  //   minWidth: 180,
  //   flex: 1,
  // },
  // {
  //   field: "quick_actions",
  //   headerName: "Quick Actions",
  //   width: 200,
  //   headerClassName: "super-app-theme--header",
  //   renderCell: (params: any) => {
  //     return (
  //       <Grid container spacing={3}>
  //         <Grid item xs>
  //           <IconButton>
  //             <Image alt="quiz-logo" src={editSvg} />
  //           </IconButton>
  //           <IconButton>
  //             <Image alt="quiz-logo" src={copySvg} />
  //           </IconButton>
  //           <IconButton>
  //             <Image alt="quiz-logo" src={circleLeftSvg} />
  //           </IconButton>
  //           <IconButton>
  //             <Image alt="quiz-logo" src={trashSvg} />
  //           </IconButton>
  //         </Grid>
  //       </Grid>
  //     );
  //   },
  // },
];

export const rowsManageCourse = [
  {
    id: 1,
    quizNoSort: 306,
    name: "Molecular Biology 2019",
    course: "Molecular Biology 2019",
    target_students: "COP",
    status: "Completed",
    difficulty: "Molecular Biology 2019",
    std_difficulty: "Molecular Biology 2019",
    quick_actions: "Molecular Biology 2019",
  },
  {
    id: 2,
    quizNoSort: 307,
    name: "Molecular Biology 2019",
    course: "Molecular Biology 2019",
    target_students: " ",
    status: "Completed",
    difficulty: "Molecular Biology 2019",
    std_difficulty: "Molecular Biology 2019",
    quick_actions: "Molecular Biology 2019",
  },
  {
    id: 3,
    quizNoSort: 308,
    name: "Molecular Biology 2019",
    course: "Molecular Biology 2019",
    target_students: "COP-2024; POD-2024",
    status: "Completed",
    difficulty: "Molecular Biology 2019",
    std_difficulty: "Molecular Biology 2019",
    quick_actions: "Molecular Biology 2019",
  },
  {
    id: 4,
    quizNoSort: 309,
    name: "Molecular Biology 2019",
    course: "Molecular Biology 2019",
    target_students: "COP-2024",
    status: "Completed",
    difficulty: "Molecular Biology 2019",
    std_difficulty: "Molecular Biology 2019",
    quick_actions: "Molecular Biology 2019",
  },
  {
    id: 5,
    quizNoSort: 310,
    name: "Molecular Biology 2019",
    course: "Molecular Biology 2019",
    target_students: "COP",
    status: "Completed",
    difficulty: "Molecular Biology 2019",
    std_difficulty: "Molecular Biology 2019",
    quick_actions: "Molecular Biology 2019",
  },
  {
    id: 6,
    quizNoSort: 311,
    name: "Molecular Biology 2019",
    course: "Molecular Biology 2019",
    target_students: "COP-2026",
    status: "Draft",
    difficulty: "Molecular Biology 2019",
    std_difficulty: "Molecular Biology 2019",
    quick_actions: "Molecular Biology 2019",
  }
];
