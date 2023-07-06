// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import Listing from "./Listing";
import Filters from "./Filters";
import Head from "next/head";

const ManageQuestions = () => {
  const [folder, setFolder] = useState("");
  const [facultyCategory, setFacultyCategory] = useState("");
  const [enumType, setEnumType] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    console.log("facultyCategory", facultyCategory);
  }, [facultyCategory]);

  return (
    // <PageLayout
    //   title="Questions"
    //   iconAngle={true}
    //   subText="Manage Questions"
    //   icon={<HelpRoundedIcon />}
    // >
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
      />
      <Listing
        folder={folder}
        facultyCategory={facultyCategory}
        enumType={enumType}
        category={category}
      />
    </Box>
    </>
    // </PageLayout>
  );
};

export default ManageQuestions;
