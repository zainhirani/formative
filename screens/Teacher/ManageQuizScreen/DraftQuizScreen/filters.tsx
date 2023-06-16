import React, { useMemo } from "react";
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
  useScoringListing,
} from "providers/Teacher/TeacherQuiz";
import optionsStatus from "constants/Teacher/QuizConstant";

const FiltersSection = (props: any) => {
  const coursesList = useCourseListing();
  const foldersList = useFoldersListing();

  const { setFieldValue, values, handleChange } = props;

  const optionsFolder = useMemo(() => {
    return foldersList?.data?.map((item: any) => ({
      value: item?.id,
      label: item?.name,
    }));
  }, [foldersList?.data]);

  const optionsCourse = useMemo(() => {
    return coursesList?.data?.map((item: any) => ({
      value: item?.id,
      label: item?.course_name,
    }));
  }, [coursesList?.data]);

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
          onChange={(e: any) => {
            const obj = {
              value: e.value,
              label: e.label,
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
          onChange={(e: any) => {
            const obj = {
              value: e.value,
              label: e.label,
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
          onChange={(e: any) => {
            const obj = {
              value: e.value,
              label: e.label,
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
            303
          </Typography>
        </QuizNoBoxWrapper>
      </SelectBoxWrapper>
    </BoxWrapper>
  );
};

export default React.memo(FiltersSection);
