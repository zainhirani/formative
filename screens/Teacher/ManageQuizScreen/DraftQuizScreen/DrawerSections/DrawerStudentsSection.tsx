import React, { useState } from "react";
import CustomDataGrid from "components/CustomDataGrid";
import { BoxItemWrapper, BoxWrapper, YearCheckBoxWrapper } from "./Styled";
import {
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
} from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import {
  columnsManageQuizDraft,
  pageSizeManageQuizDraft,
  rowsManageQuizDraft,
} from "mock-data/Teacher/ManageQuizDraft";
import CustomSelect from "components/CustomSelect/CustomSelect";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
// import {
//   // AdapterDayjs,
//   LocalizationProvider,
//   DateTimePicker,
// } from "@mui/x-date-pickers";

// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const DrawerStudentsSection = () => {
  const optionSchool = [
    { value: "COP", label: "COP" },
    { value: "COP1", label: "COP" },
  ];
  const configManageQuiz = [
    {
      key: "print",
      customClass: "filled",
      startIcon: <NearMeOutlinedIcon />,
      render: () => {
        return <Box>Distribute</Box>;
      },
      onClick: () => {
        // console.log("Print");
      },
    },
  ];
  return (
    <>
      <BoxItemWrapper>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box className="item">
              Starts:
              {/* <DateTimePicker
                label="Start Date"
                value={startDate}
                onChange={handleStartDateChange}
                renderInput={(params) => <TextField {...params} />}
              /> */}
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker label="Basic date time picker" />
                </DemoContainer>
              </LocalizationProvider> */}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box className="item">Stops:</Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box className="item2 item3">
              <FormControlLabel
                value="Randomize Quiz:"
                control={
                  <Checkbox style={{ padding: "0px 3px 0px 0px", margin: 0 }} />
                }
                label={
                  <YearCheckBoxWrapper>
                    Year of Graduation:<Box className="text">2004</Box>
                  </YearCheckBoxWrapper>
                }
                labelPlacement="end"
                style={{ padding: 0, margin: 0, width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box className="item2">
              <CustomSelect
                placeholder="COP"
                controlText="School/Program:"
                dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                options={optionSchool}
              />
            </Box>
          </Grid>
        </Grid>
      </BoxItemWrapper>
      <BoxWrapper>
        <CustomDataGrid
          rows={rowsManageQuizDraft}
          columns={columnsManageQuizDraft}
          pageSizeData={pageSizeManageQuizDraft}
          type={"4"}
          isCheckbox={true}
          buttonArray={configManageQuiz}
        />
      </BoxWrapper>
    </>
  );
};

export default DrawerStudentsSection;
