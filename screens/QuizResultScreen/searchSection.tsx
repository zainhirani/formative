import React from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Grid,
} from "@mui/material";
import { MenuItem } from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  BoxWrapper,
  ButtonWrapper,
  SelectStyled,
  TextFieldStyled,
} from "./Styled";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import { selectFolderOption, selectStatusOption } from "./data";
import CustomSelect from "components/CustomSelect/CustomSelect";

const SearchSection = () => {
  const searchQuiz = useFormattedMessage(messages.searchQuiz);

  const options = [
    { value: "Test", label: "test" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "vanilla1", label: "Vanilla" },
  ];
  const onChange = () => {};

  return (
    <BoxWrapper display="grid" gridTemplateColumns="repeat(12, 1fr)">
      <Box gridColumn="span 6">
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
      <Box gridColumn="span 3">
        <CustomSelect
          placeholder="Test Select Course"
          controlText="Select Course:"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={options}
        />
      </Box>

      <Box gridColumn="span 3">
        <FormControl fullWidth>
          <InputLabel
            shrink={false}
            htmlFor="my-select"
            sx={{ color: (theme) => theme.palette.text.secondary }}
          >
            <FormattedMessage {...messages.selectFolder} />
          </InputLabel>
          <SelectStyled
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={<FormattedMessage {...messages.selectFolder} />}
            IconComponent={ArrowDropDownCircleOutlinedIcon}
          >
            {selectFolderOption?.map((folder) => (
              <MenuItem value={folder.name} key={folder.id}>
                {folder.name}
              </MenuItem>
            ))}
          </SelectStyled>
        </FormControl>
      </Box>
    </BoxWrapper>
  );
};

export default SearchSection;
