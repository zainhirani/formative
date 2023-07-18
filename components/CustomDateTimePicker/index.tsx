import { FC, useState } from "react";

import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { SelectBoxWrapper } from "./Styled";
import dayjs, { Dayjs } from "dayjs";

type ICustomeDateTimePicker = {
  label: string | React.ReactElement;
  // value?: null | Date;
  value?: any;
  defaultValue?: any;
  currentDate?: any;
  onChange?: (e?: any) => void;
};

const CustomeDateTimePicker: FC<ICustomeDateTimePicker> = ({
  label,
  value,
  onChange,
  defaultValue,
  currentDate,
  ...rest
}) => {
  return (
    <SelectBoxWrapper gridColumn="span 3">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          closeOnSelect={false}
          className="datetime_picker"
          label={label}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          minDateTime={currentDate}
          {...rest}
        />
      </LocalizationProvider>
    </SelectBoxWrapper>
  );
};

export default CustomeDateTimePicker;
