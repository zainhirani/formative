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
} from "providers/Teacher/TeacherQuiz";
import optionsStatus from "constants/Teacher/QuizConstant";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import ShareIcon from "@material-ui/icons/Share";
// import { allTeacherQuizNo } from "providers/Teacher/TeacherQuiz/api";

const FiltersSection = (props: any) => {
  const { setFieldValue, values, handleChange, quizByIdData, mValuesForName } =
    props;
  const coursesList = useCourseListing();
  const foldersList = useFoldersListing();
  const { data: quizNo, refetch: quizNumRefetch } = useQuizNo();
  const router = useRouter();
  const { id: editId } = router.query;
  const editPage = editId == undefined ? false : true;
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

  const status = quizByIdData?.status;

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
        {editPage ? (
          status == "COMPLETED" ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                color: (theme) => theme.additionalColors?.primaryGreen,
                height: "100%",
              }}
            >
              <CheckCircleIcon style={{ fontSize: "20px" }} /> Completed
            </Box>
          ) : status == "AVAILABLE" ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                color: "#266d5e",
                height: "100%",
              }}
            >
              <CheckCircleIcon style={{ fontSize: "20px" }} /> Available
            </Box>
          ) : status == "DISTRIBUTED" ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                color: "#d9690f",
                height: "100%",
              }}
            >
              <ShareIcon style={{ fontSize: "20px" }} /> Distributed
            </Box>
          ) : status == "ONGOING" ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                color: "#8B6508",
                height: "100%",
              }}
            >
              <CheckCircleIcon style={{ fontSize: "20px" }} /> Ongoing
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                color: (theme) => theme.additionalColors?.primaryYellow,
                height: "100%",
              }}
            >
              <SaveAsIcon style={{ fontSize: "20px" }} /> Draft
            </Box>
          )
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              color: (theme) => theme.additionalColors?.primaryYellow,
              height: "100%",
            }}
          >
            <SaveAsIcon style={{ fontSize: "20px" }} /> Draft
          </Box>
        )}
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
