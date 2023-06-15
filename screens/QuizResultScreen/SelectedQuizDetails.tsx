import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import { BoxWrapper, TableWrapper } from "./Styled";
import {
  columnsQuizAttemptedStds,
  columnsQuizQuestions,
  rowsQuizAttemptedStds,
  rowsQuizQuestions,
  pageSizeManageQuiz,
} from "mock-data/Teacher/QuizResult";
import CustomDataGrid from "components/CustomDataGrid";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import CachedIcon from "@mui/icons-material/Cached";
import QuizQuestionFormat from "components/QuizQuestionFormat";
import { useQuizResultDetail } from "providers/QuizResult";
import { useRouter } from "next/router";

const SelectedQuizDetails = () => {
  const router = useRouter();

  const id = router?.query?.quizId !== undefined ? router?.query?.quizId.toString() : ''

  console.log(router,'12')
    const [drawerOpen, setDrawerOpen] = useState(false);
  const quizResultDetail = useQuizResultDetail({id:parseInt(id,10)})



  console.log(quizResultDetail,'quizResultDetail')
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

  const handleOnRowClick = () => setDrawerOpen(true);
  return (
    <>
      <TableWrapper
        component={Paper}
        // elevation={6}
        // sx={{
        //   overflow: "scroll",
        //   marginBottom: "20px",
        //   height: "40vh",
        //   marginBotton: "20px",
        //   borderRadius: "5px",
        // }}
      >
        {/* @ts-ignore  */}
        <CustomDataGrid
          onRowClick={handleOnRowClick}
          buttonArray={configExport}
          rows={rowsQuizAttemptedStds}
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
          rows={rowsQuizQuestions}
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
        questionContext="In the child's poem ..., ..., sugar is sweet! and so are you!"
        actualQuestion="What is the first phrase?"
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        answerStats={[]}
      />
    </>
  );
};

export default SelectedQuizDetails;
