import React, { useState } from "react";
import PageLayout from "components/PageLayout";
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
const ManageQuestionsScreen = () => {
  const { enqueueSnackbar } = useSnackbar();
  const faculty = useFormattedMessage(messages.faculty);
  const facultyPlaceholder = useFormattedMessage(messages.facultyPlaceholder);
  const folder = useFormattedMessage(messages.folder);
  const folderPlaceholder = useFormattedMessage(messages.folderPlaceholder);
  const type = useFormattedMessage(messages.type);
  const typePlaceholder = useFormattedMessage(messages.typePlaceholder);
  const category = useFormattedMessage(messages.category);
  const categoryPlaceholder = useFormattedMessage(messages.categoryPlaceholder);
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

  const config = [
    {
      key: "createNew",
      startIcon: <AddCircleOutlineIcon />,
      customClass: "filled",
      render: () => {
        return (
          <Box>
            <FormattedMessage {...messages.createNew} />
          </Box>
        );
      },
      onClick: () => {
        setOpen(true);
      },
    },
  ];
  return (
    <PageLayout
      title="Questions"
      iconAngle={true}
      subText="Manage Questions"
      icon={<HelpRoundedIcon />}
    >
      <Box>
        <BoxWrapper>
          <QuizQuestionFormat
            isShowScoreBar={false}
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Dr. Kevin B. this is how Question 10/2 appers to student"
            questionContext={`In the child's poem "...,..., sugar is sweet! and so are you!"`}
            actualQuestion="What is the first phrase?"
            quizOptions={[
              { id: 1, optionText: "Roses are red!" },
              { id: 2, optionText: "Grass is green!" },
              { id: 3, optionText: "Violets are blue!" },
              { id: 4, optionText: "Roses are violet!" },
              { id: 5, optionText: "Humpty Dumpty sat on a wall!" },
            ]}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <SelectBoxWrapper>
              <CustomSelect
                placeholder={facultyPlaceholder}
                controlText={faculty}
                dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                options={facultySelect}
              />
            </SelectBoxWrapper>
            <SelectBoxWrapper>
              <CustomSelect
                placeholder={folderPlaceholder}
                controlText={folder}
                dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                options={folderSelect}
              />
            </SelectBoxWrapper>
            <SelectBoxWrapper>
              <CustomSelect
                placeholder={typePlaceholder}
                controlText={type}
                dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                options={typeSelect}
              />
            </SelectBoxWrapper>
            <SelectBoxWrapper>
              <CustomSelect
                placeholder={categoryPlaceholder}
                controlText={category}
                dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                options={categorySelect}
                onChange={handleSelectChange}
              />
            </SelectBoxWrapper>
          </Box>
          <Box sx={{ display: "flex" }}>
            <SelectBoxWrapper sx={{ width: "max-content" }}>
              <Typography
                sx={{ color: (theme) => theme.palette.text.secondary }}
              >
                <FormattedMessage {...messages.categories} />
              </Typography>
            </SelectBoxWrapper>
            <SelectBoxWrapper>
              <Box sx={{ display: "flex" }}>
                {selectedValues.length > 0 ? (
                  selectedValues.map((value) => (
                    <Box
                      sx={{ display: "flex", alignItems: "center" }}
                      key={value}
                    >
                      <Typography variant="body1">{value}</Typography>
                      <IconButton
                        color="primary"
                        onClick={() => handleRemoveValue(value)}
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
        <BoxWrapper>
          <CustomDataGrid
            rows={rowsManageQuestion}
            columns={columnsManageQuestion}
            pageSizeData={pageSizeManageQuestion}
            type={"1"}
            buttonArray={config}
          />
        </BoxWrapper>
      </Box>
    </PageLayout>
  );
};

export default ManageQuestionsScreen;
