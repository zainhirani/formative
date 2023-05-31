import React from "react";
import { Grid, IconButton, Box } from "@mui/material";
// import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
// import Image from "next/image";
// import editSvg from "../../public/quiz/edit.svg";
// import copySvg from "../../public/quiz/copy.svg";
// import circleLeftSvg from "../../public/quiz/circle-left.svg";
// import trashSvg from "../../public/quiz/trash.svg";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import SaveAsIcon from "@mui/icons-material/SaveAs";
// import FormattedMessage from "theme/FormattedMessage";
// import messages from "screens/Teacher/ManageQuizScreen/messages";
import { CheckBox } from "@mui/icons-material";

export const pageSizeManageQuiz = 12;


export const columnsManageQuiz = [
  // {
  //   field: "Last Name	 sort",
  //   headerName: "Quiz No. sort",
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
  // {
  //   field: "checkBox",
  //   headerName: "Check Box",
  //   minWidth: 180,
  //   flex: 1,
  //   renderCell: (params: any) => {
  //     const num = params.formattedValue;
  //     return (
  //       <Grid container spacing={2}>
  //         <Grid item xs={12}>
  //           <CheckBox  color="primary"/>
  //         </Grid>
  //       </Grid>
  //     );
  //   },
  // },
  {
    field: "lastName",
    headerName: "Last Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "firstName",
    headerName: "First Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "userName",
    headerName: "User Name",
    minWidth: 150,
    flex: 1,
  },
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
  {
    field: "yog",
    headerName: "YOG",
    minWidth: 200,
    flex: 1,
  },
  {
    field: "program",
    headerName: "Program",
    minWidth: 200,
    flex: 1,
  },
  {
    field: "email",
    headerName: "E-mail ",
    minWidth: 180,
    flex: 1,
  },
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

export const rowsManageStudent = [
  {
    id: 1,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 2,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 3,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 4,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 5,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 6,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 7,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 8,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 9,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 10,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 11,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 12,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
  {
    id: 13,
    lastName: "abduljabbar",
    firstName: "rana",
    userName: "rana.abduljabbar",
    yog: "2024",
    program: "COP",
    email: "rana.abduljabbar@my.rfums.org",
  },
];
