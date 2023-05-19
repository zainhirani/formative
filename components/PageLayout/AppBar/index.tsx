import React from "react";
import { BottomNavigationActionTypeMap, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import RightMenu from "./RightMenu";
import SearchField from "./Search Field";
import { AppBar, BoxWrapper, Toolbar } from "./Styled";

interface BarComponentProps {
  open?: boolean;
  clickHandler?: any;
}

const AppBarComponent: React.FC<BarComponentProps> = ({
  open,
  clickHandler,
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
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
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
              Dashboard
            </Typography>
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
