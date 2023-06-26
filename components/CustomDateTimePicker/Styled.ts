import MuiBox, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const SelectBoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      paddingLeft: "5px",
      border: "1px solid",
      borderColor: theme?.additionalColors?.primaryBorderGrey,
      "& .datetime_picker .MuiInputLabel-shrink": {
        display: "none !Important",
      },
      "& .datetime_picker fieldset.MuiOutlinedInput-notchedOutline": {
        border: "0 !Important",
      },
      "& input, label":{
        fontSize: "14px", 
      }
    } as any),
) as (props: BoxProps) => JSX.Element;
