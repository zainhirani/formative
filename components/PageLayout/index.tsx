import * as React from "react";
import { Box, Container } from "@mui/material";
import AppBarComponent from "./AppBar";
import Drawer from "./Drawer";
import DrawerContent from "./DrawerContent";
import { DrawerHeader } from "./DrawerContent/Styled";
interface Props {
  children?: JSX.Element;
  title?: any;
  icon?: any;
  subText?: string;
  iconAngle?: boolean;
  onIconClick?: () => void;
}

const PageLayout = (props: Props) => {
  const primaryDrawerWidth = 220;
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: open ? primaryDrawerWidth : 60,
        }}
        component="nav"
      >
        <Drawer
          open={open}
          width={open ? primaryDrawerWidth : 60}
          onClose={handleDrawerClose}
        >
          <DrawerContent clickHandler={handleDrawerClose} />
        </Drawer>
      </Box>

      <AppBarComponent
        title={props.title}
        icon={props.icon}
        iconAngle={props.iconAngle}
        subText={props.subText}
        open={open}
        clickHandler={handleDrawerOpen}
        onIconClick={props.onIconClick}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          paddingTop: "100px",
          width: { sm: `calc(100% - ${primaryDrawerWidth}px )` },
          marginBottom: "0",
          background: (theme) => theme.palette.primary.light,
        }}
      >
        {props.children ? props.children : null}
      </Box>
    </Box>
  );
};

export default PageLayout;
