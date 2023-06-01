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

const SelectedQuizDetails = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
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
        <CustomDataGrid
          rows={rowsQuizQuestions}
          columns={columnsQuizQuestions}
          pageSizeData={pageSizeManageQuiz}
          type={"1"}
        />
      </Box>
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
