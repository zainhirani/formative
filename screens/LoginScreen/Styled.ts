import MuiBox, { BoxProps } from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      display: "flex",
      padding: theme.spacing(3, 5),
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-between",
    } as any),
) as (props: BoxProps) => JSX.Element;

export const ButtonWrapper = styled(Button)<ButtonProps>(
  ({ theme }) =>
    ({
      display: "inline-block",
      fontSize: "16px",
      fontWeight: "400",
      height: { md: "50px", xs: "max-content" },
      lineHeight: { md: "50px", xs: "20px" },
      textAlign: "center",
      padding: { md: "0 50px", xs: "0 10px" },
      position: "relative",
      zIndex: "1",
      overflow: "hidden",
      color: theme.palette.primary.light,
      borderRadius: theme.borderRadius.radius1,
      textTransform: "capitalize",
      width: "100%",
    } as any),
) as (props: ButtonProps) => JSX.Element;
