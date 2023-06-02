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
} from "./Styled";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import { useSnackbar } from "notistack";
import CustomSelect from "components/CustomSelect/CustomSelect";
import { GridCloseIcon } from "@mui/x-data-grid";

const SearchSection = (props: any) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { checked } = props;
  const searchCourse = useFormattedMessage(messages.searchCourse);

  const new_course_options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const programs = [
    { value: "COP", label: "COP" },
    { value: "COP1", label: "COP" },
    { value: "COP2", label: "COP" },
    { value: "COP3", label: "COP" },
  ];

  const year_of_graduation = [
    { value: "1990", label: "1990" },
    { value: "1991", label: "1991" },
    { value: "1992", label: "1992" },
    { value: "1993", label: "1993" },
    { value: "1994", label: "1994" },
    { value: "1995", label: "1995" },
    { value: "1996", label: "1996" },
    { value: "1997", label: "1997" },
    { value: "1998", label: "1998" },
    { value: "1999", label: "1999" },
    { value: "2000", label: "2000" },
    { value: "2001", label: "2001" },
    { value: "2002", label: "2002" },
    { value: "2003", label: "2003" },
    { value: "2004", label: "2004" },
    { value: "2005", label: "2005" },
    { value: "2006", label: "2006" },
    { value: "2007", label: "2007" },
    { value: "2008", label: "2008" },
    { value: "2009", label: "2009" },
    { value: "2010", label: "2010" },
    { value: "2011", label: "2011" },
    { value: "2012", label: "2012" },
    { value: "2013", label: "2013" },
    { value: "2014", label: "2014" },
    { value: "2015", label: "2015" },
    { value: "2016", label: "2016" },
    { value: "2017", label: "2017" },
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
    { value: "2027", label: "2027" },
    { value: "2028", label: "2028" },
    { value: "2029", label: "2029" },
    { value: "2030", label: "2030" },
    { value: "2031", label: "2031" },
    { value: "2032", label: "2032" },
    { value: "2033", label: "2033" },
    { value: "2034", label: "2034" },
    { value: "2035", label: "2035" },
    { value: "2036", label: "2036" },
    { value: "2037", label: "2037" },
    { value: "2038", label: "2038" },
    { value: "2039", label: "2039" },
    { value: "2040", label: "2040" },
  ];
  return (
    <BoxWrapper display="grid" gridTemplateColumns="repeat(12, 1fr)">
      <Box gridColumn="span 3">
        <TextFieldStyled
          placeholder={searchCourse}
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
        <CustomSelect
          placeholder="Select Course"
          controlText="New Course:"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={new_course_options}
        />
      </Box>
      <Box gridColumn="span 2">
        <CustomSelect
          placeholder="2004"
          controlText="Year of Graduation:"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={year_of_graduation}
        />
      </Box>
      <Box gridColumn="span 2">
        <CustomSelect
          placeholder="COP"
          controlText="School/Program:"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={programs}
        />
      </Box>
      <Box gridColumn="span 3">
        <ButtonWrapper
          startIcon={<AddCircleOutlineRoundedIcon />}
          variant="contained"
          disabled={checked ? false : true}
          onClick={() => {
            enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
              variant: "success",
              autoHideDuration: 3000,
              action: (key) => (
                <IconButton onClick={() => closeSnackbar(key)}>
                  <GridCloseIcon sx={{color:(theme) => theme.palette.primary.light}}/>
                </IconButton>
              ),
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