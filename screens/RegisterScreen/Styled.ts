import CardHeader, { CardHeaderProps } from "@mui/material/CardHeader";
import InputLabel, { InputLabelProps } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import MuiBox, { BoxProps } from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";

export const CardHeaderWrapper = styled(CardHeader)<CardHeaderProps>(
  ({ theme }) =>
    ({
      color: theme.palette.primary.main,
      fontSize: "24px",
      paddingBottom: 0,
    } as any),
) as (props: CardHeaderProps) => JSX.Element;

export const InputLabelWrapper = styled(InputLabel)<InputLabelProps>(
  ({ theme }) =>
    ({
      marginBottom: theme.spacing(1),
    } as any),
) as (props: InputLabelProps) => JSX.Element;

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      display: "flex",
      padding: theme.spacing(15, 0),
      alignItems: "center",
      flexDirection: "row",
      height: "100vh", //theme.height.barHeight
      justifyContent: "center",
    } as any),
) as (props: BoxProps) => JSX.Element;

export const ButtonWrapper = styled(Button)<ButtonProps>(
  ({ theme }) =>
    ({
      display: "inline-block",
      fontSize: "16px",
      fontWeight: "400",
      height: "50px",
      lineHeight: "50px",
      textAlign: "center",
      padding: "0 50px",
      position: "relative",
      zIndex: "1",
      overflow: "hidden",
      color: theme.palette.primary.light,
      borderRadius: theme.borderRadius.radius1,
      textTransform: "capitalize",
      width: "100%",
    } as any),
) as (props: ButtonProps) => JSX.Element;
