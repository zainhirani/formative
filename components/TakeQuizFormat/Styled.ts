import { LoadingButton, LoadingButtonProps } from "@mui/lab";

import MuiBox, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      boxShadow: theme.shadow.boxShadow,
      borderRadius: theme.borderRadius.radius1,
      background: theme.palette.background.paper,
      display: "flex",
      width: "90%",
      height: "50px",
      alignItems: "center",
      paddingLeft: "16px",
    } as any),
) as (props: BoxProps) => JSX.Element;

export const ButtonWrapper = styled(LoadingButton)<LoadingButtonProps>(
  ({ theme }) =>
    ({
      display: "flex",
      fontSize: "16px",
      fontWeight: "400",
      height: "50px",
      lineHeight: "50px",
      textAlign: "center",
      padding: "0 50px",
      position: "relative",
      zIndex: "1",
      overflow: "hidden",
      color: theme.palette.primary.light,
      borderRadius: 0,
      textTransform: "capitalize",
      width: "10%",
    } as any),
) as (props: LoadingButtonProps) => JSX.Element;
