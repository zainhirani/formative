import React, { useState } from "react";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import SearchSection from "./searchSection";
import TableSection from "./tableSection";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import Loader from "components/Loader";
import { useAuthContext } from "contexts/AuthContext";
import { useRouter } from "next/router";
import { ButtonWrapper } from "./Styled";
import { Typography } from "@material-ui/core";

const PageLayout = dynamic(() => import("components/PageLayout"), {
  ssr: false,
  loading: () => <Loader />,
});

const ManageQuizScreen = () => {
  const [searchChange, setSearchChange] = useState("");
  const [selectCourse, setSelectCourse] = useState("");
  const [selectFolder, setSelectFolder] = useState("");
  const [selectStatus, setSelectStatus] = useState("");

  const signOut = useAuthContext();
  const router = useRouter();

  return (
    // <PageLayout title="All Quiz" icon={<HelpRoundedIcon />}>
    <Box>
      {/* <Typography
        onClick={() => {
          signOut;
          router.push("/login");
          localStorage.clear();
        }}
      >
        Logout
      </Typography> */}
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
    // </PageLayout>
  );
};

export default ManageQuizScreen;
