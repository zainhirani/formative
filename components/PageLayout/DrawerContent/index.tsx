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
import { COMMON_MENU, STUDENT_MENU, TEACHER_MENU } from "./sidebarData";
import SidebarMultiMenuItem from "./SidebarIMultiMenuItem";
import { DrawerHeader } from "./Styled";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuthContext } from "contexts/AuthContext";
import { useRegisterDetail } from "providers/Auth";

interface BarComponentProps {
  open?: boolean;
  clickHandler?: any;
}

const DrawerContent: React.FC<BarComponentProps> = ({ open, clickHandler }) => {
  const router = useRouter();
  const { signOut } = useAuthContext();
  const currentUser = useRegisterDetail();

  let MENU_ITEMS =
    currentUser?.data?.type === "ADMIN" ? TEACHER_MENU : STUDENT_MENU;
  let COMMON_MENU_ITEMS = [COMMON_MENU.profile];

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
        {/* sx={{display: { md: "none", xs: "block" },}} */}
        <IconButton onClick={clickHandler}>
          <MenuIcon sx={{ color: (theme) => theme.palette.primary.light }} />
        </IconButton>
      </DrawerHeader>

      <List sx={{ height: "100%" }}>
        {MENU_ITEMS.map((item: any, index) =>
          item?.subitems?.length ? (
            <SidebarMultiMenuItem item={item} key={index} hamOpen={open} />
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
                      display: !open ? "none" : "block",
                      "& span": {
                        fontSize: "14px",
                      },
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ),
        )}
        <Divider
          sx={{
            height: "1px",
            background: (theme) => theme.palette.primary.light,
            width: "80%",
            margin: "0 auto",
            marginTop: "3rem",
            marginBottom: "2rem",
          }}
        />

        {COMMON_MENU_ITEMS.map((item: any, index) => (
          <ListItem
            key={item.title}
            disablePadding
            sx={{
              backgroundColor: isActiveRoute(item.link) ? "#68151E" : "initial",
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
                    display: !open ? "none" : "block",
                    fontSize: "14px",
                    "& span": {
                      fontSize: "14px",
                    },
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      {/* Logout Button */}
      <List>
        <ListItem disablePadding>
          {/* <Link href="#" passHref={true}> */}
          <ListItemButton onClick={() => signOut()}>
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
                display: !open ? "none" : "block",
                "& span": {
                  fontSize: "14px",
                },
              }}
            />
          </ListItemButton>
          {/* </Link> */}
        </ListItem>
      </List>
    </>
  );
};

export default DrawerContent;
