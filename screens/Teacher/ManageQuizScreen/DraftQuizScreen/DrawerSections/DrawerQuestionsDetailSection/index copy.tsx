// @ts-nocheck
import React, { useState } from "react";
import SideDrawer from "components/Drawer";
import { useAppState } from "contexts/AppStateContext";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { Box, IconButton, MenuItem, Select, Typography } from "@mui/material";
import { BoxWrapper, SelectBoxWrapper } from "./Styled";
import CustomDataGrid from "components/CustomDataGrid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  categorySelect,
  columnsManageQuestion,
  pageSizeManageQuestion,
  rowsManageQuestion,
} from "mock-data/Teacher/ManageQuestion";
import { useSnackbar } from "notistack";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import CustomSelect from "components/CustomSelect/CustomSelect";
import {
  facultySelect,
  folderSelect,
  typeSelect,
} from "mock-data/Teacher/ManageQuestion";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import CancelIcon from "@mui/icons-material/Cancel";
import QuizQuestionFormat from "components/QuizQuestionFormat";
import { UploadQuestions } from "components/UploadQuestions";

const DrawerQuestionsDetailSection = () => {
  const { state, setState } = useAppState();

  const handleDrawerCloseQuestion = () => {
    setState(false);
  };
  const quizOptions = [
    { id: 1, optionText: "Roses are red!" },
    { id: 2, optionText: "Grass is green!" },
    { id: 3, optionText: "Violets are blue!" },
    { id: 4, optionText: "Roses are violet!" },
    { id: 4, optionText: "Humpty Dumpty sat on a wall!" },
  ];
  return (
    <>
      <QuizQuestionFormat
        title="Dr. Kevin B. this is how Question 10/2 appears to student"
        isOpen={state}
        onClose={handleDrawerCloseQuestion}
        isShowScoreBar={false}
        quizOptions={quizOptions}
        questionContext={
          "In the child's poem '..., ..., sugar is sweet! and so are you!'"
        }
        actualQuestion="What is the first phrase?"
        difficulty="0.672"
        avgAttemps={1.7}
        avgTime="18 Sec"
        questionIdNum="10"
      />
    </>
  );
};

export default DrawerQuestionsDetailSection;
