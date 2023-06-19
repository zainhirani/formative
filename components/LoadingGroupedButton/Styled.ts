import Button, { ButtonProps } from "@mui/material/Button";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { styled } from "@mui/material/styles";

export const LoadingButtonWrapper = styled(LoadingButton)<LoadingButtonProps>(
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
      background: theme.palette.primary.main,
      borderRight: "0px !important",
      "&:first-of-type": {
        background: theme.palette.secondary.main,
      },
      "&:hover": {
        background: theme.palette.secondary.main,
      },
      ".MuiLoadingButton-loadingIndicator": {
        top: "35%",
        left: "20%",
      },
    } as any),
) as (props: LoadingButtonProps) => JSX.Element;
