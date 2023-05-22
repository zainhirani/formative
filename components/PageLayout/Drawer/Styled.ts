import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import { alpha, styled } from "@mui/material/styles";
import ThemeContextProvider from "contexts/ThemeContext";

interface ExtendedDrawerProps extends DrawerProps {
  left: number;
  width: number;
  order: number;
  permanent?: boolean;
}

export const DrawerWrapper = styled(MuiDrawer)<ExtendedDrawerProps>(
  (props) =>
    ({
      "& .MuiDrawer-paper": {
        left: props.left,
        width: props.width,
        boxSizing: "border-box",
        zIndex: props.theme.zIndex.drawer - props.order,
        background: props.theme.palette.primary.main,
        boxShadow: "none",
      },
    } as any),
) as (props: ExtendedDrawerProps) => JSX.Element;
