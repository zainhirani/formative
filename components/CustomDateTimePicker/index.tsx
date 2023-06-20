import { FC, useState } from "react";

import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { SelectBoxWrapper } from "./Styled";

type ICustomeDateTimePicker = {
  label: string | React.ReactElement;
  value?: null | Date;
  onChange?: (e?: any) => void;
};

const CustomeDateTimePicker: FC<ICustomeDateTimePicker> = ({
  label,
  value,
  onChange,
  ...rest
}) => {
  return (
    <SelectBoxWrapper gridColumn="span 3">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          className="datetime_picker"
          label={label}
          value={value}
          onChange={onChange}
          defaultValue={new Date()}
          {...rest}
        />
      </LocalizationProvider>
    </SelectBoxWrapper>
  );
};

export default CustomeDateTimePicker;
