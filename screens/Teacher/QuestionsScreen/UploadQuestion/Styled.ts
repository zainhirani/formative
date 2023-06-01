import { styled } from "@mui/material/styles";
import MuiBox, { BoxProps } from "@mui/material/Box";

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      //   boxShadow: theme.shadow.boxShadow,
      //   borderRadius: theme.borderRadius.radius1,
      //   background: theme.palette.primary.light,
      //   height: "100vh",
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
    } as any),
) as (props: BoxProps) => JSX.Element;
