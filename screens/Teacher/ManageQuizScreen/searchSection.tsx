import React from "react";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  BoxWrapper,
  ButtonWrapper,
  SelectBoxWrapper,
  TextFieldStyled,
} from "./Styled";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import CustomSelect from "components/CustomSelect/CustomSelect";

const SearchSection = () => {
  const searchQuiz = useFormattedMessage(messages.searchQuiz);

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
      <Box gridColumn="span 3">
        <TextFieldStyled
          placeholder={searchQuiz}
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
      <SelectBoxWrapper gridColumn="span 2">
        <CustomSelect
          placeholder="Select Course"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={optionsCourse}
        />
      </SelectBoxWrapper>
      <SelectBoxWrapper gridColumn="span 2">
        <CustomSelect
          placeholder="Select Folder"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={optionsFolder}
        />
      </SelectBoxWrapper>
      <SelectBoxWrapper gridColumn="span 2">
        <CustomSelect
          placeholder="Select Status"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={optionsStatus}
        />
      </SelectBoxWrapper>
      <Box gridColumn="span 3">
        <ButtonWrapper
          startIcon={<AddCircleOutlineRoundedIcon />}
          variant="contained"
        >
          <FormattedMessage {...messages.createNew} />
        </ButtonWrapper>
      </Box>
    </BoxWrapper>
  );
};

export default SearchSection;
