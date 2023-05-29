import { Box, Grid, Typography } from "@mui/material";
import PageLayout from "components/PageLayout";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import FormattedMessage from "theme/FormattedMessage";
import addImage from "./addImage";

import messages from "./messages";
import Editor from './Editor'

const CreateNewScreen = () => {
  return (
    <>
      <PageLayout>
        <Box sx={{ display: "flex", minHeight: "800px" }}>
          <Box
            sx={{
              width: "40%",
              backgroundColor: (theme) => theme.palette.background.paper,
              marginRight: "30px",
              borderRadius: "6px",
              boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                px: "20px",
                py: "24px",
              }}
            >
              <Typography>
                <FormattedMessage {...messages.author} />
                <FormattedMessage {...messages.authorName} />
              </Typography>
              <Typography>
                <FormattedMessage {...messages.status} />
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  px: "20px",
                  py: "24px",
                  border: "1px solid",
                  borderLeft: "0",
                  borderRight: "0",
                  width: "50%",
                  borderTopLeftRadius: "5px",
                }}
              >
                <FormattedMessage {...messages.questNo} />
                <FormattedMessage {...messages.questNoValue} />
              </Typography>
              <Typography
                sx={{
                  px: "20px",
                  py: "24px",
                  border: "1px solid",
                  width: "50%",
                  borderRight: "0",
                  borderTopRightRadius: "5px",
                }}
              >
                <FormattedMessage {...messages.questType} />
                <FormattedMessage {...messages.questTypeValue} />
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  px: "20px",
                  py: "24px",
                  border: "1px solid",
                  borderTop: "0",
                  borderLeft: "0",
                  borderRight: "0",
                  width: "50%",
                }}
              >
                <FormattedMessage {...messages.public} />
                {/* <FormattedMessage {...messages.questNoValue} /> */}
              </Typography>
              <Typography
                sx={{
                  px: "20px",
                  py: "24px",
                  border: "1px solid",
                  borderTop: "0",
                  borderRight: "0",
                  width: "50%",
                }}
              >
                <FormattedMessage {...messages.limit} />
                <FormattedMessage {...messages.limitValue} />
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  px: "20px",
                  py: "24px",
                  borderBottom: "1px solid",
                  width: "100%",
                }}
              >
                <FormattedMessage {...messages.folder} />
                <FormattedMessage {...messages.folderValue} />
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  px: "20px",
                  py: "24px",
                  borderBottom: "1px solid",
                  width: "100%",
                }}
              >
                <FormattedMessage {...messages.category} />
                <FormattedMessage {...messages.categoryValue} />
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  px: "20px",
                  py: "24px",
                  borderBottom: "1px solid",
                  width: "100%",
                }}
              >
                <FormattedMessage {...messages.categoriesForFaculty} />
                <FormattedMessage {...messages.categoriesForFacultyValue} />
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ px: "20px", py: "10px", width: "100%" }}>
                <FormattedMessage {...messages.text1} />
              </Typography>
              <Typography sx={{ px: "20px", py: "10px", width: "100%" }}>
                <FormattedMessage {...messages.text2} />
              </Typography>
              <Typography sx={{ px: "20px", py: "10px", width: "100%" }}>
                <FormattedMessage {...messages.text3} />
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "60%",
              backgroundColor: (theme) => theme.palette.background.paper,
              borderRadius: "6px",
              boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box>
              <Editor />
            </Box>
            <Box>
              {/* <addImage /> */}
            </Box>
            <Box>3</Box>
          </Box>
        </Box>
      </PageLayout>
    </>
  );
};

export default CreateNewScreen;
