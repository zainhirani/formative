import InputLabel, { InputLabelProps } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import MuiBox, { BoxProps } from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { TextFieldProps, TextField, Select, SelectProps } from "@mui/material";

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      boxShadow: theme.shadow.boxShadow,
      borderRadius: theme.borderRadius.radius1,
      background: theme.palette.primary.light,
    } as any),
) as (props: BoxProps) => JSX.Element;

export const TextFieldWrapper = styled(TextField)<TextFieldProps>(
  ({ theme }) =>
    ({
      ".MuiInputBase-root": {
        "&::before": {
          display: "none",
        },
        "&::after": {
          display: "none",
        },
      },
      ".MuiFormHelperText-root": {
        position: "absolute",
        bottom: "-60%",
      },
    } as any),
) as (props: TextFieldProps) => JSX.Element;

export const FieldBoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    } as any),
) as (props: BoxProps) => JSX.Element;

export const InputLabelWrapper = styled(InputLabel)<InputLabelProps>(
  ({ theme }) =>
    ({
      color: theme.palette.text.secondary,
      fontSize: "16px",
      width: "40%",
    } as any),
) as (props: InputLabelProps) => JSX.Element;

export const SelectWrapper = styled(Select)<SelectProps>(
  ({ theme }) =>
    ({
      ".MuiInputBase-root": {
        "&::before": {
          display: "none",
        },
        "&::after": {
          display: "none",
        },
      },
    } as any),
) as (props: SelectProps) => JSX.Element;
