import React from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  DatePicker
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
  selectProgram,
} from "./data";
import AutoComplete from "components/AutoComplete";
// import AutoComplete from "components/AutoComplete";

const SearchSection = () => {
  const searchCourse = useFormattedMessage(messages.searchCourse);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <BoxWrapper display="grid" gridTemplateColumns="repeat(12, 1fr)">
      <Box gridColumn="span 3">
        <TextFieldStyled
          placeholder={searchCourse}
          variant="outlined"
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
        {/* <AutoComplete  /> */}
        <FormControl fullWidth>
          <InputLabel
            shrink={false}
            sx={{ color: (theme) => theme.palette.text.secondary }}
          >
            <FormattedMessage {...messages.newCourse} />
          </InputLabel>
          <SelectStyled
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={<FormattedMessage {...messages.newCourse} />}
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
            <FormattedMessage {...messages.graduationYear} />
          </InputLabel>
          <SelectStyled
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={<FormattedMessage {...messages.graduationYear} />}
            IconComponent={ArrowDropDownCircleOutlinedIcon}
          >
            {selectFolderOption?.map((folder) => (
              <MenuItem value={folder.name} key={folder.id}>
                {folder.name}
              </MenuItem>
            ))}
            {/* <DatePicker label={'"year"'} openTo="year" /> */}
          </SelectStyled>
        </FormControl>
      </Box>
      <Box gridColumn="span 2">
        <FormControl fullWidth>
          <InputLabel
            shrink={false}
            sx={{ color: (theme) => theme.palette.text.secondary }}
          >
            <FormattedMessage {...messages.program} />
          </InputLabel>
          <SelectStyled
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={<FormattedMessage {...messages.program} />}
            IconComponent={ArrowDropDownCircleOutlinedIcon}
          >
            {selectProgram?.map((status) => (
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
          disabled
        >
          <FormattedMessage {...messages.enrollStudent} />
        </ButtonWrapper>
      </Box>
    </BoxWrapper>
  );
};

export default SearchSection;
