import {
  Box,
  Select,
  SelectProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import MuiBox, { BoxProps } from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      "& .MuiCheckbox-root": {
        padding: "0px 10px",
      },
      "& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader--sortable": {
        padding: "0px 10px",
      },
    } as any),
) as (props: BoxProps) => JSX.Element;
