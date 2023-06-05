import { BorderColor } from "@mui/icons-material";
import MuiBox, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      width: "40%",
      minHeight: "700px",
      height: "85vh",
      borderRadius: "6px",
      boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
      backgroundColor: theme.palette.background.paper,
    } as any),
) as (props: BoxProps) => JSX.Element;
