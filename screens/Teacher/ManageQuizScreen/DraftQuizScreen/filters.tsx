// @ts-nocheck
import React, { useMemo, useEffect, useState } from "react";
import {
  BoxWrapper,
  InputBoxWrapper,
  QuizNoBoxWrapper,
  SelectBoxWrapper,
  TextFieldStyled,
} from "./Styled";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import CustomSelect from "components/CustomSelect/CustomSelect";
import Typography from "@mui/material/Typography";
import {
  useCourseListing,
  useFoldersListing,
  useQuizNo,
  useScoringListing,
} from "providers/teacher/TeacherQuiz";
import optionsStatus from "constants/Teacher/QuizConstant";
// import { allTeacherQuizNo } from "providers/teacher/TeacherQuiz/api";

const FiltersSection = (props: any) => {
  const { setFieldValue, values, handleChange, quizDataById, mValuesForName } =
    props;
  const coursesList = useCourseListing();
  const foldersList = useFoldersListing();
  const { data: quizNo, refetch: quizNumRefetch } = useQuizNo();

  useEffect(() => {
    quizNumRefetch();
  }, []);
  const optionsFolder = useMemo(() => {
    return foldersList?.data?.data?.map((item: any) => ({
      value: item?.id,
      label: item?.name,
    }));
  }, [foldersList?.data?.data]);

  const optionsCourse = useMemo(() => {
    return coursesList?.data?.data?.map((item: any) => ({
      value: item?.id,
      label: item?.course_name,
    }));
  }, [coursesList?.data?.data]);
  // console.log(quizDataById, "quizDataById filter");

  return (
    <BoxWrapper display="grid" gridTemplateColumns="repeat(11, 1fr)">
      <InputBoxWrapper gridColumn="span 3">
        <Typography gutterBottom className="custom-name">
          Name:
        </Typography>
        <TextFieldStyled
          placeholder=""
          variant="outlined"
          value={values?.name}
          name="name"
          onChange={handleChange}
          id="name"
        />
      </InputBoxWrapper>
      <SelectBoxWrapper gridColumn="span 2">
        <CustomSelect
          placeholder="Cannabis 2023"
          controlText="Course:"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={optionsCourse}
          value={values?.courseId}
          isClearable={false}
          onChange={(e: any) => {
            const obj = {
              value: e?.value,
              label: e?.label,
            };
            setFieldValue("courseId", obj);
          }}
        />
      </SelectBoxWrapper>
      <SelectBoxWrapper gridColumn="span 2">
        <CustomSelect
          placeholder="/ Daily"
          controlText="Folder:"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={optionsFolder}
          value={values?.folderId}
          isClearable={false}
          onChange={(e: any) => {
            const obj = {
              value: e?.value,
              label: e?.label,
            };
            setFieldValue("folderId", obj);
          }}
        />
      </SelectBoxWrapper>
      <SelectBoxWrapper gridColumn="span 2">
        <CustomSelect
          placeholder="Draft"
          controlText="Status"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={optionsStatus}
          value={values?.status}
          isClearable={false}
          onChange={(e: any) => {
            const obj = {
              value: e?.value,
              label: e?.label,
            };
            setFieldValue("status", obj);
          }}
        />
      </SelectBoxWrapper>
      <SelectBoxWrapper gridColumn="span 2">
        <QuizNoBoxWrapper gridColumn="span 3">
          <Typography gutterBottom className="custom-name">
            Quiz No.
          </Typography>
          <Typography gutterBottom className="custom-name-2">
            {quizNo?.count}
          </Typography>
        </QuizNoBoxWrapper>
      </SelectBoxWrapper>
    </BoxWrapper>
  );
};

export default FiltersSection;
