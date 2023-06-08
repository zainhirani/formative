import { FC, useState } from "react";

import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { SelectBoxWrapper } from "./Styled";

type ICustomeDatePicker = {
  label: string | React.ReactElement;
  value?: null | Date;
  onChange?: (e?: any) => void;
};

const CustomeDatePicker: FC<ICustomeDatePicker> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <SelectBoxWrapper gridColumn="span 3">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="date_picker"
          label={label}
          value={value}
          onChange={onChange}
        />
      </LocalizationProvider>
    </SelectBoxWrapper>
  );
};

export default CustomeDatePicker;
