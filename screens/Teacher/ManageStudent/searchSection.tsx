import React, { useMemo, useEffect, useState } from "react";

import { Box, IconButton } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import { useSnackbar } from "notistack";
import CustomSelect from "components/CustomSelect/CustomSelect";
import { GridCloseIcon } from "@mui/x-data-grid";
import { useCourseListing } from "providers/Courses";
import { useStudentEnroll } from "providers/teacher/student";
import { year_of_graduation, programs } from "constants/index";
// import { debounce } from "lodash";

import messages from "./messages";
import { BoxWrapper, ButtonWrapper, TextFieldStyled } from "./Styled";

const SearchSection = (props: any) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const {
    checked,
    setProgram,
    setYearOfGraduation,
    setCourse,
    userIds,
    selectedCourse,
  } = props;

  const searchCourse = useFormattedMessage(messages.searchCourse);
  // const [searchValue , setSearchValue] = useState("")

  //Course data
  const courseListing = useCourseListing({});
  const enrollStudent = useStudentEnroll({});
  // const cousrseData = useMemo(() => {
  //  return courseListing?.data?.map((item) => (
  //     {

  //       value:item.id,
  //       label:item.course_name
  //     }
  //     ))
  // },[courseListing?.data])

  const defaultCourse = {
    value: "",
    label: "New Course",
  };
  const cousrseData = useMemo(() => {
    const courses = courseListing?.data?.data.map((item) => ({
      value: item.id,
      label: item.course_name,
    }));
    if (courses) {
      return [defaultCourse, ...courses];
    }
    return [defaultCourse];
  }, [courseListing?.data]);

  //Select  Program Value
  const handleProgram = (programValue: any) => {
    setProgram(programValue?.value);
  };
  //Select Year Of Graduation Value
  const handleYearOfGraduation = (yearValue: any) => {
    setYearOfGraduation(yearValue?.value);
  };

  const handleCourse = (courseValue: any) => {
    setCourse(courseValue?.value);
    console.log(courseValue?.value,"courseValue.value");
  };

  useEffect(() => {
    if (enrollStudent?.isSuccess) {
      enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
        variant: "success",
        autoHideDuration: 3000,
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <GridCloseIcon
              sx={{ color: (theme) => theme.palette.primary.light }}
            />
          </IconButton>
        ),
      });
    }
  }, [enrollStudent?.isSuccess]);

  useEffect(() => {
    if (enrollStudent?.isError) {
      enqueueSnackbar(<FormattedMessage {...messages.errorMessage} />, {
        variant: "error",
        autoHideDuration: 3000,
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <GridCloseIcon
              sx={{ color: (theme) => theme.palette.primary.light }}
            />
          </IconButton>
        ),
      });
    }
  }, [enrollStudent?.isError]);

  const onInputChange = (e: any) => {
    
    if (!cousrseData.some((course) => course.label === selectedCourse)) {
      setCourse(e.target.value);
    }
    if (selectedCourse === "New Course") {
      setCourse(e.target.value);
    }
  };

  return (
    <BoxWrapper  display="grid" gridTemplateColumns="repeat(12, 1fr)">
      <Box gridColumn="span 3">
        <TextFieldStyled
          placeholder={searchCourse}
          variant="outlined"
          value={selectedCourse}
          onChange={onInputChange}
          // InputProps={{
          //   style: { border: "none", outline: "0px" },
          //   endAdornment: (
          //     <InputAdornment position="end">
          //       <IconButton aria-label="visibility" edge="end">
          //         <Search />
          //       </IconButton>
          //     </InputAdornment>
          //   ),
          // }}
        />
      </Box>
      <Box gridColumn="span 2">
        <CustomSelect
          // placeholder="New Course:"
          controlText="New Course:"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={cousrseData || []}
          // value={cousrseData[0]}
          onChange={handleCourse}
        />
      </Box>
      <Box gridColumn="span 2">
        <CustomSelect
          // placeholder="Year of Graduation:"
          controlText="Year of Graduation:"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={year_of_graduation}
          onChange={handleYearOfGraduation}
        />
      </Box>
      <Box gridColumn="span 2">
        <CustomSelect
          // placeholder="School/Program:"
          controlText="School/Program:"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={programs}
          onChange={handleProgram}
        />
      </Box>
      <Box gridColumn="span 3">
        <ButtonWrapper
          loading={enrollStudent?.isLoading}
          startIcon={<AddCircleOutlineRoundedIcon />}
          variant="contained"
          disabled={checked ? false : true}
          onClick={() =>
            enrollStudent.mutate({ courseId: selectedCourse, userIds })
          }
        >
          <FormattedMessage {...messages.enrollStudent} />
        </ButtonWrapper>
      </Box>
    </BoxWrapper>
  );
};

export default SearchSection;
