// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import Listing from "./Listing";
import Filters from "./Filters";
import Head from "next/head";
import {
  useGetCategories,
  useGetFaculties,
  useGetFolders,
  useGetTeacher,
} from "providers/Teacher_Questions";
import { TYPE_OPTIONS_FOR_ADD_QUESTION } from "constants/Types";

const ManageQuestions = () => {
  // Queries
  const foldersData = useGetFolders();
  const categoryData = useGetCategories();
  const categoriesData = useGetFaculties();
  const teacherData = useGetTeacher();
  const facultyCategories = useGetFaculties();

  const [folder, setFolder] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [enumType, setEnumType] = useState(null);
  const [categoryFirst, setCategoryFirst] = useState(null);
  const [categorySecond, setCategorySecond] = useState(null);
  const [categoryThird, setCategoryThird] = useState(null);
  const [LogicFirst, setLogicFirst] = useState();
  const [LogicSecond, setLogicSecond] = useState();

  return (
    <>
      <Head>
        <title>Manage Questions</title>
      </Head>
      <Box>
        <Filters
          onFolderChange={setFolder}
          onCategoryChangeFirst={setCategoryFirst}
          selectedCategoryFirst={categoryFirst}
          selectedCategorySecond={categorySecond}
          onCategoryChangeSecond={setCategorySecond}
          selectedCategoryThird={categoryThird}
          onCategoryChangeThird={setCategoryThird}
          onTypeChange={setEnumType}
          onTeacherChange={setTeacher}
          categoryOptionData={categoriesData}
          categoryData={categoryData}
          teacherOptionData={teacherData}
          folderOptionData={foldersData}
          typeOptionData={TYPE_OPTIONS_FOR_ADD_QUESTION}
          selectedTeacher={teacher}
          selectedFolder={folder}
          selectedType={enumType}
          LogicFirst={LogicFirst}
          setLogicFirst={setLogicFirst}
          LogicSecond={LogicSecond}
          setLogicSecond={setLogicSecond}
        />
        <Listing
          folder={folder?.value}
          teacher={teacher?.value}
          enumType={enumType?.value}
          facultycat1={categoryFirst?.value}
          facultycat2={categorySecond?.value}
          facultycat3={categoryThird?.value}
          relation1={LogicFirst?.value}
          relation2={LogicSecond?.value}
        />
      </Box>
    </>
  );
};

export default ManageQuestions;
