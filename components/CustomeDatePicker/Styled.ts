import MuiBox, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";


export const SelectBoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      paddingLeft: '5px',
      borderLeft: "1px solid",
      borderColor: theme?.additionalColors?.primaryBorderGrey,
      "& .date_picker .MuiInputLabel-shrink":{
        display: "none !Important"
      },
      "& .date_picker fieldset.MuiOutlinedInput-notchedOutline":{
        border:"0 !Important"
      }
    } as any),
) as (props: BoxProps) => JSX.Element;
