import React from "react";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  BoxWrapper,
  InputBoxWrapper,
  QuizNoBoxWrapper,
  SelectBoxWrapper,
  TextFieldStyled,
} from "./Styled";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import CustomSelect from "components/CustomSelect/CustomSelect";
import Typography from "@mui/material/Typography";

const FiltersSection = () => {
  const optionsCourse = [
    { value: "Cannabis 2023", label: "Cannabis 2023" },
    { value: "Cannabis 2024", label: "Cannabis 2024" },
    { value: "Cannabis 2025", label: "Cannabis 2025" },
  ];
  const optionsFolder = [
    { value: "1/ Daily", label: "/ Daily" },
    { value: "2/ Daily", label: "/ Daily" },
    { value: "3/ Daily", label: "/ Daily" },
  ];
  const optionsStatus = [
    { value: "Completed", label: "Completed" },
    { value: "Draft", label: "Draft" },
  ];
  const onChange = () => {};

  return (
    <BoxWrapper display="grid" gridTemplateColumns="repeat(12, 1fr)">
      <InputBoxWrapper gridColumn="span 3">
        <Typography gutterBottom className="custom-name">
          Name:
        </Typography>
        <TextFieldStyled placeholder="" variant="outlined" />
      </InputBoxWrapper>
      <SelectBoxWrapper gridColumn="span 2">
        <CustomSelect
          placeholder="Cannabis 2023"
          controlText="Course:"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={optionsCourse}
        />
      </SelectBoxWrapper>
      <SelectBoxWrapper gridColumn="span 2">
        <CustomSelect
          placeholder="/ Daily"
          controlText="Folder:"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={optionsFolder}
        />
      </SelectBoxWrapper>
      <SelectBoxWrapper gridColumn="span 2">
        <CustomSelect
          placeholder="Draft"
          controlText="Status"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={optionsStatus}
        />
      </SelectBoxWrapper>
      <SelectBoxWrapper gridColumn="span 2">
        <QuizNoBoxWrapper gridColumn="span 3">
          <Typography gutterBottom className="custom-name">
            Quiz No.
          </Typography>
          <Typography gutterBottom className="custom-name-2">
            303
          </Typography>
        </QuizNoBoxWrapper>
      </SelectBoxWrapper>
    </BoxWrapper>
  );
};

export default FiltersSection;
