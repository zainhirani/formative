import { Box, Select, SelectProps, TextField, TextFieldProps } from "@mui/material";
import MuiBox, { BoxProps } from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const BoxPaginate = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      display: "flex",
      alignItems: "center",
      width: "100%",
      minHeight: '65px',
      background:
        "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 45%, rgba(255,255,255,0) 100%)",
      ".customPagination": {
        marginLeft: "20px",
        button: {
          border: "0px",
          borderRadius: "6px",
          background: theme.palette.secondary.dark,
        },
        "button.Mui-selected": {
          color: theme.palette.primary.light,
          background: theme.palette.primary.main,
        },
      },
      ".showing-text": {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        fontSize: "14px",
        color: theme.palette.secondary.dark,
      },
    } as any),
) as (props: BoxProps) => JSX.Element;

export const ShowingBox = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      marginRight: "20px",
    } as any),
) as (props: BoxProps) => JSX.Element;

export const TextFieldStyled = styled(TextField)<TextFieldProps>(
  ({ theme }) =>
    ({
      borderWidth: "0px",
      borderRadius: "0px",
      border: "0px",
      ".MuiOutlinedInput-notchedOutline": {
        border: "none",
        color: theme.additionalColors?.primary999999,
      },
    } as any),
) as (props: TextFieldProps) => JSX.Element;

export const SelectStyled = styled(Select)<SelectProps>(
  ({ theme }) =>
    ({
      fieldset: {
        borderWidth: "0px",
        borderLeft: "1px solid",
        borderColor: theme?.additionalColors?.primaryBorderGrey,
        borderRadius: "0px",
        paddingRight: "10px",
        "&:hover": {
          borderWidth: "0px",
        },
      },
      ".MuiOutlinedInput-notchedOutline": {
        border: 0,
      },
      "#demo-simple-select": {
        borderLeft: "1px solid",
        borderColor: theme?.additionalColors?.primaryBorderGrey,
        borderRadius: "0px",
      },
    } as any),
) as (props: SelectProps) => JSX.Element;

export const ButtonWrapper = styled(Button)<ButtonProps>(
  ({ theme }) =>
    ({
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
      height: "100%",
      padding: "18px 50px",
      textTransform: "capitalize",
      color: theme.palette.primary.main,
      background: "none",
      boxShadow: "none",
      border: "1px solid #EAEAEA",
      borderRadius: '0px 0px 5px 0px',
      marginTop: "-1px",
      "&.filled": {
        color: theme.palette.primary.light,
        background: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      }
    } as any),
) as (props: ButtonProps) => JSX.Element;
