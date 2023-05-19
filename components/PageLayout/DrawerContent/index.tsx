import React from "react";
import Link from "next/link";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SITELOGO } from "configs";
import Image from "theme/Image";
import MenuData from "./navLinks";
import { DrawerHeader } from "./Styled";

interface BarComponentProps {
  open?: boolean;
  clickHandler?: any;
}

const DrawerContent: React.FC<BarComponentProps> = ({ open, clickHandler }) => {
  return (
    <>
      <DrawerHeader>
        <Box
          sx={{
            height: 50,
            display: "flex",
            position: "relative",
            width: "100%",
            justifyContent: "start",
          }}
        >
          <Image
            alt="mini-logo"
            lazyLoadProps={{ height: 50 }}
            src={SITELOGO}
            lazyLoad={true}
          />
        </Box>
        <IconButton onClick={clickHandler}>
          <MenuIcon sx={{ color: (theme) => theme.palette.primary.light }} />
        </IconButton>
      </DrawerHeader>

      <List>
        {MenuData.map((item: any) => (
          <Link href={item.link} key={item.title} passHref={true}>
            <ListItem key={item.title} disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{ color: (theme) => theme.palette.primary.light }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{
                    color: (theme) => theme.palette.primary.light,
                    fontSize: "14px",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default DrawerContent;
