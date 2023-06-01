import React from "react";
import { BottomNavigationActionTypeMap, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import RightMenu from "./RightMenu";
import { AppBar, BoxWrapper, Toolbar } from "./Styled";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface BarComponentProps {
  open?: boolean;
  clickHandler?: any;
  title?: string;
  iconAngle?: false;
  subText?: string;
  icon?: any;
}

const AppBarComponent: React.FC<BarComponentProps> = ({
  open,
  clickHandler,
  title,
  icon,
  iconAngle,
  subText,
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
                marginRight: 5,
                "&::before": {
                  content: '""',
                  background: (theme) => theme.palette.primary.main,
                  width: 60,
                  height: 66,
                  position: "absolute",
                  left: -8,
                  top: -13,
                  zIndex: -1,
                },
                ...(open && { display: "none" }),
                ...(open && {}),
              }}
            >
              <MenuIcon
                sx={{ color: (theme) => theme.palette.primary.light }}
              />
            </IconButton>
            {iconAngle ? (
              <>
                <Typography
                  gutterBottom
                  variant="h4"
                  m={0}
                  sx={{
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    lineHeight: "21px",
                    fontWeight: "400",
                    color: (theme) => theme.palette.text.secondary,
                  }}
                >
                  {title}
                  <IconButton sx={{ p: 0 }}>
                    <ChevronRightIcon fontSize="large" />
                  </IconButton>
                  <Typography
                    sx={{ color: (theme) => theme.palette.primary.dark }}
                  >
                    {subText}
                  </Typography>
                  <IconButton
                    sx={{ color: (theme) => theme.palette.primary.main }}
                  >
                    {icon}
                  </IconButton>
                </Typography>
              </>
            ) : (
              <Typography
                gutterBottom
                variant="h4"
                m={0}
                sx={{
                  fontSize: "18px",
                  lineHeight: "21px",
                  fontWeight: "400",
                }}
              >
                {title}
                <IconButton
                  sx={{ color: (theme) => theme.palette.primary.main }}
                >
                  {icon}
                </IconButton>
              </Typography>
            )}
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
