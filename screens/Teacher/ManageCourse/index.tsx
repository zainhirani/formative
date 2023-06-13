import React, { useState } from "react";
import PageLayout from "components/PageLayout";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { Box, Input, Button, IconButton } from "@mui/material";
import SearchSection from "../ManageQuizScreen/searchSection";
import {
  TextFieldStyled,
  ButtonWrapper,
  BoxWrapper,
  TableWrapper,
} from "./Styled";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import GroupedButton from "components/GroupedButton";
import { ButtonConfig } from "components/GroupedButton/types";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestoreFromTrashOutlinedIcon from "@mui/icons-material/RestoreFromTrashOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CustomDataGrid from "components/CustomDataGrid";
import {
  columnsManageCourse,
  pageSizeManageCourse,
  rowsManageCourse,
} from "mock-data/Teacher/ManageCourse";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import SearchBar from "./searchBar";
import CloseIcon from "@mui/icons-material/Close";
import { useCourseListing } from "providers/Courses";

const ManageCourseScreen = () => {
  const getCourseListing = useCourseListing();
  console.log(getCourseListing, "getCourseListing");

  const router = useRouter();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [checked, setChecked] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const config: ButtonConfig[] = [
    {
      key: "addStudents",
      startIcon: <RestoreFromTrashOutlinedIcon />,
      render: () => {
        return <Box>Restore</Box>;
      },
      onClick: () => {
        // console.log("Add Students");
        router.push("/teacher/courses/restore");
      },
    },
    {
      key: "save",
      startIcon: <ContentCopyIcon />,
      render: () => {
        return <Box>Duplicate</Box>;
      },
      onClick: () => {
        // console.log("Save");
      },
    },
    {
      key: "delete",
      startIcon: <DeleteForeverIcon />,
      render: () => {
        return <Box>Delete</Box>;
      },
      onClick: () => {
        // console.log("Selected Rows:", selectedRows);
        enqueueSnackbar("Selected course has been successfully deleted.", {
          variant: "error",
          action: (key) => (
            <IconButton onClick={() => closeSnackbar(key)} size="small">
              <CloseIcon sx={{ color: "#fff" }} />
            </IconButton>
          ),
        });
      },
    },
  ];
  return (
    // <PageLayout title="Courses"  icon={<HelpRoundedIcon />}>
    <Box>
      <SearchBar />
      <TableWrapper>
        <CustomDataGrid
          rows={getCourseListing.data}
          columns={columnsManageCourse}
          pageSizeData={pageSizeManageCourse}
          type={"1"}
          isCheckbox={true}
          setChecked={setChecked}
        />
      </TableWrapper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <BoxWrapper display="grid" gridTemplateColumns="repeat(5, 1fr)">
          <Box gridColumn="span 3">
            <TextFieldStyled
              placeholder="Enter Course Name here"
              variant="outlined"
              InputProps={{
                style: { border: "none", outline: "0px" },
              }}
            />
          </Box>
          <Box gridColumn="span 2">
            <ButtonWrapper
              startIcon={<AddCircleOutlineRoundedIcon />}
              variant="contained"
            >
              Create Course
            </ButtonWrapper>
          </Box>
        </BoxWrapper>
        <Box>
          <GroupedButton config={config} />
        </Box>
      </Box>
    </Box>
    // </PageLayout>
  );
};

export default ManageCourseScreen;
