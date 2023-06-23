import React from "react";
import { styled } from "@mui/system";
import { CircularProgress, Backdrop } from "@mui/material"; // eslint-disable-line

const OverlayBackdrop = styled(Backdrop)(({ theme }: any) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: "#fff",
}));

interface LoaderProps {
  isShow?: boolean;
}

const OverlayLoader: React.FC = ({ isShow = false }: LoaderProps) => {
  return (
    <OverlayBackdrop open={isShow}>
      <CircularProgress color="inherit" />
    </OverlayBackdrop>
  );
};

export default OverlayLoader;
