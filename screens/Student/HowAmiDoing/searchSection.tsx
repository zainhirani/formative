import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { Clear, Search } from "@mui/icons-material";
import {
  BoxWrapper,
  ButtonWrapper,
  SelectBoxWrapper,
  TextFieldStyled,
} from "./Styled";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import CustomSelect from "components/CustomSelect/CustomSelect";
import CustomeDatePicker from "components/CustomeDatePicker";
import { useEffect, useMemo, useState } from "react";
import { useQuizResultsCourseListing } from "providers/Students/How_Am_I_Doing";
import { Grid } from "@material-ui/core";
import { GridClearIcon } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { debounce } from "lodash";

interface SearchSectionProps {
  beforeDatevalue: string | Date | undefined;
  setBeforeDatevalue: (value: string | Date | null) => void;
  afterDatevalue: string | Date | undefined;
  setAfterDatevalue: (value: string | Date | null) => void;
  course: any;
  setCourse: any;
  setSearchChange:(value: string | null) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({
  beforeDatevalue,
  setBeforeDatevalue,
  afterDatevalue,
  setAfterDatevalue,
  setCourse,
  setSearchChange,
}) => {
  const handleCourseSelect = (e: any) => {
    setCourse(e);
  };

  const searchQuiz = useFormattedMessage(messages.searchQuiz);

  const quizResultCourseListing = useQuizResultsCourseListing({});
  
  const quizResultCourseListingData = useMemo(() => {
    //@ts-ignore
    return quizResultCourseListing?.data?.map((item) => ({
      value: item.id,
      label: item.course_name,
    }));
  }, [quizResultCourseListing?.data]);

  const setAfterDate = (e:any) => {
    setAfterDatevalue(e)
  }
  
  const setBeforeDate = (e:any) => {
   setBeforeDatevalue(e)
    console.log(e,"setBeforeDatevalue")
  }

  const debouncedSearch = debounce((criteria) => {
    setSearchChange(criteria);
  }, 400);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  return (
    <BoxWrapper
      sx={{ display: { md: "grid", xs: "block" }, p: { md: 0, xs: "20px" } }}
      // display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
    >
      <Box gridColumn="span 3">
        <TextFieldStyled
          placeholder={searchQuiz}
          variant="outlined"
          onChange={onInputChange}
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
          // value={course}
          options={quizResultCourseListingData || []}
          onChange={handleCourseSelect}

          // options={optionsCourse}
        />
      </SelectBoxWrapper>
      <Grid sx={{ display: "flex" }} gridColumn="span 3">
        <CustomeDatePicker
          label="Select Quiz After Date"
          value={afterDatevalue}
          onChange={setAfterDate}
        />
        <IconButton
          // style={{ padding: 0 }}
          edge="end"
          size="small"
          disabled={!afterDatevalue}
          onClick={() => setAfterDatevalue(null)}
        >
          <GridClearIcon />
        </IconButton>
      </Grid>
      <Grid sx={{ display: "flex" }} gridColumn="span 3">
        <CustomeDatePicker
          label="Select Quiz Before Date"
          value={beforeDatevalue}
          onChange={setBeforeDate}
        />
        <IconButton
          // style={{ padding: 0 }}
          edge="end"
          size="small"
          disabled={!beforeDatevalue}
          onClick={() => setBeforeDatevalue(null)}
        >
          <GridClearIcon />
        </IconButton>
      </Grid>
    </BoxWrapper>
  );
};

export default SearchSection;
