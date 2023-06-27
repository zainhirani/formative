import React from "react";
import { BottomNavigationActionTypeMap, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import RightMenu from "./RightMenu";
import { AppBar, BoxWrapper, Toolbar } from "./Styled";
import Breadcrumb from "components/Breadcrumb";

interface BarComponentProps {
  open?: boolean;
  clickHandler?: any;
  title?: string;
  iconAngle?: boolean;
  subText?: string;
  icon?: any;
  onIconClick?: () => void;
}

const AppBarComponent: React.FC<BarComponentProps> = ({
  open,
  clickHandler,
  title,
  icon,
  iconAngle = false,
  subText,
  onIconClick,
}) => {
  return (
    <>
      <AppBar
        position="fixed"
        open={open}
        sx={{
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <BoxWrapper
            sx={{
              color: (theme) => theme.palette.primary.dark,
            }}
          >
            <IconButton
              onClick={clickHandler}
              edge="start"
              sx={{
                marginRight: 4,
                marginLeft: "-16px",
                "&::before": {
                  content: '""',
                  background: (theme) => theme.palette.primary.main,
                  width: 54,
                  height: 66,
                  position: "absolute",
                  left: -8,
                  top: -13,
                  zIndex: -1,
                },
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon
                sx={{ color: (theme) => theme.palette.primary.light }}
              />
            </IconButton>
            <Breadcrumb />
          </BoxWrapper>
          <BoxWrapper>
            <RightMenu />
          </BoxWrapper>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarComponent;
