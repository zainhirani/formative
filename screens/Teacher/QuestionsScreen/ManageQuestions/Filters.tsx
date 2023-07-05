// @ts-nocheck
import React, { useEffect, useState } from "react";
import { BoxWrapper, SelectBoxWrapper } from "./Styled";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import CustomSelect from "components/CustomSelect/CustomSelect";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import CancelIcon from "@mui/icons-material/Cancel";
import { useQuery } from "react-query";
import { getCategories, getFolders } from "providers/Teacher_Questions/api";

interface FilterProps {
  onFolderChange: () => void;
  onCategoryChange: () => void;
  onTypeChange: () => void;
  onFacultyCategoryChange: () => void;
  folderOptionData?: any;
  categoryOptionData?: any;
  facultyCategoryOptionData?: any;
  typeOptionData?: any;
  selectedFolder?: any;
  selectedCategory?: any;
  selectedFacultyCategory?: any;
  selectedType?: any;
}

const Filters: React.FC<FilterProps> = ({
  onCategoryChange,
  onFacultyCategoryChange,
  onFolderChange,
  onTypeChange,
  categoryOptionData,
  facultyCategoryOptionData,
  folderOptionData,
  typeOptionData,
  selectedCategory,
  selectedFacultyCategory,
  selectedFolder,
  selectedType,
}) => {
  // const [selectedFolder, setSelectedFolder] = useState(null);
  // const [enumType, setEnumType] = useState(null);
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const [selectedfacultyCategoryIds, setSelectedFacultyCategoryIds] =
  //   useState(null);

  const faculty = useFormattedMessage(messages.faculty);
  const facultyPlaceholder = useFormattedMessage(messages.facultyPlaceholder);
  const folder = useFormattedMessage(messages.folder);
  const folderPlaceholder = useFormattedMessage(messages.folderPlaceholder);
  const type = useFormattedMessage(messages.type);
  const typePlaceholder = useFormattedMessage(messages.typePlaceholder);
  const category = useFormattedMessage(messages.category);
  const categoryPlaceholder = useFormattedMessage(messages.categoryPlaceholder);

  const handleRemoveSelectedFacultyCategory = (value: any) => {
    let arr,
      arr2 = [];
    (arr = selectedFacultyCategory.filter(
      (obj: any) => obj?.value !== value.value,
    )),
      // setSelectedFacultyCategoryIds([...arr]);
      (arr2 = arr.map((item) => item.value));
    onFacultyCategoryChange([...arr2]);
  };

  return (
    <BoxWrapper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <SelectBoxWrapper>
          {/* :TODO: Faculty */}
          <CustomSelect
            isClearable
            placeholder={categoryPlaceholder}
            controlText={category}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            value={selectedCategory}
            options={categoryOptionData?.data?.data?.map((category: any) => ({
              label: category.name,
              value: category.id,
            }))}
            isFetching={categoryOptionData?.isFetching}
            onChange={(val: any) => {
              onCategoryChange(val);
              // setSelectedCategory(val);
            }}
          />
        </SelectBoxWrapper>
        <SelectBoxWrapper>
          {/* Folder */}
          <CustomSelect
            isClearable
            placeholder={folderPlaceholder}
            controlText={folder}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            options={folderOptionData?.data?.data?.map((folder: any) => ({
              label: folder.name,
              value: folder.id,
            }))}
            value={selectedFolder}
            onChange={(val: any) => {
              onFolderChange(val);
              // setSelectedFolder(val);
            }}
            isFetching={folderOptionData?.isFetching}
          />
        </SelectBoxWrapper>
        {/* Type */}
        <SelectBoxWrapper>
          <CustomSelect
            isClearable
            value={selectedType}
            placeholder={typePlaceholder}
            controlText={type}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            options={typeOptionData}
            onChange={(val: any) => {
              // setEnumType(val);
              onTypeChange(val);
            }}
          />
        </SelectBoxWrapper>
        <SelectBoxWrapper>
          {/* Category */}
          <CustomSelect
            isMulti
            placeholder={facultyPlaceholder}
            controlText={faculty}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            options={facultyCategoryOptionData?.data?.data?.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
            onChange={(val) => {
              // setSelectedFacultyCategoryIds(val);
              // let arr = val.map((item) => item.value);
              onFacultyCategoryChange(val);
            }}
            value={selectedFacultyCategory}
            isFetching={facultyCategoryOptionData?.isFetching}
          />
        </SelectBoxWrapper>
      </Box>
      {/* Selected Categories */}
      <Box sx={{ display: "flex" }}>
        <SelectBoxWrapper sx={{ width: "max-content" }}>
          <Typography sx={{ color: (theme) => theme.palette.text.secondary }}>
            <FormattedMessage {...messages.categories} />
          </Typography>
        </SelectBoxWrapper>
        <SelectBoxWrapper>
          <Box sx={{ display: "flex" }}>
            {selectedFacultyCategory?.length ? (
              selectedFacultyCategory.map((item, index) => (
                <Box sx={{ display: "flex", alignItems: "center" }} key={index}>
                  <Typography variant="body1">{item?.label}</Typography>
                  <IconButton
                    color="primary"
                    onClick={() => handleRemoveSelectedFacultyCategory(item)}
                  >
                    <CancelIcon />
                  </IconButton>
                </Box>
              ))
            ) : (
              <Typography variant="body2">No values selected.</Typography>
            )}
          </Box>
        </SelectBoxWrapper>
      </Box>
    </BoxWrapper>
  );
};

export default Filters;
