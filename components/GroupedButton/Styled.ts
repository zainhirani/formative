import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const ButtonWrapper = styled(Button)<ButtonProps>(
  ({ theme }) =>
    ({
      display: "flex",
      fontSize: "16px",
      fontWeight: "400",
      height: "55px",
      lineHeight: "50px",
      textAlign: "center",
      padding: "0 30px",
      color: theme.palette.primary.light,
      borderRadius: "6px",
      textTransform: "capitalize",
      width: "max-content",
      borderColor: theme.palette.primary.light,
      borderRight: "0px !important",
      "& .cusFirstChild": {
        background: theme.palette.secondary.main,
      },
      "&:hover": {
        background: theme.palette.secondary.main,
      },
      "& .MuiButton-startIcon": {
        marginRight: "5px",
        marginLeft: "0px",
      },
    } as any),
) as (props: ButtonProps) => JSX.Element;
