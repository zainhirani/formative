import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import GroupedButton from "components/GroupedButton";
import { ButtonConfig } from "components/GroupedButton/types";

export const UploadQuestions = () => {
  const router = useRouter();
  const config: ButtonConfig[] = [
    {
      key: "submit",
      startIcon: <FileUploadOutlinedIcon />,
      render: () => {
        return <Box>Upload</Box>;
      },
      onClick: () => {
        // console.log("Add Students");
      },
    },
    {
      key: "duplicate",
      startIcon: <CancelOutlinedIcon />,
      render: () => {
        return <Box>Cancel</Box>;
      },
      onClick: () => {
        // console.log("Save");
        router.back();
      },
    },
  ];

  return (
    <form
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          maxWidth: "670px",
          width: "100%",
          margin: "0",
          boxShadow: "0 0 40px 0 rgb(0 0 0 / 10%)",
          borderRadius: "6px",
          overflow: "hidden",
          border: "1px solid #EAEAEA",
        }}
      >
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
            <AddIcon sx={{ fontSize: "80px" }} />
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
            padding: "20px",
            width: "50%",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ color: "#404040" }}>
              Your Files
            </Typography>
            <Typography variant="body2" sx={{ color: "#7F7F7F" }}>
              No files uploaded yet!
            </Typography>
            <Button
              startIcon={<CheckCircleOutlinedIcon />}
              sx={{
                color: "#7F7F7F",
                textTransform: "capitalize",
                display: "flex",
                alignItems: "start",
                textAlign: "left",
              }}
            >
              Select exam soft formatted question file to upload.
            </Button>
          </Box>
          <Box>
            <Divider sx={{ margin: "10px -20px" }} />
            <Typography variant="h6" sx={{ color: "#404040" }}>
              Primary Category Prefix:
            </Typography>
            <TextField
              id="standard-basic"
              label="Start typing here..."
              variant="standard"
              sx={{
                ".MuiInputBase-root": {
                  "&::before": {
                    display: "none",
                  },
                  "&::after": {
                    display: "none",
                  },
                },
              }}
            />
            <Divider sx={{ margin: "10px -20px" }} />
            <GroupedButton config={config} />
          </Box>
        </Box>
      </Box>
    </form>
  );
};
