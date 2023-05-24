import { Box, Typography } from "@mui/material";
import PageLayout from "components/PageLayout";
import DraftsIcon from '@mui/icons-material/Drafts';


const CreateNewScreen = () => {
  return (
    <>
      <PageLayout>
        <Box sx={{display:"flex"}}>
          <Box sx={{ width: '40%' }}>
            <Box>
                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                  <Typography >Author: Dr. Kevin B.</Typography> 
                  <Typography >Status: <DraftsIcon/></Typography> 
                </Box>
            </Box>
          </Box>
          <Box sx={{ width: '60%' }}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Box>
        </Box>
      </PageLayout>
    </>
  );
};

export default CreateNewScreen;
