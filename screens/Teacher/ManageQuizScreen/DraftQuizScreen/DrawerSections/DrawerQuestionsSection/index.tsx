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

const DrawerQuestionsSection = (props: any) => {
  const { drawerOpen, setDrawerOpen } = props;

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
      startIcon: <AddCircleOutlineIcon fontSize="small" />,
      customClass: "filled",
      render: () => {
        return (
          <Box>
            <FormattedMessage {...messages.createNew} />
          </Box>
        );
      },
      onClick: () => {},
    },
  ];
  const handleDrawerCloseQuestion = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      <SideDrawer
        title="Add Questions Test"
        open={drawerOpen}
        onClose={handleDrawerCloseQuestion}
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
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <SelectBoxWrapper sx={{ width: "48.5%" }}>
                <CustomSelect
                  placeholder={categoryPlaceholder}
                  controlText={category}
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
              rows={rowsManageQuestion}
              columns={columnsManageQuestion}
              pageSizeData={pageSizeManageQuestion}
              type={"1"}
              buttonArray={config}
            />
          </BoxWrapper>
        </Box>
      </SideDrawer>
    </>
  );
};

export default DrawerQuestionsSection;
