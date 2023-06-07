import { useState } from "react";

import { TextField, makeStyles } from "@mui/material";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  BoxWrapper,
  ButtonWrapper,
  SelectBoxWrapper,
  TextFieldStyled,
} from "./Styled";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import CustomSelect from "components/CustomSelect/CustomSelect";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CustomeDatePicker from "components/CustomeDatePicker";

const SearchSection = () => {
  const [afterDatevalue, setAfterDatevalue] = useState(null);
  const [beforeDatevalue, setBeforeDatevalue] = useState(null);
  const searchQuiz = useFormattedMessage(messages.searchQuiz);

  //Remove Border of datepicker

  const optionsCourse = [
    { value: "Cannabis 2023", label: "Cannabis 2023" },
    { value: "Cannabis 2024", label: "Cannabis 2024" },
    { value: "Cannabis 2025", label: "Cannabis 2025" },
  ];

  return (
    <BoxWrapper display="grid" gridTemplateColumns="repeat(12, 1fr)">
      <Box gridColumn="span 3">
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
      </Box>
      <SelectBoxWrapper gridColumn="span 2">
        <CustomSelect
          placeholder="Select Course"
          dropdownIcon={<ArrowDropDownCircleOutlinedIcon />}
          options={optionsCourse}
        />
      </SelectBoxWrapper>
      <CustomeDatePicker
        label="Select Quiz After Date"
        value={afterDatevalue}
        onChange={setAfterDatevalue}
      />
      <CustomeDatePicker
        label="Select Quiz Before Date"
        value={beforeDatevalue}
        onChange={setBeforeDatevalue}
      />
    </BoxWrapper>
  );
};

export default SearchSection;
