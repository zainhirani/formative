import React, { ReactNode } from "react";
import Image from "next/image";
import { Box, DrawerProps, Typography } from "@mui/material";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  CloseIconWrapper,
  DrawerWrapper,
  HeaderWrapper,
  IconButtonWrapper,
} from "./Styled";
interface SideDrawerProps extends DrawerProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  isHelp?: boolean;
}

const SideDrawer: React.FC<SideDrawerProps> = ({
  open,
  onClose,
  children,
  title,
  isHelp,
  ...rest
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <DrawerWrapper
      variant="persistent"
      anchor="right"
      open={open}
      // isMobile={isMobile}
      {...rest}
    >
      <HeaderWrapper>
        <Typography className="text">{title}</Typography>
        <CloseIconWrapper>
          {isHelp ? (
            <Typography className="help-text">
              <HelpOutlineOutlinedIcon className="icon-help" /> Help
            </Typography>
          ) : (
            ""
          )}
          <IconButtonWrapper onClick={onClose}>
            <Image
              src="/close-cancel.svg"
              width={20}
              height={20}
              alt="cancel"
            />
          </IconButtonWrapper>
        </CloseIconWrapper>
      </HeaderWrapper>
      {children}
    </DrawerWrapper>
  );
};

export default SideDrawer;
