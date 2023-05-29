import Drawer, { DrawerProps } from "@mui/material/Drawer";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const drawerWidth = 400;

export const DrawerWrapper = styled(Drawer)<DrawerProps>(
  ({ theme }) =>
    ({
      // width: isMobile ? "100%" : drawerWidth,
      width:drawerWidth,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: drawerWidth,
        marginTop: "70px",
      },
    } as any),
) as (props: DrawerProps) => JSX.Element;

export const IconButtonWrapper = styled(IconButton)<IconButtonProps>(
  ({ theme }) =>
    ({
      position: "absolute",
      top: theme.spacing(1),
      right: theme.spacing(1),
    } as any),
) as (props: IconButtonProps) => JSX.Element;
