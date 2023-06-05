import React, { useState } from "react";
import PageLayout from "components/PageLayout";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { BoxWrapper, SelectBoxWrapper, TextFieldStyled } from "./Styled";
import CustomDataGrid from "components/CustomDataGrid";
import { Search } from "@mui/icons-material";
import {
  courseSelect,
  columnsTakeQuiz,
  pageSizeTakeQuiz,
  rowsTakeQuiz,
} from "mock-data/Student/TakeQuiz";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import CustomSelect from "components/CustomSelect/CustomSelect";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import QuestionsModal from "./QuestionsModalSection";
const TakeQuizScreen = () => {
  const searchQuiz = useFormattedMessage(messages.searchQuiz);
  const selectCourse = useFormattedMessage(messages.selectCourse);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const handleSelectChange = (e: any) => {
    const selectedValue = e.label;
    if (selectedValue && !selectedValues.includes(selectedValue)) {
      setSelectedValues([...selectedValues, selectedValue]);
    }
  };
  const handleRemoveValue = (value: string) => {
    setSelectedValues(selectedValues.filter((v) => v !== value));
  };

  const showColumns = {
    id: false,
    quiz: true,
    course: true,
    due_date: true,
  };
  return (
    <PageLayout title="Take Quiz" iconAngle={false} icon={<HelpRoundedIcon />}>
      <Box>
        <BoxWrapper>
          <QuestionsModal
            drawerOpen={open}
            setDrawerOpen={() => setOpen((prev) => !prev)}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "60px",
            }}
          >
            <TextFieldStyled
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
            <SelectBoxWrapper>
              <Box sx={{ width: "100%" }}>
                <CustomSelect
                  placeholder={selectCourse}
                  dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                  options={courseSelect}
                />
              </Box>
            </SelectBoxWrapper>
          </Box>
        </BoxWrapper>
        <BoxWrapper
          sx={{
            ".MuiDataGrid-columnHeaderDraggableContainer .MuiCheckbox-root": {
              display: "none",
            },
          }}
        >
          {/* @ts-ignore */}
          <CustomDataGrid
            rows={rowsTakeQuiz}
            columns={columnsTakeQuiz}
            pageSizeData={pageSizeTakeQuiz}
            type={"1"}
            isCheckbox={true}
            columnVisibilityModel={showColumns}
            setChecked={() => setOpen((prev) => !prev)}
          />
        </BoxWrapper>
      </Box>
    </PageLayout>
  );
};

export default TakeQuizScreen;
