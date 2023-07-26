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
    (arr = selectedCategory.filter(
      (obj: any) => obj?.value !== value.label,
    )),
      console.log(arr,"arrrrrr"),
      (arr2 = arr.map((item) => item.label));
      onCategoryChange([...arr2]);
      console.log(arr2,"arr2")
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
            
            placeholder={facultyPlaceholder}
            controlText={faculty}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            value={selectedFacultyCategory}
            options={facultyCategoryOptionData?.data?.map((category: any) => ({
              label: category.name,
              value: category.id,
            }))}
            isFetching={facultyCategoryOptionData?.isFetching}
            onChange={(val) => {
              onFacultyCategoryChange(val);
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
              onTypeChange(val);
            }}
          />
        </SelectBoxWrapper>
        <SelectBoxWrapper>
          {/* Category */}
          <CustomSelect
            // classNamePrefix="teacher-question-faculty-select"
            isClearable
            isMulti
            placeholder={categoryPlaceholder}
            controlText={category}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            options={categoryOptionData?.data?.data?.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
            onChange={(val: any) => {
              onCategoryChange(val);
            }}
            value={selectedCategory}
            isFetching={categoryOptionData?.isFetching}
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
            {selectedCategory?.length ? (
              selectedCategory.map((item, index) => (
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
