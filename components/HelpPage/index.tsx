import { FC } from "react";
import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import SideDrawer from "components/Drawer";

type ModalContent = {
  title?: string | React.ReactElement;
  description?: string | React.ReactElement;
  listItem?: object[];
};

type HelpModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  heading?: string | React.ReactElement;
  description?: string | React.ReactElement;
  content?: ModalContent[];
  sx?:any;
};

const HelpModal: FC<HelpModalProps> = ({
  isOpen,
  onClose,
  title,
  heading,
  description,
  content,
  sx
}): JSX.Element => {
  return (
    <SideDrawer sx={sx} open={isOpen} onClose={onClose} title={title}>
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
              {el?.listItem && (
                <List>
                  {el.listItem.map((item: any, index: any) => (
                    <ListItem key={index} disablePadding alignItems="flex-start">
                      <ListItemIcon sx={{ minWidth: "20px", marginTop: "11px" }}>
                        <CircleIcon fontSize="small" sx={{ fontSize: "8px" }} />
                      </ListItemIcon>
                      <ListItemText primary={item?.content} />
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </SideDrawer>
  );
};

export default HelpModal;
