import MuiBox, { BoxProps } from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

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
      fontWeight: "700",
      height: "60px",
      lineHeight: "60px",
      textAlign: "center",
      padding: "0 50px",
      position: "relative",
      zIndex: "1",
      overflow: "hidden",
      borderRadius: theme.shape.borderRadius,
      textTransform: "capitalize",
      width: "100%",
    } as any),
) as (props: ButtonProps) => JSX.Element;

// import MuiBox, { BoxProps } from "@mui/material/Box";
// import MuiIconButton, { IconButtonProps } from "@mui/material/IconButton";
// import { styled } from "@mui/material/styles";
// import MuiTypography, { TypographyProps } from "@mui/material/Typography";

// export const LoginBox = styled(MuiBox)<BoxProps>(
//   ({ theme }) =>
//     ({
//       minHeight: 600,
//       width: "480px",
//       padding: "42px",
//       maxWidth: "95%",
//       margin: "25px auto",
//       textAlign: "center",
//       boxShadow: theme.shadow.boxShadow,
//       borderRadius: theme.borderRadius.radius3,
//       backgroundColor: theme.palette.primary.light,
//       [theme.breakpoints.down("sm")]: {
//         padding: "20px",
//       },
//     } as any),
// ) as (props: BoxProps) => JSX.Element;

// export const MainWrapper = styled(MuiBox)<BoxProps>(
//   ({ theme }) =>
//     ({
//       width: "99%",
//       height: "75vh",
//       margin: "10px auto",
//       position: "relative",
//       borderRadius: theme.borderRadius.radius3,
//       backgroundColor: theme.palette.primary.main,
//     } as any),
// ) as (props: BoxProps) => JSX.Element;

// export const Description = styled(MuiTypography)<TypographyProps>(
//   ({ theme }) =>
//     ({
//       paddingTop: 2,
//       width: "700px",
//       maxWidth: "90%",
//       lineHeight: "30px",
//       textAlign: "center",
//       color: theme.palette.secondary.dark,
//       fontWeight: theme.typography.fontWeightLight,
//     } as any),
// ) as (props: TypographyProps) => JSX.Element;

// export const SocialButton = styled(MuiIconButton)<IconButtonProps>(
//   ({ theme }) =>
//     ({
//       width: "64px",
//       height: "64px",
//       margin: "16px 0",
//       boxShadow: theme.shadow.boxShadow,
//       borderRadius: theme.borderRadius.radius2,
//       backgroundColor: theme.palette.secondary.light,
//     } as any),
// ) as (props: IconButtonProps) => JSX.Element;
