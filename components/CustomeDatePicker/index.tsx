import { useState,FC } from "react";

import { TextField } from "@mui/material";
import {
  SelectBoxWrapper,
} from "./Styled";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

type ICustomeDatePicker = {
label:string | React.ReactElement,
value?: null | Date;
onChange?: (e?:any) => void

}



const CustomeDatePicker:FC<ICustomeDatePicker> = ({label,value,onChange}) => {

  return (
      <SelectBoxWrapper  gridColumn="span 3">
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
