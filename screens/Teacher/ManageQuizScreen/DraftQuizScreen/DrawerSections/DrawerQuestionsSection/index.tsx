import React, { useState } from "react";
import SideDrawer from "components/Drawer";
import { useAppState } from "contexts/AppStateContext";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import {
  Box,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
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
import { TextFieldStyled } from "../../Styled";
import { Search } from "@mui/icons-material";
import { useRouter } from "next/router";
import APP_ROUTES from "constants/RouteConstants";
import { isStringNotURL, removeHTMLTags } from "utils";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { useQuestionsListing } from "providers/Teacher_Questions";

const DrawerQuestionsSection = (props: any) => {
  const {
    drawerOpen,
    setDrawerOpen,
    setSelectedQuestions,
    selectedQuestions,
    COLUMNS_CONFIG,
  } = props;
  const [folder, setFolder] = useState("");
  const [facultyCategory, setFacultyCategory] = useState("");
  const [enumType, setEnumType] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();
  let questions = useQuestionsListing({
    ...(facultyCategory?.length > 0 && { facultyId: facultyCategory }),
    ...(folder && { folderId: folder }),
    ...(enumType && { type: enumType }),
    ...(category && { categories: category }),
  });
  const { enqueueSnackbar } = useSnackbar();
  const faculty_name = useFormattedMessage(messages.faculty);
  const facultyPlaceholder = useFormattedMessage(messages.facultyPlaceholder);
  const folder_name = useFormattedMessage(messages.folder);
  const folderPlaceholder = useFormattedMessage(messages.folderPlaceholder);
  const type_name = useFormattedMessage(messages.type);
  const typePlaceholder = useFormattedMessage(messages.typePlaceholder);
  const category_name = useFormattedMessage(messages.category);
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

  const handleDrawerCloseQuestion = () => {
    setDrawerOpen(false);
  };

  const config = [
    {
      key: "createNew",
      startIcon: <AddCircleOutlineIcon fontSize="small" />,
      customClass: "filled",
      render: () => {
        return (
          <Box>
            <FormattedMessage {...messages.createNew} />
          </Box>
        );
      },
      onClick: () => {
        router.push(APP_ROUTES.QUESTIONS_CREATE_NEW);
      },
    },
  ];
  return (
    <>
      <SideDrawer
        title="Add Questions"
        open={drawerOpen}
        onClose={handleDrawerCloseQuestion}
        isHelp={true}
      >
        <Box>
          <TextFieldStyled
            placeholder={"Search a keyword ..."}
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
          <BoxWrapper sx={{ boxShadow: "none", mt: "0" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <SelectBoxWrapper>
                <CustomSelect
                  placeholder={facultyPlaceholder}
                  controlText={faculty_name}
                  dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                  options={facultySelect}
                />
              </SelectBoxWrapper>
              <SelectBoxWrapper>
                <CustomSelect
                  placeholder={folderPlaceholder}
                  controlText={folder_name}
                  dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                  options={folderSelect}
                />
              </SelectBoxWrapper>
              <SelectBoxWrapper>
                <CustomSelect
                  placeholder={typePlaceholder}
                  controlText={type_name}
                  dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                  options={typeSelect}
                />
              </SelectBoxWrapper>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <SelectBoxWrapper sx={{ width: "48.5%", zIndex: "1" }}>
                <CustomSelect
                  placeholder={categoryPlaceholder}
                  controlText={category_name}
                  dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
                  options={categorySelect}
                  onChange={handleSelectChange}
                />
              </SelectBoxWrapper>
              <SelectBoxWrapper>
                <Box sx={{ display: "flex" }}>
                  {selectedValues.length > 0 ? (
                    selectedValues.map((value) => (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "max-content",
                        }}
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
          <BoxWrapper sx={{ m: "20px", width: "inherit" }}>
            <CustomDataGrid
              // rows={rowsManageQuestion}
              // columns={COLUMNS_CONFIG}
              // pageSizeData={pageSizeManageQuestion}
              // type={"1"}

              rows={questions?.data?.data}
              columns={COLUMNS_CONFIG}
              totalRows={questions?.data?.data?.length || 0}
              pageSizeData={10}
              type={"1"}
              buttonArray={config}
              // buttonArray={FOOTER_CONFIG}
              loading={questions?.isFetching}
            />
          </BoxWrapper>
        </Box>
      </SideDrawer>
    </>
  );
};

export default React.memo(DrawerQuestionsSection);
