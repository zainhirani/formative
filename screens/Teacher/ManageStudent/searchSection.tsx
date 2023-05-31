import React from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
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
import {
  selectCourseOption,
  selectFolderOption,
  selectStatusOption,
} from "./data";
import AutoComplete from "components/AutoComplete";
// import AutoComplete from "components/AutoComplete";

const SearchSection = () => {
  const searchQuiz = useFormattedMessage(messages.searchQuiz);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
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
      <Box gridColumn="span 2">
        {/* <AutoComplete  /> */}
        <FormControl fullWidth>
          <InputLabel
            shrink={false}
            sx={{ color: (theme) => theme.palette.text.secondary }}
          >
            <FormattedMessage {...messages.selectCourse} />
          </InputLabel>
          <SelectStyled
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={<FormattedMessage {...messages.selectCourse} />}
            placeholder="Search"
            variant="outlined"
            IconComponent={ArrowDropDownCircleOutlinedIcon}
          >
            {selectCourseOption?.map((course) => (
              <MenuItem value={course.name} key={course.id}>
                {course.name}
              </MenuItem>
            ))}
          </SelectStyled>
        </FormControl>
      </Box>
      <Box gridColumn="span 2">
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
      <Box gridColumn="span 2">
        <FormControl fullWidth>
          <InputLabel
            shrink={false}
            sx={{ color: (theme) => theme.palette.text.secondary }}
          >
            <FormattedMessage {...messages.selectStatus} />
          </InputLabel>
          <SelectStyled
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={<FormattedMessage {...messages.selectStatus} />}
            IconComponent={ArrowDropDownCircleOutlinedIcon}
          >
            {selectStatusOption?.map((status) => (
              <MenuItem value={status.name} key={status.id}>
                {status.name}
              </MenuItem>
            ))}
          </SelectStyled>
        </FormControl>
      </Box>
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
