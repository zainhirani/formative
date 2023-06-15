import React, { useCallback, useEffect, useState, memo } from "react";
import { Box, IconButton } from "@mui/material";
import {
  TextFieldStyled,
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
import { useTargetCourse } from "providers/Courses/TargetCourse";

const ManageCourseScreen = () => {
  const getCourseListing = useCourseListing();
  const createCourse = useCreateCourse();
  const deleteCourse = useCourseRemove();
  const targetCourse = useTargetCourse();

  const [selectedAudience, setSelectedAudience] = React.useState("");
  const [selectedClass, setSelectedClass] = React.useState("");
  const router = useRouter();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [checked, setChecked] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState<number>(0);
  console.log(selectedRowId, "selectedRowId");
  const showColumns = {
    id: false,
    course_name: true,
    target_students: true,
  };
  const targetCourses: any = [
    {
      courseId: selectedRowId,
      programs: selectedAudience,
      clas: selectedClass,
    },
  ];

  const handleSubmitCourse = () => {
    targetCourse.mutate(targetCourses);
  };

  useEffect(() => {
    if (createCourse.isSuccess) {
      enqueueSnackbar("Course Added Successfully", {
        variant: "success",
      });
    }
  }, [createCourse.isSuccess]);

  useEffect(() => {
    if (createCourse.isError) {
      enqueueSnackbar("Can't add course at the moment.", {
        variant: "error",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)} size="small">
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        ),
      });
    }
  }, [createCourse.isError]);

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

  useEffect(() => {
    if (deleteCourse.isError) {
      enqueueSnackbar("Can't delete course.", {
        variant: "error",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)} size="small">
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        ),
      });
    }
  }, [deleteCourse.isError]);

  useEffect(() => {
    if (targetCourse.isSuccess) {
      enqueueSnackbar("Updated selected courses and addedd to new course.", {
        variant: "error",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)} size="small">
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        ),
      });
    }
  }, [targetCourse.isSuccess]);

  useEffect(() => {
    if (targetCourse.isError) {
      enqueueSnackbar("Can't update the course.", {
        variant: "error",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)} size="small">
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        ),
      });
    }
  }, [targetCourse.isError]);

  const onSubmit = useCallback((data: any, { resetForm }: any) => {
    createCourse.mutate({
      course_name: data.course,
    });
    resetForm();
  }, []);

  const { handleChange, handleSubmit, handleBlur, values, setFieldValue } =
    useFormik({
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
      <SearchBar
        checked={checked}
        setSelectedClass={setSelectedClass}
        setSelectedAudience={setSelectedAudience}
        handleSubmitCourse={handleSubmitCourse}
      />
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
          loading={getCourseListing.isFetching}
          // isRowSelectable={(params: any) => params.value?.id === selectedRowId}
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
                    left: "20%",
                  },
                  ":disabled": {
                    background: (theme) => theme.palette.text.secondary,
                    color: (theme) => theme.palette.primary.light,
                  },
                  "&:hover": {
                    background: (theme) => theme.palette.secondary.main,
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

export default memo(ManageCourseScreen);
