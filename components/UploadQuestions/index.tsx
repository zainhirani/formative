import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const UploadQuestions = () => {
  return (
    <Box sx={{display:"flex"}}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#404040",
          width: "50%",
          minHeight: "500px",
        }}
      >
        <IconButton sx={{ color: "#666666" }}>
          <AddIcon />
        </IconButton>
        <Box position={"relative"} sx={{ cursor: "pointer" }}>
          <Input
            type="file"
            sx={{
              position: "absolute",
              opacity: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          />
          <Button
            sx={{
              color: (theme) => theme.palette.primary.main,
              background: (theme) => theme.palette.primary.light,
              boxShadow: "none",
              border: "1px solid #EAEAEA",
              borderRadius: "6px",
              padding: "12px 40px",
              "&:hover": {
                color: (theme) => theme.palette.primary.light,
              },
            }}
            variant="contained"
          >
            Select
          </Button>
        </Box>
        <Typography
          variant="body2"
          sx={{ marginTop: "20px", color: "#7F7F7F" }}
        >
          or drag and drop document here.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fff",
          width: "50%",
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ color: "#404040" }}>
            Your Files
          </Typography>
          <Typography variant="body2" sx={{ color: "#7F7F7F" }}>
            No files uploaded yet!
          </Typography>
        </Box>
        <Box>
          <Divider />
          <Typography variant="h5" sx={{ color: "#404040" }}>
            Primary Category Prefix:
          </Typography>
          <Typography variant="body2" sx={{ color: "#7F7F7F" }}>
            Start typing here ...
          </Typography>
          <Divider />
          <ButtonGroup variant="contained" aria-label="outlined buttons group">
            <Button>Upload</Button>
            <Button>Cancel</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
};
