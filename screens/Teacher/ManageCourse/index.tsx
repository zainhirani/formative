import React, { useCallback, useEffect, useState, memo } from "react";
import { Box, IconButton } from "@mui/material";
import {
  TextFieldStyled,
  BoxWrapper,
  TableWrapper,
  LoadingButtonWrapper,
} from "./Styled";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
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
  useCourseDuplicate,
  useCourseListing,
  useCourseRemove,
  useCreateCourse,
} from "providers/Courses";
import { useFormik } from "formik";
import { useTargetCourse } from "providers/Courses/TargetCourse";
import FooterButton from "./FooterButton";
import FooterForm from "./FooterForm";
import Head from "next/head";

const ManageCourseScreen = () => {
  const [selectedAudience, setSelectedAudience] = React.useState("");
  const [selectedClass, setSelectedClass] = React.useState("");
  const [searchChange, setSearchChange] = React.useState<any>(null);
  const [addCourse, setAddCourse] = useState("");
  const [page, setPage] = useState(1);
  const router = useRouter();
  const getCourseListing = useCourseListing({
    Limit: pageSizeManageCourse,
    Page: page,
    ...(searchChange && { SearchBy: searchChange }),
  });
  const createCourse = useCreateCourse();
  const deleteCourse = useCourseRemove();
  const targetCourse = useTargetCourse();
  const duplicateCourse = useCourseDuplicate();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [checked, setChecked] = useState(false);
  const [checkedId, setCheckedId] = useState<number[]>([]);
  const [lastSelected, setLastSelected] = useState(-1);
  const [selectedRowId, setSelectedRowId] = useState<number>(0);
  const showColumns = {
    id: false,
    course_name: true,
    target_students: true,
  };
  const targetCourses: any = [
    {
      courseId: selectedRowId,
      programs: selectedAudience,
      clas: selectedClass?.toString(),
    },
  ];

  const handleSubmitCourse = () => {
    targetCourse.mutate(targetCourses);
  };

  const handleAddCourse = () => {
    createCourse.mutate({
      course_name: addCourse,
    });
    setTimeout(() => {
      setAddCourse("");
    }, 3000);
  };

  const handleDeleteCourse = () => {
    deleteCourse.mutate({ id: selectedRowId });
  };

  const handleDuplicateCourse = () => {
    duplicateCourse.mutate({ id: selectedRowId });
  };

  const handleSelection = React.useCallback((ids: number[]) => {
    if (ids.length === 0) {
      setCheckedId([]);
    } else {
      setLastSelected(ids[ids.length - 1]);
      setCheckedId([ids[ids.length - 1]]);
    }
  }, []);

  useEffect(() => {
    if (createCourse.isSuccess) {
      enqueueSnackbar(`Course "${addCourse}" created successfully`, {
        variant: "success",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)} size="small">
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        ),
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
        variant: "success",
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
        variant: "success",
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

  useEffect(() => {
    checkedId.length === 0 && setSelectedRowId(0);
    // @ts-ignore
    selectedRowId == undefined && setSelectedRowId(parseInt(checkedId));
  }, [checkedId, selectedRowId]);

  return (
    // <PageLayout title="Courses"  icon={<HelpRoundedIcon />}>
    <>
      <Head>
        <title>Courses</title>
      </Head>
      <Box
        sx={{
          ".MuiDataGrid-selectedRowCount": {
            width: { md: "14%", sm: "25%", xs: "30%" },
          },
        }}
      >
        <SearchBar
          checked={checked}
          setSelectedClass={setSelectedClass}
          setSelectedAudience={setSelectedAudience}
          handleSubmitCourse={handleSubmitCourse}
          setSearchChange={setSearchChange}
          isLoading={targetCourse.isLoading}
        />
        <TableWrapper>
          <CustomDataGrid
            rows={getCourseListing?.data?.data || []}
            // @ts-ignore
            getRowId={(row: any) => row.id}
            columns={columnsManageCourse}
            pageSizeData={pageSizeManageCourse}
            type={"1"}
            isCheckbox={true}
            setChecked={setChecked}
            columnVisibilityModel={showColumns}
            loading={getCourseListing.isFetching}
            selectedIds={checkedId}
            onRowSelect={handleSelection}
            getSelectedId={(e) => setSelectedRowId(e?.[0]?.[e.length - 1])}
            page={page}
            handlePageChange={(_, v) => setPage(v)}
            // @ts-ignore
            totalRows={getCourseListing?.data?.count}
            courseText={true}
          />
        </TableWrapper>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <BoxWrapper
            sx={{ display: { md: "grid", xs: "flex" }, alignItems: "center" }}
            gridTemplateColumns="repeat(5, 1fr)"
          >
            <FooterForm
              handleAddCourse={handleAddCourse}
              setAddCourse={setAddCourse}
              isDisabled={addCourse === "" ? true : false}
              isLoading={createCourse.isLoading}
            />
          </BoxWrapper>
          <Box>
            <FooterButton
              deleteLoading={deleteCourse.isLoading}
              duplicateLoading={duplicateCourse.isLoading}
              checked={checked}
              deleteCourse={handleDeleteCourse}
              duplicateCourse={handleDuplicateCourse}
            />
          </Box>
        </Box>
      </Box>
    </>
    // </PageLayout>
  );
};

export default memo(ManageCourseScreen);
