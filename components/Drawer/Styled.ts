import MuiBox, { BoxProps } from "@mui/material/Box";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const drawerWidth = 800;
const drawerWidthResponsive = 550;

export const DrawerWrapper = styled(Drawer)<DrawerProps>(
  ({ theme }) =>
    ({
      // width: isMobile ? "100%" : drawerWidth,
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
      },
      [theme.breakpoints.down("md")]: {
        width: drawerWidthResponsive,
      },
      flexShrink: 0,
      border: "0px",
      "& .MuiDrawer-paper": {
        width: drawerWidth,
        marginTop: "0px",
        zIndex: "9999999",
        background: theme.palette.primary.light,
        border: "1px solid",
        borderColor: theme.additionalColors?.primaryBorderGrey,
        boxShadow: "-10px 0px 20px -10px rgba(0, 0, 0, 0.2)",
        borderRadius: "12px 0px 0px 12px",
      },
    } as any),
) as (props: DrawerProps) => JSX.Element;

export const IconButtonWrapper = styled(IconButton)<IconButtonProps>(
  ({ theme }) =>
    ({
      // position: "absolute",
      // top: theme.spacing(1),
      // right: theme.spacing(1),
    } as any),
) as (props: IconButtonProps) => JSX.Element;

export const HeaderWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      display: "flex",
      alignItems: "center",
      padding: "18px 20px",
      background: theme.palette.primary.light,
      border: "1px solid",
      borderColor: theme.additionalColors?.primaryBorderGrey,
      borderRadius: "12px 0px 0px 0px",
      justifyContent: "space-between",
      ".text": {
        fontSize: "18px",
        lineHeight: "21px",
        color: theme.palette.text.secondary,
      },
    } as any),
) as (props: BoxProps) => JSX.Element;

export const CloseIconWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      ".help-text": {
        display: "flex",
        alignItems: "center",
        gap: "5px",
        fontSize: "16px",
        color: theme.palette.primary.main,
        margin: "0px 10px 0px 0px",
        ".icon-help": {
          fontSize: "20px",
        },
      },
    } as any),
) as (props: BoxProps) => JSX.Element;
