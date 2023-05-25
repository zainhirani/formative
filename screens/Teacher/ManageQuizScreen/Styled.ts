import { TextFieldProps,TextField, Select, SelectProps } from "@mui/material";
import MuiBox, { BoxProps } from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      width: "100%",
      boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
      marginTop: "20px",
      marginBottom: "20px",
      borderRadius: "6px",
      border: "1px solid #EAEAEA"
    } as any),
) as (props: BoxProps) => JSX.Element;

export const BoxPaginate = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      display: "flex",
      padding: '0px 20px',
      marginTop: "30px",
      marginBottom: "20px",
      width: "100%",
      background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 45%, rgba(255,255,255,0) 100%)',
      '.customPagination':{
        "button": {
          border: '0px',
          borderRadius: '6px',
          background: "#BFBFBF"
        },
        'button.Mui-selected': {
          color: "#fff",
          background: "#8C2531"
        }
      },
      '.showing-text': {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        fontSize: "14px",
        color: theme.palette.secondary.dark,
      }
    } as any),
) as (props: BoxProps) => JSX.Element;

export const TextFieldStyled = styled(TextField)<TextFieldProps>(
  ({ theme }) =>
    ({
      borderWidth: "0px",
      borderRadius: "0px",
      border: "0px",
      ".MuiOutlinedInput-notchedOutline":{
        border:"none",
        color: '#999999',
      }
    } as any),
) as (props: TextFieldProps) => JSX.Element;

export const SelectStyled = styled(Select)<SelectProps>(
  ({ theme }) =>
    ({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#CACACA'
      },
      '&:hover fieldset': {
        borderColor: '#007AFF'
      },
      '&.Mui-focused hover': {
        borderColor: '#007AFF'
      },
      '&.Mui-focused fieldset': {
        borderColor: '007AFF'
      }
    },
      "fieldset":{
        borderWidth: "0px",
        borderLeft: '1px solid #EAEAEA',
        borderRadius: '0px',
        paddingRight: '10px',
        // '.MuiOutlinedInput-notchedOutline': { border: 0 } ,
        "&:hover":{
          borderWidth: "0px",
        }
      },
      '.MuiOutlinedInput-notchedOutline': { 
        border: 0,
      } ,
      '#demo-simple-select': {
        borderLeft: '1px solid #EAEAEA',
        borderRadius: '0px',
      }
    } as any),
) as (props: SelectProps) => JSX.Element;

export const ButtonWrapper = styled(Button)<ButtonProps>(
  ({ theme }) =>
    ({
      display: "flex",
      alignItems: 'center',
      fontSize: "16px",
      fontWeight: "400",
      height: "100%",
      lineHeight: "50px",
      textAlign: "center",
      padding: "0 50px",
      position: "relative",
      zIndex: "1",
      overflow: "hidden",
      color: theme.palette.primary.light,
      borderRadius: " 0px 6px 6px 0px",
      textTransform: "capitalize",
      width: "100%",
    } as any),
) as (props: ButtonProps) => JSX.Element;
