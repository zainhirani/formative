import React from "react";
import SearchSection from "./searchSection";
import TableSection from "./tableSection";
import { Box } from "@mui/material";

const QuizesListing = () => {
  return (
    <Box>
      <SearchSection />
      <TableSection />
    </Box>
  );
};

export default QuizesListing;
