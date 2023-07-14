import React, { useEffect, useState } from "react";
import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import messages from "./messages";

interface ImageUploadProps {
  onImageUpload?: (image: File | null) => void;
  src?: any;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageUpload = () => {},
  src = null,
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

  useEffect(() => {
    if (src) {
      setPreviewImage(src);
    }
  }, [src]);

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: "8px",
        minHeight: "100px",
        maxHeight: "300px",
        overflow: "auto",
      }}
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
            {!previewImage && (
              <Button
                component="span"
                color="primary"
                variant="outlined"
                sx={{ border: "none" }}
              >
                <AddCircleOutlineRoundedIcon /> Add
              </Button>
            )}
          </label>
          <input
            accept=".jpg, .jpeg, .png"
            id="image-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          {previewImage && (
            // @ts-ignore
            <Grid item align="right">
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
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      )}
    </Paper>
  );
};

export default ImageUpload;
