import { FC } from "react";
import { Box, Typography } from "@mui/material";
import SideDrawer from "components/Drawer";

type ModalContent = {
  title?: string | React.ReactElement;
  description?: string | React.ReactElement;
};

type HelpModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  heading?: string | React.ReactElement;
  description?: string | React.ReactElement;
  content?: ModalContent[];
};

const HelpModal: FC<HelpModalProps> = ({
  isOpen,
  onClose,
  title,
  heading,
  description,
  content,
}): JSX.Element => {
  return (
    <SideDrawer open={isOpen} onClose={onClose} title={title}>
      <Box sx={{ px: 4, pt: 5 }}>
        <Typography sx={{ fontSize: "18px", fontWeight: "400", pb: "10px" }}>
          {heading}
        </Typography>
        <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
          {description}
        </Typography>
        <Box sx={{ pt: "30px" }}>
          {content?.map((el,index) => (
            <Box
            key={index}
              sx={{
                border: "1px solid #EAEAEA",
                borderRadius: "6px",
                px: "20px",
                py: "10px",
                mb: "10px",
              }}
            >
              <Typography color={(theme) => theme.palette.primary.main} sx={{}}>
                {el.title}
              </Typography>
              <Typography>{el.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </SideDrawer>
  );
};

export default HelpModal;
