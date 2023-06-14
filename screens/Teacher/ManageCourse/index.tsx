import React, { useCallback, useEffect, useState } from "react";
import PageLayout from "components/PageLayout";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { Box, Input, Button, IconButton } from "@mui/material";
import SearchSection from "../ManageQuizScreen/searchSection";
import {
  TextFieldStyled,
  ButtonWrapper,
  BoxWrapper,
  TableWrapper,
  LoadingButtonWrapper,
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
} from "mock-data/Teacher/ManageCourse";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import SearchBar from "./searchBar";
import CloseIcon from "@mui/icons-material/Close";
import {
  useCourseListing,
  useCourseRemove,
  useCreateCourse,
} from "providers/Courses";
import { useFormik } from "formik";
import FormattedMessage from "theme/FormattedMessage";

const ManageCourseScreen = () => {
  const getCourseListing = useCourseListing();
  const createCourse = useCreateCourse();
  const deleteCourse = useCourseRemove();
  console.log(getCourseListing, "getCourseListing");

  const router = useRouter();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [checked, setChecked] = useState(false);
  const [selectedRowId, setSelectedRowId] = React.useState<number | undefined>(
    undefined,
  );

  const showColumns = {
    id: false,
    course_name: true,
    target_students: true,
  };

  useEffect(() => {
    if (createCourse.isSuccess) {
      enqueueSnackbar("Course Added Successfully", {
        variant: "success",
      });
    }
  }, [createCourse.isSuccess]);

  useEffect(() => {
    if (deleteCourse.isSuccess) {
      enqueueSnackbar("Selected course has been successfully deleted.", {
        variant: "error",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)} size="small">
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        ),
      });
    }
  }, [deleteCourse.isSuccess]);

  const onSubmit = useCallback((data: any, { resetForm }: any) => {
    createCourse.mutate({
      course_name: data.course,
    });
    resetForm();
  }, []);

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    values,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      course: "",
    },
    onSubmit,
  });

  const config: ButtonConfig[] = [
    {
      key: "restoreStudent",
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
      onClick: () => {},
      // disabled: { checked },
    },
    {
      key: "delete",
      startIcon: <DeleteForeverIcon />,
      render: () => {
        return <Box>Delete</Box>;
      },
      // disabled: { checked },
      onClick: () => {
        deleteCourse.mutate({ id: selectedRowId });
      },
    },
  ];
  return (
    // <PageLayout title="Courses"  icon={<HelpRoundedIcon />}>
    <Box>
      <SearchBar checked={checked} />
      <TableWrapper>
        <CustomDataGrid
          rows={getCourseListing?.data || []}
          getRowId={(row: any) => row.id}
          columns={columnsManageCourse}
          pageSizeData={pageSizeManageCourse}
          type={"1"}
          isCheckbox={true}
          setChecked={setChecked}
          columnVisibilityModel={showColumns}
          disableMultipleSelection={true}
          loading={getCourseListing.isFetching}
          getSelectedId={(e) => setSelectedRowId(e?.[0]?.[0])}
        />
      </TableWrapper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <form onSubmit={handleSubmit}>
          <BoxWrapper display="grid" gridTemplateColumns="repeat(5, 1fr)">
            <Box gridColumn="span 3">
              <TextFieldStyled
                id="course"
                name="course"
                placeholder="Enter Course Name here"
                variant="outlined"
                value={values.course}
                onBlur={handleBlur}
                onChange={handleChange}
                InputProps={{
                  style: { border: "none", outline: "0px" },
                }}
              />
            </Box>
            <Box gridColumn="span 2">
              <LoadingButtonWrapper
                startIcon={<AddCircleOutlineRoundedIcon />}
                variant="contained"
                type="submit"
                disabled={values.course === ""}
                loading={createCourse.isLoading}
                loadingPosition="start"
                sx={{
                  width: { xs: "100%", md: "max-content" },
                  ".MuiLoadingButton-loadingIndicator": {
                    top: "35%",
                    left: "30%",
                  },
                }}
              >
                Create Course
              </LoadingButtonWrapper>
            </Box>
          </BoxWrapper>
        </form>
        <Box>
          <GroupedButton config={config} />
        </Box>
      </Box>
    </Box>
    // </PageLayout>
  );
};

export default ManageCourseScreen;
