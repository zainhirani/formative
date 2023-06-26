import React, { useState } from "react";
import SearchSection from "./searchSection";
import TableSection from "./tableSection";
import { Box } from "@mui/material";

const ManageQuizScreen = () => {
  const [searchChange, setSearchChange] = useState("");
  const [selectCourse, setSelectCourse] = useState("");
  const [selectFolder, setSelectFolder] = useState("");
  const [selectStatus, setSelectStatus] = useState("");

  return (
    <Box>
      <SearchSection
        setSearchChange={setSearchChange}
        setSelectCourse={setSelectCourse}
        setSelectFolder={setSelectFolder}
        setSelectStatus={setSelectStatus}
      />
      <TableSection
        searchChange={searchChange}
        selectCourse={selectCourse}
        selectFolder={selectFolder}
        selectStatus={selectStatus}
      />
    </Box>
  );
};

export default ManageQuizScreen;
