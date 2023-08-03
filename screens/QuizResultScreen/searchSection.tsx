import React, { useMemo } from "react";
import { debounce } from "lodash";
import { Box, IconButton, InputAdornment } from "@mui/material";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import { Search } from "@mui/icons-material";

import { useFormattedMessage } from "theme/FormattedMessage";
import CustomSelect from "components/CustomSelect/CustomSelect";
import { useCourseListing } from "providers/Courses";

import messages from "./messages";
import { selectFolderOption } from "./data";
import { BoxWrapper, TextFieldStyled } from "./Styled";
import { useFoldersListing } from "providers/Teacher/TeacherQuiz";

interface SearchSectionProps {
  setValue: (e?: any) => void;
  setCourse: (e?: any) => void;
  setFolder: (e?: any) => void;
}

const SearchSection = ({
  setValue,
  setCourse,
  setFolder,
}: SearchSectionProps) => {
  const searchQuiz = useFormattedMessage(messages.searchQuiz);

  const courseListing = useCourseListing({});
  const foldersList = useFoldersListing();
  const cousrseData = useMemo(() => {
    return courseListing?.data?.data?.map((item) => ({
      value: item.id,
      label: item.course_name,
    }));
  }, [courseListing?.data]);

  const optionsFolder = useMemo(() => {
    return foldersList?.data?.data.map((item: any) => ({
      value: item?.id,
      label: item?.name,
    }));
  }, [foldersList?.data]);

  const debouncedSearch = debounce((criteria) => {
    setValue(criteria);
  }, 400);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  return (
    <BoxWrapper display="grid" gridTemplateColumns="repeat(12, 1fr)">
      <Box gridColumn="span 6">
        <TextFieldStyled
          onChange={onInputChange}
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
          controlText="Select Course"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={cousrseData || []}
          onChange={(e: { value: any }) => setCourse(e?.value)}
        />
      </Box>

      <Box gridColumn="span 3">
        <CustomSelect
          controlText="Select Folder"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={optionsFolder || []}
          onChange={(e: { value: any }) => setFolder(e?.value)}
        />
      </Box>
    </BoxWrapper>
  );
};

export default SearchSection;
