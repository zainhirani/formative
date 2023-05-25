import MuiBox, { BoxProps } from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      display: "flex",
      padding: theme.spacing(3, 4),
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
      [theme.breakpoints.down("md")]: {
        height: "20px",
      },
      [theme.breakpoints.up("md")]: {
        height: "50px",
      },
      [theme.breakpoints.down("md")]: {
        lineHeight: "20px",
      },
      [theme.breakpoints.up("md")]: {
        lineHeight: "35px",
      },
      textAlign: "center",
      padding: { md: "0 50px", xs: "0 10px" },
      position: "relative",
      zIndex: "1",
      overflow: "hidden",
      color: theme.palette.primary.light,
      borderRadius: theme.borderRadius.radius1,
      textTransform: "capitalize",
      width: "100%",
      "&:hover": {
        background: theme.palette.secondary.main,
      },
    } as any),
) as (props: ButtonProps) => JSX.Element;
