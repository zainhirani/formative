import { Box } from "@material-ui/core";
import React, { useState } from "react";
import Listing from "./Listing";
import Filters from "./Filters";
import ViewQuestion from "./ViewQuestion";

const ManageQuestions = () => {
  const [folder, setFolder] = useState("");
  const [facultyCategory, setFacultyCategory] = useState("");
  const [enumType, setEnumType] = useState("");
  const [category, setCategory] = useState("");

  return (
    // <PageLayout
    //   title="Questions"
    //   iconAngle={true}
    //   subText="Manage Questions"
    //   icon={<HelpRoundedIcon />}
    // >

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
      <ViewQuestion />
    </Box>
    // </PageLayout>
  );
};

export default ManageQuestions;
