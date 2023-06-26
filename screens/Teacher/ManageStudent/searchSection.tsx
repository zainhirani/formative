import React, { useMemo, useEffect, useState } from "react";

import { Box, IconButton } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import { useSnackbar } from "notistack";
import CustomSelect from "components/CustomSelect/CustomSelect";
import { GridCloseIcon } from "@mui/x-data-grid";
import { useCourseListing, useCreateCourse } from "providers/Courses";
import { useStudentEnroll } from "providers/Teacher/student";
import { year_of_graduation, programs } from "constants/index";
import CloseIcon from "@mui/icons-material/Close";
// import { debounce } from "lodash";
import { useQueryClient } from "react-query";

import messages from "./messages";
import { BoxWrapper, ButtonWrapper, TextFieldStyled } from "./Styled";

const SearchSection = (props: any) => {
  const queryClient = useQueryClient();
  const [selected, setSelected] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const {
    checked,
    setProgram,
    setYearOfGraduation,
    setCourse,
    userIds,
    selectedCourse,
    setAddCourse,
    addCourse,
  } = props;

  const searchCourse = useFormattedMessage(messages.searchCourse);

  //Course data
  const courseListing = useCourseListing({});
  const enrollStudent = useStudentEnroll({});

  const defaultCourse = {
    value: 1001101,
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
    setSelected(courseValue);
    setCourse(courseValue);
  };

  useEffect(() => {
    if (enrollStudent?.isSuccess) {
      enqueueSnackbar(
        //@ts-ignore
        `Checked students are now enrolled in ${selected?.label}`,
        {
          variant: "success",
          autoHideDuration: 3000,
          action: (key) => (
            <IconButton onClick={() => closeSnackbar(key)}>
              <GridCloseIcon
                sx={{ color: (theme) => theme.palette.primary.light }}
              />
            </IconButton>
          ),
        },
      );
      queryClient.invalidateQueries("Courses");
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

  const onInputChange = (e?: any) => {
    setCourse(e.target.value);
  };

  return (
    <BoxWrapper
      sx={{ display: { md: "grid", xs: "block" }, p: { md: 0, xs: "20px" } }}
      gridTemplateColumns="repeat(12, 1fr)"
    >
      <Box gridColumn="span 3">
        <TextFieldStyled
          placeholder={searchCourse}
          variant="outlined"
          value={selected != null ? selectedCourse?.label : ""}
          onChange={onInputChange}
          //@ts-ignore
          disabled={selected?.value != 1001101}
        />
      </Box>
      <Box gridColumn="span 2">
        <CustomSelect
          controlText="New Course:"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={cousrseData || []}
          onChange={handleCourse}
        />
      </Box>
      <Box gridColumn="span 2">
        <CustomSelect
          controlText="Year of Graduation:"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={year_of_graduation}
          onChange={handleYearOfGraduation}
        />
      </Box>
      <Box gridColumn="span 2">
        <CustomSelect
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
          onClick={() => {
            enrollStudent.mutate({
              courseName: selectedCourse.label
                ? selectedCourse.label
                : selectedCourse,
              userIds,
            });
          }}
        >
          <FormattedMessage {...messages.enrollStudent} />
        </ButtonWrapper>
      </Box>
    </BoxWrapper>
  );
};

export default SearchSection;
