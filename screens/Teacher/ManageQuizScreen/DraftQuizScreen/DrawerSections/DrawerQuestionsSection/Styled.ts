import { styled } from "@mui/material/styles";
import { TextField, TextFieldProps } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import MuiBox, { BoxProps } from "@mui/material/Box";

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      width: "100%",
      boxShadow: theme.shadow.boxShadow,
      marginTop: "20px",
      marginBottom: "20px",
      background: theme.palette.primary.light,
      borderRadius: theme.borderRadius.radius1,
      //   border: "1px solid",
      //   borderColor: "#EAEAEA",
    } as any),
) as (props: BoxProps) => JSX.Element;

export const SelectBoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: theme.additionalColors?.primaryBorderGrey,
      padding: "10px 20px",
      width: "100%",
      display: "flex",
      alignItems: "center",
    } as any),
) as (props: BoxProps) => JSX.Element;

export const ButtonWrapper = styled(Button)<ButtonProps>(
  ({ theme }) =>
    ({
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
      fontWeight: "400",
      height: "100%",
      lineHeight: "50px",
      textAlign: "center",
      padding: "0 50px",
      position: "relative",
      zIndex: "1",
      overflow: "hidden",
      color: "#fff",
      borderRadius: " 0px 6px 6px 0px",
      textTransform: "capitalize",
    } as any),
) as (props: ButtonProps) => JSX.Element;
