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

export const SidebarItemCollapse = ({ item }: any) => {
  const [itemName, setItemName] = useState({
    toggle: false,
    title: "",
  });
  const router = useRouter();
  const isActiveRoute = (route: string) => {
    return router.pathname === route;
  };

  return (
    <ListItem
      key={item?.title}
      disablePadding
      onClick={() =>
        setItemName({
          ...itemName,
          title: item?.title,
          toggle: !itemName?.toggle,
        })
      }
      sx={{
        background:
          itemName?.title === item.title && itemName.toggle ? "#68151E" : "",
        "&:hover": {
          background: "#68151E",
        },
      }}
    >
      {/* <Link href={item.link} key={item.title} passHref={true}> */}
      <ListItemButton
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
        {itemName?.title === item.title && itemName.toggle ? (
          <ExpandLess sx={{ color: "#fff" }} />
        ) : (
          <ExpandMore sx={{ color: "#fff" }} />
        )}
        <Collapse
          key={item.id}
          className="subMenuUl"
          component="ul"
          in={itemName?.title === item.title && itemName.toggle}
          timeout="auto"
          unmountOnExit
          sx={{
            paddingLeft: "24px",
          }}
        >
          <List disablePadding>
            {item.subitems.map((sitem: any) => {
              return (
                <ListItem button key={sitem.id}>
                  <Link href={sitem.link} key={item.title} passHref={true}>
                    <ListItemText
                      key={sitem.id}
                      primary={sitem.title}
                      sx={{
                        color: (theme) => theme.palette.primary.light,
                        fontSize: "14px",
                        "& span": {
                          fontSize: "14px",
                        },
                      }}
                    />
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      </ListItemButton>
      {/* </Link> */}
    </ListItem>
  );
};
