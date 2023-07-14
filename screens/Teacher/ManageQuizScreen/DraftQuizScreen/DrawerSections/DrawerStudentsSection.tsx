// @ts-noCheck
import React, { useEffect, useState } from "react";
import CustomDataGrid from "components/CustomDataGrid";
import {
  BoxItemWrapper,
  BoxWrapper,
  ProgramCheckBoxWrapper,
  YearCheckBoxWrapper,
} from "./Styled";
import {
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import {
  columnsManageQuizDraft,
  pageSizeManageQuizDraft,
  rowsManageQuizDraft,
} from "mock-data/Teacher/ManageQuizDraft";
import CustomSelect from "components/CustomSelect/CustomSelect";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import { yearsSelectOptions } from "utils";
import FormattedDate from "theme/FormattedDate";
import { useStudentListing } from "providers/Teacher/student";
import { useQuizDistribute } from "providers/Teacher/TeacherQuiz";
import { enqueueSnackbar } from "notistack";
import { GridCloseIcon } from "@mui/x-data-grid";
// import { columnsManageStudent } from "screens/Teacher/ManageStudent/tableSection";

const DrawerStudentsSection = (props: any) => {
  const { quizByIdData } = props;
  const [yogCheck, setYogCheck] = useState(true);
  const [yogDefault, setYoGYoGDefault] = useState(null);
  const [selectedYoG, setSelectedYoG] = useState(new Date().getFullYear());
  const [selectedProgram, setSelectedProgram] = useState("COP");
  const [selectedSearchBy, setSelectedSearchBy] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const quizDistribute = useQuizDistribute({});
  const {
    data: studentListing,
    isSuccess,
    isFetching,
    refetch: studentRefetch,
  } = useStudentListing(
    yogCheck
      ? {}
      : {
          yop: selectedYoG,
          program: selectedProgram,
          SearchBy: selectedSearchBy,
        },
  );

  useEffect(() => {
    if (quizDistribute?.isSuccess) {
      enqueueSnackbar("Success! Quizzes are in place", {
        variant: "success",
        autoHideDuration: 1500,
      });
    }
  }, [quizDistribute?.isSuccess]);

  useEffect(() => {
    if (quizDistribute?.isError) {
      enqueueSnackbar("Error", {
        variant: "error",
        autoHideDuration: 1500,
      });
    }
  }, [quizDistribute?.isError]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYoGYoGDefault({
      value: currentYear,
      label: String(currentYear),
    });
  }, []);

  useEffect(() => {
    studentRefetch({ yop: selectedYoG, program: selectedProgram });
  }, [yogCheck]);

  const handleCheckedYog = (e: any) => {
    if (e?.target?.checked == true) {
      setYogCheck(false);
    } else {
      setYogCheck(true);
    }
  };
  const handleYoG = (e: any) => {
    setYoGYoGDefault({
      value: e?.value,
      label: e?.value,
    });
    setSelectedYoG(e?.value);
  };
  const handleProgram = (e: any) => {
    setSelectedProgram(e?.value);
  };

  const handleSelectionChange = (selection: any) => {
    setSelectedRows(selection);
  };

  const handleRowCheckClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    row: any,
  ) => {
    const isChecked = event?.target?.checked;
    if (isChecked) {
      setSelectedRows([...selectedRows, row?.id]);
    } else {
      setSelectedRows(selectedRows?.filter((id) => id !== row?.id));
    }
  };

  const handleHeaderCheckClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    rows: any[],
  ) => {
    const isChecked = event?.target?.checked;
    if (isChecked) {
      const allRowIds = rows?.map((row) => row?.id);
      setSelectedRows(allRowIds);
    } else {
      setSelectedRows([]);
    }
  };

  const renderCheckboxHeader = (params: any) => (
    <></>
    // <Checkbox
    //   indeterminate={
    //     selectedRows?.length > 0 &&
    //     selectedRows?.length < (props?.rows && props?.rows?.length)
    //   }
    //   checked={selectedRows?.length === (props?.rows && props?.rows?.length)}
    //   onChange={(event) => handleHeaderCheckClick(event, props?.rows)}
    // />
  );

  const renderCheckboxCell = (params: any) => (
    <Checkbox
      checked={selectedRows?.includes(params?.row?.id)}
      onChange={(event) => handleRowCheckClick(event, params?.row)}
    />
  );

  React.useEffect(() => {
    setSelectedRows(studentListing?.data?.map((row: any) => row?.id) || []);
  }, [studentListing?.data, isSuccess]);

  // console.log(selectedRows, "selectedRows");

  const columnsManageStudent = [
    {
      field: "selection",
      headerName: "Select",
      minWidth: 50,
      flex: 1,
      renderHeader: renderCheckboxHeader,
      renderCell: renderCheckboxCell,
      sortable: false,
      filterable: false,
      cellClassName: "custom-checkbox-selection",
    },
    {
      field: "last_name",
      headerName: "Last Name",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "first_name",
      headerName: "First Name",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "username",
      headerName: "User Name",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "year_of_graduation",
      headerName: "YOG",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "program",
      headerName: "Program",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "email",
      headerName: "E-mail",
      minWidth: 200,
      flex: 1,
    },
  ];

  const optionSchool = [
    { value: "CHP/BMS", label: "CHP/BMS" },
    { value: "CHP/DPT", label: "CHP/DPT" },
    { value: "CHP/PA", label: "CHP/PA" },
    { value: "CHP/PATH", label: "CHP/PATH" },
    { value: "CHP/PSY", label: "CHP/PSY" },
    { value: "COP", label: "COP" },
    { value: "POD", label: "POD" },
    { value: "SOM", label: "SOM" },
    { value: "SON", label: "SON" },
  ];
  const configManageQuiz = [
    {
      key: "print",
      customClass: "filled",
      startIcon: <NearMeOutlinedIcon />,
      render: () => {
        return <Box>Distribute</Box>;
      },
      onClick: () => {
        quizDistribute.mutate({
          id: quizByIdData?.id,
          studentsId: selectedRows,
        });
        // selectedRows
        // console.log("Click Distribute");
      },
    },
  ];

  return (
    <>
      <BoxItemWrapper>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box className="item">
              <span>Starts: </span>
              <FormattedDate
                date={quizByIdData?.start_time}
                opts={{
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                  formatMatcher: "basic",
                  hour: "numeric",
                  minute: "numeric",
                  localeMatcher: "lookup",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box className="item">
              <span>Stops: </span>
              <FormattedDate
                date={quizByIdData?.end_time}
                opts={{
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                  formatMatcher: "basic",
                  hour: "numeric",
                  minute: "numeric",
                  localeMatcher: "lookup",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box className="item2 item3">
              <YearCheckBoxWrapper>
                <Checkbox
                  onClick={(e) => handleCheckedYog(e)}
                  style={{ padding: "0px 3px 0px 0px", margin: 0 }}
                />
                <CustomSelect
                  placeholder=""
                  controlText="Year of Graduation:"
                  dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                  options={yearsSelectOptions()}
                  onChange={handleYoG}
                  // value={yogDefault}
                  sx={{ width: "100%" }}
                  isDisabled={yogCheck}
                  isClearable={true}
                />
              </YearCheckBoxWrapper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ProgramCheckBoxWrapper className="item2">
              <CustomSelect
                placeholder=""
                controlText="School/Program:"
                dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                options={optionSchool}
                onChange={handleProgram}
                isDisabled={yogCheck}
                isClearable={true}
              />
            </ProgramCheckBoxWrapper>
          </Grid>
        </Grid>
      </BoxItemWrapper>
      <BoxWrapper>
        <CustomDataGrid
          pageSizeData={pageSizeManageQuizDraft}
          type={"4"}
          buttonArray={configManageQuiz}
          rows={studentListing?.data || []}
          columns={columnsManageStudent}
          isCheckbox={true}
          setChecked={setChecked}
          loading={isFetching}
          onRowSelectionModelChange={(itm: any) => console.log(itm)}
          rowSelectionModel={selectedRows}
          onSelectionModelChange={handleSelectionChange}
        />
      </BoxWrapper>
    </>
  );
};

export default DrawerStudentsSection;
