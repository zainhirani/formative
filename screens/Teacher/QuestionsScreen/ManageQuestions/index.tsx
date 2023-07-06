// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import Listing from "./Listing";
import Filters from "./Filters";
import { useGetCategories, useGetFolders } from "providers/Teacher_Questions";
import { TYPE_OPTIONS } from "constants/Types";

const ManageQuestions = () => {
  // Queries
  const foldersData = useGetFolders();
  const categoriesData = useGetCategories();

  const [folder, setFolder] = useState(null);
  const [facultyCategory, setFacultyCategory] = useState(null);
  const [enumType, setEnumType] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    console.log(folder, "folder");
    console.log(facultyCategory, "facultyCategory");
    console.log(enumType, "enumType");
    console.log(category, "category");
  }, [folder, facultyCategory, enumType, category]);

  return (
    <Box>
      <Filters
        onFolderChange={setFolder}
        onCategoryChange={setCategory}
        onTypeChange={setEnumType}
        onFacultyCategoryChange={setFacultyCategory}
        categoryOptionData={categoriesData}
        facultyCategoryOptionData={categoriesData}
        folderOptionData={foldersData}
        typeOptionData={TYPE_OPTIONS}
        selectedCategory={category}
        selectedFacultyCategory={facultyCategory}
        selectedFolder={folder}
        selectedType={enumType}
      />
      <Listing
        folder={folder?.value}
        facultyCategory={facultyCategory?.map((item) => item.value) || []}
        enumType={enumType?.value}
        category={category?.value}
      />
    </Box>
  );
};

export default ManageQuestions;
