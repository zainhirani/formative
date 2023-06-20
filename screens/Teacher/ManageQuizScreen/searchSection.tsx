//@ts-nocheck
import React, { useMemo } from "react";
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
import { useCourseListing } from "providers/Courses";
import { useFoldersListing } from "providers/Teacher/TeacherQuiz";
import { useRouter } from "next/router";
import APP_ROUTES from "constants/RouteConstants";
import optionsStatus from "constants/Teacher/QuizConstant";

const SearchSection = () => {
  const coursesList = useCourseListing();
  const foldersList = useFoldersListing();
  const searchQuiz = useFormattedMessage(messages.searchQuiz);
  const router = useRouter();

  const folderData = useMemo(() => {
    return foldersList?.data?.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  }, [foldersList?.data]);

  const courseData = useMemo(() => {
    return coursesList?.data?.map((item) => ({
      value: item.id,
      label: item.course_name,
    }));
  }, [coursesList?.data]);

  const createNewHandler = () => {
    router.push(APP_ROUTES.ADD_QUIZ);
  };

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
          options={courseData}
        />
      </SelectBoxWrapper>
      <SelectBoxWrapper gridColumn="span 2">
        <CustomSelect
          placeholder="Select Folder"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={folderData}
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
          onClick={createNewHandler}
        >
          <FormattedMessage {...messages.createNew} />
        </ButtonWrapper>
      </Box>
    </BoxWrapper>
  );
};

export default SearchSection;
