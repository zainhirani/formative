import React from "react";
import { BoxWrapper } from "./Styled";
import { Box, Button, Typography } from "@mui/material";
import FormattedMessage from "theme/FormattedMessage";
import messages from "./messages";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

const ImageSection = () => {
  return (
    <BoxWrapper sx={{ p: "20px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>
          <FormattedMessage {...messages.imageLabel} />
        </Typography>
        <Button
          sx={{ textTransform: "capitalize" }}
          startIcon={<AddCircleOutlineRoundedIcon />}
        >
          <FormattedMessage {...messages.addImageButton} />
        </Button>
      </Box>
      <Typography>
        <FormattedMessage {...messages.addImageText} />
      </Typography>
    </BoxWrapper>
  );
};

export default ImageSection;
