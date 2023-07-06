import { FC, useState } from "react";

import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { SelectBoxWrapper } from "./Styled";

type ICustomeDatePicker = {
  label?: string | React.ReactElement;
  value?: null | Date | string;
  onChange?: (e?: any) => void;
  sx?: any;
  components?: any;
  disableFuture?: boolean;
};

const CustomeDatePicker: FC<ICustomeDatePicker> = ({
  label,
  value,
  onChange,
  components,
  disableFuture,
  sx,
}) => {
  return (
    <SelectBoxWrapper gridColumn="span 3">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="date_picker"
          label={label}
          value={value}
          onChange={onChange}
          sx={sx}
          components={components}
          disableFuture={disableFuture}
        />
      </LocalizationProvider>
    </SelectBoxWrapper>
  );
};

export default CustomeDatePicker;
