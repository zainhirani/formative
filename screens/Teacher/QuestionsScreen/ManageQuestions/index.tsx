// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import Listing from "./Listing";
import Filters from "./Filters";
import Head from "next/head";
import { useGetCategories, useGetFaculties, useGetFolders } from "providers/Teacher_Questions";
import { TYPE_OPTIONS_FOR_ADD_QUESTION } from "constants/Types";

const ManageQuestions = () => {
  // Queries
  const foldersData = useGetFolders();
  const categoriesData = useGetCategories();
  const facultyCategories = useGetFaculties();

  const [folder, setFolder] = useState(null);
  const [facultyCategory, setFacultyCategory] = useState(null);
  const [enumType, setEnumType] = useState(null);
  const [category, setCategory] = useState(null);

  return (
    <>
      <Head>
        <title>Manage Questions</title>
      </Head>
    <Box>
      <Filters
        onFolderChange={setFolder}
        onCategoryChange={setCategory}
        onTypeChange={setEnumType}
        onFacultyCategoryChange={setFacultyCategory}
        facultyCategoryOptionData={facultyCategories}
        categoryOptionData={categoriesData}
        folderOptionData={foldersData}
        typeOptionData={TYPE_OPTIONS_FOR_ADD_QUESTION}
        selectedCategory={category}
        selectedFacultyCategory={facultyCategory}
        selectedFolder={folder}
        selectedType={enumType}
      />
      <Listing
        folder={folder?.value}
        category={category?.map((item) => item.value) || []}
        enumType={enumType?.value}
        facultyCategory={facultyCategory?.value}
      />
    </Box>
    </>
  );
};

export default ManageQuestions;
