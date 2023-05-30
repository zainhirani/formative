import React, { ReactNode } from "react";
import Image from "next/image";
import { DrawerProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DrawerWrapper, IconButtonWrapper } from "./Styled";

interface SideDrawerProps extends DrawerProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const SideDrawer: React.FC<SideDrawerProps> = ({
  open,
  onClose,
  children,
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
      <IconButtonWrapper onClick={onClose}>
        <Image src="/close-cancel.svg" width={20} height={20} />
      </IconButtonWrapper>
      {children}
    </DrawerWrapper>
  );
};

export default SideDrawer;
