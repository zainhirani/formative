import { BorderColor } from "@mui/icons-material";
import MuiBox, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      width: "35%",
      // minHeight: "700px",
      // height: "85vh",
      borderRadius: "6px",
      boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
      backgroundColor: theme.palette.background.paper,
    } as any),
) as (props: BoxProps) => JSX.Element;


export const SelectBoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      height: "50px",
      background: theme.palette.secondary.dark,
      pl: "20px",
      display: "flex",
      alignItems: "center",
      borderTopLeftRadius: "6px",
      borderTopRightRadius: "6px",
      "& .custom-select":{
        backgroundColor: 'transparent'
      }
    } as any),
) as (props: BoxProps) => JSX.Element;
