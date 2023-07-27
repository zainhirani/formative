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
import { OPERATOR_OPTIONS } from "constants/Types";

interface FilterProps {
  onFolderChange: () => void;
  onCategoryChangeFirst: () => void;
  onCategoryChangeSecond : () => void;
  onCategoryChangeThird : () => void;
  setLogicFirst: () => void;
  setLogicSecond:() => void;
  onTypeChange: () => void;
  onTeacherChange: () => void;
  folderOptionData?: any;
  categoryOptionData?: any;
  teacherOptionData?: any;
  typeOptionData?: any;
  selectedFolder?: any;
  selectedCategoryFirst?: any;
  selectedCategorySecond?: any;
  selectedCategorySecond?: any;
  selectedTeacher?: any;
  selectedType?: any;
  logicFirst:any;
}

const Filters: React.FC<FilterProps> = ({
  onCategoryChangeFirst,
  onCategoryChangeSecond,
  onCategoryChangeThird,
  onTeacherChange,
  onFolderChange,
  onTypeChange,
  setLogicFirst,
  setLogicSecond,
  categoryOptionData,
  teacherOptionData,
  folderOptionData,
  typeOptionData,
  selectedCategoryFirst,
  selectedCategorySecond,
  selectedCategoryThird,
  selectedTeacher,
  selectedFolder,
  selectedType,
  logicFirst,
  logicSecond,
}) => {
  const teacher = useFormattedMessage(messages.teacher);
  const teacherPlaceholder = useFormattedMessage(messages.teacherPlaceholder);
  const folder = useFormattedMessage(messages.folder);
  const folderPlaceholder = useFormattedMessage(messages.folderPlaceholder);
  const type = useFormattedMessage(messages.type);
  const typePlaceholder = useFormattedMessage(messages.typePlaceholder);
  const category = useFormattedMessage(messages.category);
  const categoryPlaceholder = useFormattedMessage(messages.categoryPlaceholder);
  const relation = useFormattedMessage(messages.relation);

  // const handleRemoveselectedTeacher = (value: any) => {
  //   let arr,
  //     arr2 = [];
  //   (arr = selectedCategory.filter((obj: any) => obj?.value !== value.value)),
  //     console.log(arr, "arrrrrr")((arr2 = arr.map((item) => item.value)));
  //   onCategoryChange([...arr2]);
  // };

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
            placeholder={teacherPlaceholder}
            controlText={teacher}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            value={selectedTeacher}
            options={teacherOptionData?.data?.data.map(
              (teacher: any) => ({
                label: teacher.name,
                value: teacher.id,
              }),
            )}
            isFetching={teacherOptionData?.isFetching}
            onChange={(val) => {
              onTeacherChange(val);
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
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <SelectBoxWrapper>
          {/* Category 1 */}
          <CustomSelect
            // classNamePrefix="teacher-question-faculty-select"
            isClearable
            placeholder={categoryPlaceholder}
            controlText={category}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            options={categoryOptionData?.data?.map((category: any) => ({
              label: category.name,
              value: category.id,
            }))}
            onChange={(val: any) => {
              onCategoryChangeFirst(val);
            }}
            value={selectedCategoryFirst}
            isFetching={categoryOptionData?.isFetching}
          />
        </SelectBoxWrapper>
        <SelectBoxWrapper>
          <CustomSelect
            // classNamePrefix="teacher-question-faculty-select"
            isClearable
            placeholder={relation}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            options={OPERATOR_OPTIONS}
            onChange={(val: any) => {
              setLogicFirst(val);
            }}
            value={logicFirst}
          />
        </SelectBoxWrapper>
        <SelectBoxWrapper>
          {/* Category 2*/}
          <CustomSelect
            // classNamePrefix="teacher-question-faculty-select"
            isClearable
            placeholder={categoryPlaceholder}
            controlText={category}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            options={categoryOptionData?.data?.map((category: any) => ({
              label: category.name,
              value: category.id,
            }))}
            onChange={(val: any) => {
              onCategoryChangeSecond(val);
            }}
            value={selectedCategorySecond}
            isFetching={categoryOptionData?.isFetching}
          />
        </SelectBoxWrapper>
        <SelectBoxWrapper>
          <CustomSelect
            // classNamePrefix="teacher-question-faculty-select"
            isClearable
            placeholder={relation}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            options={OPERATOR_OPTIONS}
            onChange={(val: any) => {
              setLogicSecond(val);
            }}
            value={logicSecond}
          />
        </SelectBoxWrapper>
        <SelectBoxWrapper>
          {/* Category 3*/}
          <CustomSelect
            // classNamePrefix="teacher-question-faculty-select"
            isClearable
            placeholder={categoryPlaceholder}
            controlText={category}
            dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
            options={categoryOptionData?.data?.map((category: any) => ({
              label: category.name,
              value: category.id,
            }))}
            onChange={(val: any) => {
              onCategoryChangeThird(val);
            }}
            value={selectedCategoryThird}
            isFetching={categoryOptionData?.isFetching}
          />
        </SelectBoxWrapper>
      </Box>
      {/* Selected Categories */}
      {/* <Box sx={{ display: "flex" }}>
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
                    onClick={() => handleRemoveselectedTeacher(item)}
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
      </Box> */}
    </BoxWrapper>
  );
};

export default Filters;
