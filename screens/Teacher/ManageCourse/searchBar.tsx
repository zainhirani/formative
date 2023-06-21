import React, { useState } from "react";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  BoxWrapper,
  ButtonWrapper,
  TextFieldStyled,
} from "screens/Teacher/ManageQuizScreen/Styled";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import CustomSelect from "components/CustomSelect/CustomSelect";
import { useSnackbar } from "notistack";
import { class_of } from "mock-data/Teacher/ManageCourse";
import { LoadingButtonWrapper } from "./Styled";

const SearchBar = (props: any) => {
  const {
    checked,
    setSelectedAudience,
    setSelectedClass,
    handleSubmitCourse,
    setSearchChange,
    isLoading,
  } = props;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [targetCourse, setTargetCourse] = useState("CHP/BMS");
  const [targetClass, setTargetClass] = useState(1990);

  const handleSelectAudienceChange = (selectedOption: any) => {
    setTargetCourse(selectedOption.label);
    setSelectedAudience(selectedOption.value);
  };
  const handleSelectClassChange = (selectedOption: any) => {
    setSelectedClass(selectedOption.label);
    setTargetClass(selectedOption.value);
  };
  const handleSearchChange = (search: any) => {
    setSearchChange(search.target.value);
  };
  const target_audience = [
    { value: "chp/bms", label: "CHP/BMS" },
    { value: "chp/dpt", label: "CHP/DPT" },
    { value: "chp/pa", label: "CHP/PA" },
    { value: "chp/path", label: "CHP/PATH" },
    { value: "chp/psy", label: "CHP/PSY" },
    { value: "cop", label: "COP" },
    { value: "pod", label: "POD" },
    { value: "som", label: "SOM" },
    { value: "son", label: "SON" },
  ];

  const onChange = () => {};

  return (
    <BoxWrapper display="grid" gridTemplateColumns="repeat(12, 1fr)">
      <Box gridColumn="span 3">
        <TextFieldStyled
          placeholder="Search Course"
          variant="outlined"
          onChange={handleSearchChange}
          InputProps={{
            style: { border: "none", outline: "0px" },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="visibility" edge="end">
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box gridColumn="span 4">
        <CustomSelect
          controlText="Target Audience: School/Program: "
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={target_audience}
          value={{ label: targetCourse, value: targetCourse }}
          onChange={handleSelectAudienceChange}
        />
      </Box>
      <Box gridColumn="span 2">
        <CustomSelect
          controlText="Class of: "
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={class_of}
          value={{ label: targetClass, value: targetClass }}
          onChange={handleSelectClassChange}
        />
      </Box>
      <Box gridColumn="span 3">
        <LoadingButtonWrapper
          startIcon={<AddCircleOutlineRoundedIcon />}
          variant="contained"
          disabled={checked ? false : true}
          onClick={handleSubmitCourse}
          loadingPosition="start"
          loading={isLoading}
          sx={{
            width: { xs: "100%", md: "100%" },
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
          Add to course
        </LoadingButtonWrapper>
      </Box>
    </BoxWrapper>
  );
};

export default SearchBar;
