import MuiBox, { BoxProps } from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { TextFieldProps,TextField, Select, SelectProps } from "@mui/material";


export const BoxItemWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      borderRadius: "6px",
      // border: "1px solid",
      borderColor: theme?.additionalColors?.primaryBorderGrey,
      '& .item':{
        padding: '20px',
        border: "1px solid",
        borderColor: theme?.additionalColors?.primaryBorderGrey,
      },
      '& .item2':{
        marginTop:'-1px',
        padding: '12px 20px',
        border: "1px solid",
        borderColor: theme?.additionalColors?.primaryBorderGrey,
      },
      '& .item3':{
        padding: '19.5px 20px',
      },
    } as any),
) as (props: BoxProps) => JSX.Element;

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
      margin: "20px",
      borderRadius: "6px",
      border: "1px solid",
      borderColor: theme?.additionalColors?.primaryBorderGrey
    } as any),
) as (props: BoxProps) => JSX.Element;


export const YearCheckBoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      display: 'flex',
      alignItems: 'center',
      color: theme?.palette.text.secondary,
      "& .text":{
        color: theme?.palette.text.primary,
      }
    } as any),
) as (props: BoxProps) => JSX.Element;


