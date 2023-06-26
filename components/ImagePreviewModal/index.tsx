import React from "react";
import { Box, IconButton, Modal, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import dummyImage from "/public/LoginBG.png";

const ModalContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  overflow: "auto",
  backgroundColor: theme.palette.background.paper,
  borderRadius: 8,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2),
  width: "60%",
  height: "60vh",
  maxWidth: "500px",
  margin: "0 auto",
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

interface ImagePreviewModalProps {
  src: string;
  open: boolean;
  onClose: () => void;
}

const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({
  src,
  open,
  onClose,
}) => {
  return (
    <Modal
      sx={{ zIndex: "99999999999" }}
      open={open}
      onClose={onClose}
      aria-labelledby="image-preview-modal"
      aria-describedby="image-preview-modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ModalContent>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingBottom: "100%",
          }}
        >
          <Image src={src} alt={"Preview"} layout="fill" objectFit="cover" />
        </div>

        {/* <Image src={src} alt="Preview" width={40} height={40} /> */}
        <CloseButton onClick={onClose} aria-label="Close">
          <CloseIcon />
        </CloseButton>
      </ModalContent>
    </Modal>
  );
};

export default ImagePreviewModal;
