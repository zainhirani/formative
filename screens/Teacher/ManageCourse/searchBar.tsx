import React from "react";
import {
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  BoxWrapper,
  ButtonWrapper,
  TextFieldStyled,
} from "screens/Teacher/ManageQuizScreen/Styled";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import CustomSelect from "components/CustomSelect/CustomSelect";

const SearchBar = () => {
//   const searchQuiz = useFormattedMessage(messages.searchQuiz);

  const target_audience = [
    { value: "cop", label: "COP" },
    { value: "cop-24-pod-26", label: "COP-2024; POD-2024" },
    { value: "cop-2024", label: "COP-2024" },
    { value: "cop-2026", label: "COP-2026" },
  ];
  const class_of = [
    { value: "2000", label: "2000" },
    { value: "2001", label: "2001" },
    { value: "2002", label: "2002" },
    { value: "2003", label: "2003" },
    { value: "2004", label: "2004" },
    { value: "2005", label: "2005" },
    { value: "2006", label: "2006" },
  ];
  const onChange = () => {};

  return (
    <BoxWrapper display="grid" gridTemplateColumns="repeat(12, 1fr)">
      <Box gridColumn="span 3">
        <TextFieldStyled
          placeholder="Search Course"
          variant="outlined"
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
          placeholder="COP"
          controlText="Target Audience: School/Program: "
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={target_audience}
        />
      </Box>
      <Box gridColumn="span 2">
        <CustomSelect
          placeholder="2004"
          controlText="Class of: "
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={class_of}
        />
      </Box>
      <Box gridColumn="span 3">
        <ButtonWrapper
          startIcon={<AddCircleOutlineRoundedIcon />}
          variant="contained"
        >
          "Add to course"
        </ButtonWrapper>
      </Box>
    </BoxWrapper>
  );
};

export default SearchBar;
