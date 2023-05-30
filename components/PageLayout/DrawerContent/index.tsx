import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import { SITELOGO } from "configs";
import Image from "theme/Image";
import MenuData from "./navLinks";
import { SidebarItemCollapse } from "./SidebarItemCollapse";
import { DrawerHeader } from "./Styled";

interface BarComponentProps {
  open?: boolean;
  clickHandler?: any;
}

const DrawerContent: React.FC<BarComponentProps> = ({ open, clickHandler }) => {
  const router = useRouter();

  // Define a helper function to determine if a given route is active
  const isActiveRoute = (route: string) => {
    return router.pathname === route;
  };
  return (
    <>
      <DrawerHeader>
        <Box
          sx={{
            height: 50,
            display: "flex",
            position: "relative",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Image
            alt="mini-logo"
            lazyLoadProps={{ height: 50 }}
            src={SITELOGO}
            lazyLoad={true}
          />
        </Box>
        {/* <IconButton onClick={clickHandler}>
          <MenuIcon sx={{ color: (theme) => theme.palette.primary.light }} />
        </IconButton> */}
      </DrawerHeader>

      <List sx={{ height: "100%" }}>
        {MenuData.map((item: any, index) =>
          item.subitems != null ? (
            <SidebarItemCollapse item={item} key={index} />
          ) : (
            <ListItem
              key={item.title}
              disablePadding
              sx={{
                backgroundColor: isActiveRoute(item.link)
                  ? "#68151E"
                  : "initial",
                "&:nth-of-type(7)": {
                  marginBottom: "60px",
                },
                "&:hover": {
                  background: "#68151E",
                },
              }}
            >
              <Link href={item.link} key={item.title} passHref={true}>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      color: (theme) => theme.palette.primary.light,
                      minWidth: "40px",
                      "& .lazyload-wrapper": {
                        display: "flex",
                      },
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{
                      color: (theme) => theme.palette.primary.light,
                      fontSize: "14px",
                      "& span": {
                        fontSize: "14px",
                      },
                    }}
                  />
                </ListItemButton>
              </Link>
              {index == 6 ? (
                <Divider
                  sx={{
                    height: "1px",
                    background: (theme) => theme.palette.primary.light,
                    width: "82%",
                    position: "absolute",
                    left: "16px",
                    bottom: "-30px",
                  }}
                />
              ) : (
                ""
              )}
            </ListItem>
          ),
        )}
      </List>
      <List>
        <ListItem disablePadding>
          <Link href="#" passHref={true}>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: (theme) => theme.palette.primary.light,
                  minWidth: "40px",
                  "& .lazyload-wrapper": {
                    display: "flex",
                  },
                }}
              >
                <PowerSettingsNewOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                sx={{
                  color: (theme) => theme.palette.primary.light,
                  fontSize: "14px",
                  "& span": {
                    fontSize: "14px",
                  },
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </>
  );
};

export default DrawerContent;
