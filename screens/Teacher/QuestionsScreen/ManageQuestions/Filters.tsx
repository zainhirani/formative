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

const TYPE_OPTIONS = [
  { value: "SA", label: "SA" },
  { value: "MCN", label: "MCN" },
  { value: "MCR", label: "MCR" },
  { value: "MSN", label: "MSN" },
  { value: "MSR", label: "MSR" },
  { value: "MA", label: "MA" },
  { value: "F", label: "F" },
];

interface FilterProps {
  onFolderChange: () => void;
  onCategoryChange: () => void;
  onTypeChange: () => void;
  onFacultyCategoryChange: () => void;
}

const Filters: React.FC<FilterProps> = ({
  onCategoryChange,
  onFacultyCategoryChange,
  onFolderChange,
  onTypeChange,
}) => {
  const foldersData = useQuery(["FOLDERS"], getFolders);
  const categoriesData = useQuery(["CATEGORIES"], getCategories);

  const [selectedFolder, setSelectedFolder] = useState(null);
  const [enumType, setEnumType] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedfacultyCategoryIds, setSelectedFacultyCategoryIds] =
    useState(null);

  const faculty = useFormattedMessage(messages.faculty);
  const facultyPlaceholder = useFormattedMessage(messages.facultyPlaceholder);
  const folder = useFormattedMessage(messages.folder);
  const folderPlaceholder = useFormattedMessage(messages.folderPlaceholder);
  const type = useFormattedMessage(messages.type);
  const typePlaceholder = useFormattedMessage(messages.typePlaceholder);
  const category = useFormattedMessage(messages.category);
  const categoryPlaceholder = useFormattedMessage(messages.categoryPlaceholder);

  const handleRemoveSelectedFacultyCategory = (value: any) => {
    let arr = [];
    (arr = selectedfacultyCategoryIds.filter(
      (obj: any) => obj?.value !== value.value,
    )),
      setSelectedFacultyCategoryIds([...arr]);
    let arr2 = arr.map((item) => item.value);
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
            placeholder={categoryPlaceholder}
            controlText={category}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            value={selectedCategory}
            options={categoriesData?.data?.data?.map((category: any) => ({
              label: category.name,
              value: category.id,
            }))}
            isFetching={categoriesData?.isFetching}
            onChange={(val: any) => {
              onCategoryChange(val?.value);
              setSelectedCategory(val);
            }}
          />
        </SelectBoxWrapper>
        <SelectBoxWrapper>
          {/* Folder */}
          <CustomSelect
            placeholder={folderPlaceholder}
            controlText={folder}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            options={foldersData?.data?.data?.map((folder: any) => ({
              label: folder.name,
              value: folder.id,
            }))}
            value={selectedFolder}
            onChange={(val: any) => {
              onFolderChange(val?.value);
              setSelectedFolder(val);
            }}
            isFetching={foldersData?.isFetching}
          />
        </SelectBoxWrapper>
        {/* Type */}
        <SelectBoxWrapper>
          <CustomSelect
            value={enumType}
            placeholder={typePlaceholder}
            controlText={type}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            options={TYPE_OPTIONS}
            onChange={(val: any) => {
              setEnumType(val);
              onTypeChange(val?.value);
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
            options={categoriesData?.data?.data?.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
            onChange={(val) => {
              console.log("🚀 ~ file: Filters.tsx:178 ~ val:", val);

              setSelectedFacultyCategoryIds(val);
              let arr = val.map((item) => item.value);
              onFacultyCategoryChange([...arr]);
            }}
            value={selectedfacultyCategoryIds}
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
            {selectedfacultyCategoryIds?.length ? (
              selectedfacultyCategoryIds.map((item, index) => (
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