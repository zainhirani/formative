import React from "react";
import { Avatar, Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { USERIMAGE } from "configs";
import { useAuthContext } from "contexts/AuthContext";

const RightMenu = () => {
  const { currentUser } = useAuthContext();
  return (
    <>
      {/* <ThemeSwitcher /> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: (theme) => theme.palette.primary.dark,
        }}
      >
        <Avatar
          sx={{ width: 40, height: 40, border: "1px solid #EAEAEA" }}
          alt="Kavin"
          src={USERIMAGE}
        />
        <Typography
          gutterBottom
          variant="h5"
          m={0}
          ml={1}
          sx={{
            fontSize: "14px",
            lineHeight: "16px",
            fontWeight: "400",
          }}
        >
          Hi, {currentUser?.name}.
        </Typography>
      </Box>
    </>
  );
};

export default RightMenu;
