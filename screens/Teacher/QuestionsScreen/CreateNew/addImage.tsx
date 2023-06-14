// import React from "react";
// import { BoxWrapper } from "./Styled";
// import { Box, Button, Typography } from "@mui/material";
// import FormattedMessage from "theme/FormattedMessage";
// import messages from "./messages";
// import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

// const ImageSection = () => {
//   return (
//     <BoxWrapper sx={{ p: "20px" }}>
//       <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Typography>
//           <FormattedMessage {...messages.imageLabel} />
//         </Typography>
//         <Button
//           sx={{ textTransform: "capitalize" }}
//           startIcon={<AddCircleOutlineRoundedIcon />}
//         >
//           <FormattedMessage {...messages.addImageButton} />
//         </Button>
//       </Box>
//       <Typography>
//         <FormattedMessage {...messages.addImageText} />
//       </Typography>
//     </BoxWrapper>
//   );
// };

// export default ImageSection;

import React, { useState } from "react";
import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import messages from "./messages";

interface ImageUploadProps {
  onImageUpload?: (image: File | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageUpload = () => {},
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageUpload(file);
    } else {
      setPreviewImage(null);
      onImageUpload(null);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);

    onImageUpload(null);
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 2, borderRadius: "8px", minHeight: "100px", maxHeight: "300px" }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent={"space-between"}
        spacing={2}
      >
        <Grid item>
          <Typography>Image</Typography>
        </Grid>
        <Grid item>
          <label htmlFor="image-upload">
            <Button
              component="span"
              color="primary"
              variant="outlined"
              sx={{ border: "none" }}
            >
              <AddCircleOutlineRoundedIcon /> Add
            </Button>
          </label>
          <input
            accept="image/*"
            id="image-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          {previewImage && (
            <Grid item>
              <IconButton color="primary" onClick={handleRemoveImage}>
                <ClearRoundedIcon />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Grid>
      {!previewImage && (
        <Typography>{messages.addImageText.defaultMessage}</Typography>
      )}
      {previewImage && (
        <img
          src={previewImage}
          alt="Preview"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      )}
    </Paper>
  );
};

export default ImageUpload;
