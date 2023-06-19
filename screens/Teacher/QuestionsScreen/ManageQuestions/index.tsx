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
import { useQuery } from "react-query";
import { getCategories, getFolders } from "providers/Teacher_Questions/api";

const TYPE_OPTIONS = [
  { value: "SA", label: "SA" },
  { value: "MCN", label: "MCN" },
  { value: "MCR", label: "MCR" },
  { value: "MSN", label: "MSN" },
  { value: "MSR", label: "MSR" },
  { value: "MA", label: "MA" },
  { value: "F", label: "F" },
];

const ManageQuestions = () => {
  const foldersData = useQuery(["FOLDERS"], getFolders);
  const categoriesData = useQuery(["CATEGORIES"], getCategories);
  const [selectedFolder, setSelectedFolder] = useState([]);
  const [enumType, setEnumType] = useState({});
  const [selectedfacultyCategoryIds, setSelectedFacultyCategoryIds] = useState(
    [],
  );
  const [selectedCategory, setSelectedCategory] = useState([]);

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
  const handleRemoveValue = (value: any) => {
    setSelectedFacultyCategoryIds(
      selectedfacultyCategoryIds.filter(
        (obj: any) => obj?.value !== value.value,
      ),
    );
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
    // <PageLayout
    //   title="Questions"
    //   iconAngle={true}
    //   subText="Manage Questions"
    //   icon={<HelpRoundedIcon />}
    // >
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <SelectBoxWrapper>
            {/* Faculty */}
            <CustomSelect
              placeholder={facultyPlaceholder}
              controlText={faculty}
              dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
              options={facultySelect}
            />
          </SelectBoxWrapper>
          <SelectBoxWrapper>
            {/* Folder */}
            <CustomSelect
              placeholder={folderPlaceholder}
              controlText={folder}
              dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
              options={foldersData?.data?.map((folder) => ({
                label: folder.name,
                value: folder.id,
              }))}
              value={selectedFolder}
              onChange={(val) => setSelectedFolder(val)}
              isFetching={foldersData?.isFetching}
            />
          </SelectBoxWrapper>
          {/* Type */}
          <SelectBoxWrapper>
            <CustomSelect
              placeholder={typePlaceholder}
              controlText={type}
              dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
              options={TYPE_OPTIONS}
            />
          </SelectBoxWrapper>
          <SelectBoxWrapper>
            {/* Category */}
            <CustomSelect
              isMulti
              placeholder={facultyPlaceholder}
              controlText={faculty}
              dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
              options={categoriesData?.data?.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
              onChange={(val) => {
                setSelectedFacultyCategoryIds(val);
              }}
              value={selectedfacultyCategoryIds}
            />
          </SelectBoxWrapper>
        </Box>
        {/* Selected Categories */}
        <Box sx={{ display: "flex" }}>
          <SelectBoxWrapper sx={{ width: "max-content" }}>
            <Typography sx={{ color: (theme) => theme.palette.text.secondary }}>
              <FormattedMessage {...messages.categories} />
            </Typography>
          </SelectBoxWrapper>
          <SelectBoxWrapper>
            <Box sx={{ display: "flex" }}>
              {selectedfacultyCategoryIds.length > 0 ? (
                selectedfacultyCategoryIds.map((item, index) => (
                  <Box
                    sx={{ display: "flex", alignItems: "center" }}
                    key={index}
                  >
                    <Typography variant="body1">{item?.label}</Typography>
                    <IconButton
                      color="primary"
                      onClick={() => handleRemoveValue(item)}
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
      {/* Listing */}
      <BoxWrapper>
        {/* @ts-ignore */}
        <CustomDataGrid
          rows={rowsManageQuestion}
          columns={columnsManageQuestion}
          pageSizeData={pageSizeManageQuestion}
          type={"1"}
          buttonArray={config}
        />
      </BoxWrapper>
    </Box>
    // </PageLayout>
  );
};

export default ManageQuestions;
