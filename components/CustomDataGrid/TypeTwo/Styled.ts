import MuiBox, { BoxProps } from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const QuizDetailBox = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      ".table_row_btn": {
        textAlign: "right",
      },
      ".print_arrow_btn": {
        ".print_arrow": {
          color: theme.palette.primary.main,
        },
        "&:hover .print_arrow": {
          color: theme.palette.primary.light,
        },
      },
    } as any),
) as (props: BoxProps) => JSX.Element;

export const ButtonWrapper = styled(Button)<ButtonProps>(
  ({ theme }) =>
    ({
      fontSize: "16px",
      fontWeight: "400",
      height: "50px",
      lineHeight: "50px",
      textAlign: "center",
      padding: "0 20px",
      position: "relative",
      zIndex: "1",
      overflow: "hidden",
      color: theme.palette.primary.light,
      borderRadius: " 0px 0px 0px 0px",
      textTransform: "capitalize",
      border: "1px solid #EAEAEA",
    } as any),
) as (props: ButtonProps) => JSX.Element;

export const Showed = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      color: theme.palette.secondary.dark,
      fontSize: "14px",
      lineHeight: "16px",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      height: "100%",
      paddingLeft: "30px",
    } as any),
) as (props: BoxProps) => JSX.Element;

export const TableBox = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      ".table_row_btn": {
        textAlign: "right",
      },
      ".print_arrow_btn": {
        padding: "5px 30px",
        marginTop: "-1px",
        height: "auto",
        color: theme.palette.primary.main,
        background: "none",
        boxShadow: "none",
        border: "1px solid #EAEAEA",
        "&:hover": {
          background: theme.palette.primary.light,
          color: theme.palette.primary.main,
        },
        ".print_arrow": {
          color: theme.palette.primary.main,
        },
      },
    } as any),
) as (props: BoxProps) => JSX.Element;

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      // width: "100%",
      // boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
      // marginTop: "20px",
      // marginBottom: "40px",
      // borderRadius: "6px",
      // border: "1px solid",
      // borderColor: theme?.additionalColors?.primaryBorderGrey
    } as any),
) as (props: BoxProps) => JSX.Element;

export const BoxMatrixDropDownWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      width: "100%",
      padding: "15px 20px",
      borderBottom: " 1px solid",
      borderColor: theme?.additionalColors?.primaryBorderGrey,
    } as any),
) as (props: BoxProps) => JSX.Element;

export const BoxScoringWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      width: "100%",
      padding: "0px 20px",
      "& .customBorder": {
        borderBottom: "1px solid",
        borderColor: theme?.additionalColors?.primaryBorderGrey,
      },
    } as any),
) as (props: BoxProps) => JSX.Element;

export const BoxMatrixWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      width: "100%",
      display: "flex",
      alignItems: "center",
      padding: "20px 0px",
      "& .boxMatrix-b": {
        // borderRight:"1px solid",
        borderColor: theme?.additionalColors?.primaryBorderGrey,
        "&:last-child": {
          borderRight: "none",
        },
      },
    } as any),
) as (props: BoxProps) => JSX.Element;

export const BoxMatrix = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      "& h2": {
        fontWeight: "600",
        fontSize: "15px",
        lineHeight: "18px",
        color: theme.palette.primary.main,
      },
      "& p": {
        fontSize: "14px",
        lineHeight: "16px",
        display: "flex",
        alignItems: "center",
        gap: "40px",
        color: theme.palette.text.secondary,
        wordSpacing: "20px",
      },
    } as any),
) as (props: BoxProps) => JSX.Element;

export const BoxButtonWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      display: "flex",
      justifyContent: "space-between",
    } as any),
) as (props: BoxProps) => JSX.Element;
