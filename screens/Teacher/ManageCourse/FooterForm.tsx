import { Box } from "@mui/material";
import React, { FC, memo } from "react";
import { LoadingButtonWrapper, TextFieldStyled } from "./Styled";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

interface FooterFormProps {
  isDisabled?: boolean;
  isLoading?: boolean;
  setAddCourse?: any;
  handleAddCourse?: any;
}

const FooterForm: FC<FooterFormProps> = ({
  isDisabled,
  isLoading,
  setAddCourse,
  handleAddCourse,
}) => {
  const handleCourseAdd = (search: any) => {
    setAddCourse(search.target.value);
  };
  return (
    <>
      <Box gridColumn="span 3">
        <TextFieldStyled
          id="course"
          name="course"
          placeholder="Enter Course Name here"
          variant="outlined"
          //   value={courseValue}
          onChange={handleCourseAdd}
          InputProps={{
            style: { border: "none", outline: "0px" },
          }}
        />
      </Box>
      <Box gridColumn="span 2">
        <LoadingButtonWrapper
          startIcon={<AddCircleOutlineRoundedIcon />}
          variant="contained"
          //   type="submit"
          onClick={handleAddCourse}
          disabled={isDisabled}
          loading={isLoading}
          loadingPosition="start"
          sx={{
            width: { xs: "100%", md: "max-content" },
            ".MuiLoadingButton-loadingIndicator": {
              top: "35%",
              left: "20%",
            },
            ":disabled": {
              background: (theme) => theme.palette.text.secondary,
              color: (theme) => theme.palette.primary.light,
            },
            "&:hover": {
              background: (theme) => theme.palette.secondary.main,
            },
          }}
        >
          Create Course
        </LoadingButtonWrapper>
      </Box>
    </>
  );
};

export default memo(FooterForm);
