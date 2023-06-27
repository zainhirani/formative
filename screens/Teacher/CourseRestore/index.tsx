import { Box, IconButton } from "@mui/material";
import { ButtonConfig } from "components/GroupedButton/types";
import PageLayout from "components/PageLayout";
import { useSnackbar } from "notistack";
import React, { useEffect, useState, useCallback } from "react";
import SearchSection from "../ManageQuizScreen/searchSection";
import CustomDataGrid from "components/CustomDataGrid";
import { BoxWrapper, TableWrapper } from "screens/Teacher/ManageCourse/Styled";
import { TextFieldStyled } from "../ManageCourse/Styled";
import { ButtonWrapper } from "components/GroupedButton/Styled";
import GroupedButton from "components/GroupedButton";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { pageSizeManageCourse } from "mock-data/Teacher/CourseRestore";
import { useRouter } from "next/router";
import SearchBar from "../ManageCourse/searchBar";
import CloseIcon from "@mui/icons-material/Close";
import {
  useRestoreCourse,
  useRestoreCourseListing,
} from "providers/Courses/Restore";
import Image from "next/image";
import courseRestoreSvg from "public/CourseType.svg";
import { useQueryClient } from "react-query";

const CourseRestore = () => {
  const router = useRouter();
  const [checkedId, setCheckedId] = useState<number[]>([]);
  const [lastSelected, setLastSelected] = useState(-1);
  const [page, setPage] = useState(1);
  const [selectedAudience, setSelectedAudience] = React.useState("");
  const [selectedClass, setSelectedClass] = React.useState("");
  const [searchChange, setSearchChange] = React.useState<any>(null);
  const getRestoreCourseListing = useRestoreCourseListing({
    Limit: pageSizeManageCourse,
    Page: page,
    ...(searchChange && { SearchBy: searchChange }),
  });
  const restoreCourse = useRestoreCourse();

  const [checked, setChecked] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState<number>(0);

  const showColumns = {
    id: false,
    course_name: true,
    target_students: true,
  };

  const columnsManageCourse = [
    {
      field: "id",
      headerName: "id",
      minWidth: 500,
      flex: 1,
    },
    {
      field: "course_name",
      headerName: "Course",
      minWidth: 500,
      flex: 1,
    },
    {
      field: "courseTarget",
      headerName: "Target Students",
      minWidth: 200,
      flex: 1,
      renderCell: (params: any) => {
        return params.value?.map((item: any) => item.programs);
      },
    },
    {
      field: "restore",
      headerName: " ",
      minWidth: 90,
      flex: 1,
      headerClassName: "restore-icon-left",
      renderCell: (params: any) => {
        return (
          <IconButton
            onClick={() => {
              restoreCourse.mutate({ ids: [params.row.id] });
            }}
          >
            <Image alt="restore-logo" src={courseRestoreSvg} />
          </IconButton>
        );
      },
    },
  ];

  const handleSelection = React.useCallback((ids: number[]) => {
    if (ids.length === 0) {
      setCheckedId([]);
    } else {
      setLastSelected(ids[ids.length - 1]);
      setCheckedId([ids[ids.length - 1]]);
    }
  }, []);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const config: ButtonConfig[] = [
    {
      key: "addStudents",
      startIcon: <CancelOutlinedIcon />,
      render: () => {
        return <Box>Cancel</Box>;
      },
      onClick: () => {
        router.push("/teacher/courses");
        queryClient.invalidateQueries("Courses");
      },
    },
    {
      key: "save",
      startIcon: <ContentCopyIcon />,
      disabled: true,
      render: () => {
        return <Box>Duplicate</Box>;
      },
      onClick: () => {
        // console.log("Save");
      },
    },
    {
      key: "duplicate",
      startIcon: <DeleteForeverIcon />,
      disabled: true,
      render: () => {
        return <Box>Delete</Box>;
      },
      onClick: () => {
        enqueueSnackbar("Selected course has been successfully deleted.", {
          variant: "error",
        });
      },
    },
  ];

  useEffect(() => {
    if (restoreCourse.isSuccess) {
      enqueueSnackbar("Selected course restored successfully.", {
        variant: "success",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)} size="small">
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        ),
      });
    }
  }, [restoreCourse.isSuccess]);

  useEffect(() => {
    checkedId.length === 0 && setSelectedRowId(0);

    /* @ts-ignore */

    selectedRowId == undefined && setSelectedRowId(parseInt(checkedId));
  }, [checkedId, selectedRowId]);

  return (
    // <PageLayout title="Courses"  icon={<HelpRoundedIcon />}>
    <Box>
      <SearchBar
        setSelectedClass={setSelectedClass}
        setSelectedAudience={setSelectedAudience}
        setSearchChange={setSearchChange}
      />
      <TableWrapper>
        <CustomDataGrid
          rows={getRestoreCourseListing?.data?.data || []}
          /* @ts-ignore */
          getRowId={(row: any) => row.id}
          columns={columnsManageCourse}
          pageSizeData={pageSizeManageCourse}
          columnVisibilityModel={showColumns}
          type={"1"}
          isCheckbox={true}
          setChecked={setChecked}
          loading={getRestoreCourseListing.isFetching}
          selectedIds={checkedId}
          onRowSelect={handleSelection}
          getSelectedId={(e) => setSelectedRowId(e?.[0]?.[e.length - 1])}
          page={page}
          handlePageChange={(_, v) => setPage(v)}
          /* @ts-ignore */
          totalRows={getRestoreCourseListing?.data?.count}
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
        <BoxWrapper display="grid" gridTemplateColumns="repeat(5, 1fr)">
          <Box gridColumn="span 3">
            <TextFieldStyled
              placeholder="Enter Course Name here"
              variant="outlined"
              InputProps={{
                style: { border: "none", outline: "0px" },
              }}
              autoComplete="off"
            />
          </Box>
          <Box gridColumn="span 2">
            <ButtonWrapper
              startIcon={<AddCircleOutlineRoundedIcon />}
              variant="contained"
              disabled={true}
              sx={{
                ":disabled": {
                  background: (theme) => theme.palette.text.secondary,
                  color: (theme) => theme.palette.primary.light,
                },
              }}
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

export default CourseRestore;
