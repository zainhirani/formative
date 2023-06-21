import React, { useState } from "react";
import SearchSection from "./searchSection";
import TableSection from "./tableSection";
import { Box } from "@mui/material";

const QuizesListing = () => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [courseId, setCourseId] = useState<number | undefined>(undefined);
  const [folderId, setFolderId] = useState<number | undefined>(undefined);

  return (
    <Box>
      <SearchSection
        setFolder={setFolderId}
        setCourse={setCourseId}
        setValue={setValue}
      />
      <TableSection folderId={folderId} courseId={courseId} quizName={value} />
    </Box>
  );
};

export default QuizesListing;
