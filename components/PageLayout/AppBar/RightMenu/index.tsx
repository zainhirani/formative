import React from "react";
import { Avatar, Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { USERIMAGE } from "configs";
import { useAuthContext } from "contexts/AuthContext";
import { useRegisterDetail } from "providers/Auth";

const RightMenu = () => {
  // const { currentUser } = useAuthContext();
  const currentUser = useRegisterDetail();
  const name = currentUser?.data?.first_name.concat(" ", currentUser?.data?.last_name);
  const userImage = name
    ?.split(" ")
    .map((word) => word.charAt(0))
    .join("");

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
        {" "}
        {userImage && (
          <Box
            sx={{
              background: (theme) => theme.palette.primary.main,
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
            }}
          >
            <Typography
              sx={{ color: (theme) => theme.palette.background.default }}
            >
              {userImage}
            </Typography>
          </Box>
        )}
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
          Hi, {name}.
        </Typography>
      </Box>
    </>
  );
};

export default RightMenu;
