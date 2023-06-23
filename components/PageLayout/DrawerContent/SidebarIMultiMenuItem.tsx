import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface SubmenuItem {
  id: number;
  title: string;
  link: string;
}

interface MenuItem {
  id: number;
  title: string;
  link: string;
  icon: React.ReactNode;
  subitems?: SubmenuItem[];
}

const SidebarMultiMenuItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setOpen(!open);
  };

  const isActiveRoute = (route: string) => {
    return router.pathname === route;
  };

  const hasSubmenu = item.subitems && item.subitems.length > 0;

  return (
    <ListItem
      key={item.title}
      disablePadding
      sx={{
        background: isActiveRoute(item.link) ? "#68151E" : "",
        "&:hover": {
          background: "#68151E",
        },
        "&.has-submenu": {
          flexWrap: "wrap",
          background: "#68151E"
        },
      }}
      className={hasSubmenu && open ? "has-submenu" : ""}
    >
      <ListItemButton
        onClick={handleClick}
        sx={{
          flexWrap: "wrap",
          backgroundColor: isActiveRoute(item.link) ? "#68151E" : "initial",
        }}
      >
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
        {hasSubmenu && ( // Render the expand/collapse icons only if there's a submenu
          open ? (
            <ExpandLess sx={{ color: "#fff" }} />
          ) : (
            <ExpandMore sx={{ color: "#fff" }} />
          )
        )}
      </ListItemButton>
      <Collapse
        in={open}
        timeout="auto"
        className="subMenuUl"
        unmountOnExit
        sx={{
          paddingLeft: "16px",
          paddingRight: "16px",
          width: "100%",
        }}
      >
        {item.subitems && (
          <List disablePadding sx={{ paddingTop: "20px" }}>
            {item.subitems.map((sitem: SubmenuItem) => (
              <ListItem
                button
                key={sitem.id}
                sx={{
                  backgroundColor: isActiveRoute(sitem.link)
                    ? "#8C2531"
                    : "initial",
                  borderLeft: isActiveRoute(sitem.link)
                    ? "2px solid #fff"
                    : "initial",
                  marginBottom: "10px",
                  paddingLeft: "38px",
                  "&:hover": {
                    backgroundColor: "#8C2531",
                  },
                }}
              >
                <Link href={sitem.link} passHref>
                  <ListItemText
                    primary={sitem.title}
                    sx={{
                      color: (theme) => theme.palette.primary.light,
                      fontSize: "14px",
                      margin: "0 !important",
                      "& span": {
                        fontSize: "14px",
                      },
                    }}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        )}
      </Collapse>
    </ListItem>
  );
};

export default SidebarMultiMenuItem;
