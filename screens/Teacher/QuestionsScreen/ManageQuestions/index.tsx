// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import Listing from "./Listing";
import Filters from "./Filters";

const ManageQuestions = () => {
  const [folder, setFolder] = useState("");
  const [facultyCategory, setFacultyCategory] = useState("");
  const [enumType, setEnumType] = useState("");
  const [category, setCategory] = useState("");

  return (
    <Box>
      <Filters
        onFolderChange={setFolder}
        onCategoryChange={setCategory}
        onTypeChange={setEnumType}
        onFacultyCategoryChange={setFacultyCategory}
      />
      <Listing
        folder={folder}
        facultyCategory={facultyCategory}
        enumType={enumType}
        category={category}
      />
    </Box>
  );
};

export default ManageQuestions;
