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
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState<number[]>([]);
  const [lastSelected, setLastSelected] = useState(-1);

  const showColumns = {
    id: false,
    quiz: true,
    course: true,
    due_date: true,
  };

  const handleSelection = React.useCallback((ids: number[]) => {
    setOpen(true);
    setLastSelected(ids[ids.length - 1]);
    setChecked(ids);
  }, []);

  const onDrowerClose = () => {
    setChecked((prev) => {
      if (prev?.length) {
        let newArray = prev.filter((cId) => cId !== lastSelected);
        return newArray;
      }
      return prev;
    });
  };

  return (
    <PageLayout title="Take Quiz" iconAngle={false} icon={<HelpRoundedIcon />}>
      <Box>
        <BoxWrapper>
          <QuestionsModal
            drawerOpen={open}
            // setDrawerOpen={() => setOpen((prev) => !prev)}
            setDrawerOpen={() => setOpen((prev) => !prev)}
            onClose={onDrowerClose}
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
            // setChecked={() => setOpen((prev) => !prev)}
            onRowSelect={handleSelection}
            selectedIds={checked}
          />
        </BoxWrapper>
      </Box>
    </PageLayout>
  );
};

export default TakeQuizScreen;
