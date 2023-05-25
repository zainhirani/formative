import { Box, Grid, Typography } from "@mui/material";
import PageLayout from "components/PageLayout";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import FormattedMessage from "theme/FormattedMessage";

import messages from './messages'



const CreateNewScreen = () => {
  return (
    <>
      <PageLayout>
        <Box sx={{display:"flex", minHeight:'800px'}}>
         <Box  sx={{ width: '40%', backgroundColor: (theme) => theme.palette.background.paper, marginRight:'30px', borderRadius:'6px', boxShadow:'0px 0px 40px rgba(0, 0, 0, 0.1)'}}>
          <Box sx={{display:'flex', justifyContent:'space-between',px:'20px', py:'24px' }}>
            <Typography>
              <FormattedMessage {...messages.author} /> 
              <FormattedMessage {...messages.authorName} />
            </Typography>
            <Typography><FormattedMessage {...messages.status}/></Typography>
          </Box>

          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography sx={{px:'20px', py:'24px',border:"1px solid",borderLeft:'0',borderRight:'0',width:'50%',borderTopLeftRadius:'5px' }}>
              <FormattedMessage {...messages.questNo} /> 
              <FormattedMessage {...messages.questNoValue} />
            </Typography>
            <Typography sx={{px:'20px', py:'24px',border:"1px solid",width:'50%',borderRight:'0',borderTopRightRadius:'5px' }}>
              <FormattedMessage {...messages.questType}/> 
              <FormattedMessage {...messages.questTypeValue}/>
            </Typography> 
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography sx={{px:'20px', py:'24px',border:"1px solid",borderTop:'0',borderLeft:'0',borderRight:'0',width:'50%'}}>
              <FormattedMessage {...messages.public} /> 
              {/* <FormattedMessage {...messages.questNoValue} /> */}
            </Typography>
            <Typography sx={{px:'20px', py:'24px',border:"1px solid",borderTop:'0',borderRight:'0',width:'50%' }}>
              <FormattedMessage {...messages.limit}/> 
              <FormattedMessage {...messages.limitValue}/>
            </Typography> 
          </Box>

          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography sx={{px:'20px', py:'24px',borderBottom:"1px solid",width:'100%' }}>
              <FormattedMessage {...messages.folder} /> 
              <FormattedMessage {...messages.folderValue} /> 
            </Typography>
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography sx={{px:'20px', py:'24px',borderBottom:"1px solid",width:'100%' }}>
              <FormattedMessage {...messages.category} /> 
              <FormattedMessage {...messages.categoryValue} /> 
            </Typography>
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography sx={{px:'20px', py:'24px',borderBottom:"1px solid",width:'100%' }}>
              <FormattedMessage {...messages.categoriesForFaculty} /> 
              <FormattedMessage {...messages.categoriesForFacultyValue} /> 
            </Typography>
          </Box>

          <Box>
            <Typography sx={{px:'20px', py:'10px',width:'100%' }}>
              <FormattedMessage {...messages.text1} /> 
            </Typography>
            <Typography sx={{px:'20px', py:'10px',width:'100%' }}>
              <FormattedMessage {...messages.text2} /> 
            </Typography>
            <Typography sx={{px:'20px', py:'10px',width:'100%' }}>
              <FormattedMessage {...messages.text3} /> 
            </Typography>
          </Box>
            {/* <Grid container>
              <Grid item><Typography sx={{display:"flex",justifyContent:'space-between'}}><span>Author:</span> Dr. Kevin B.</Typography></Grid>
              <Grid item><Typography ><span>Status:</span> <NoteAltIcon/> Draft</Typography></Grid>
            </Grid>
            <Grid container>
              <Grid item><Typography ><span>Quest No. </span> 2573/1 <ArrowDropDownCircleOutlinedIcon/></Typography></Grid>
              <Grid item><Typography ><span>Type: </span> MCR <ArrowDropDownCircleOutlinedIcon/></Typography> </Grid>
              <Grid item><Typography ><span>Public: </span> <CheckBoxIcon/></Typography></Grid>
            </Grid> */}

            {/* <Box>
                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                  <Typography ><span>Author:</span> Dr. Kevin B.</Typography> 
                  <Typography ><span>Status:</span> <NoteAltIcon/> Draft</Typography> 
                </Box>
            </Box>
            <Box>
              <Box><Typography ><span>Quest No. </span> 2573/1</Typography> <CheckCircleOutlineIcon/></Box>
              <Box><Typography ><span>Type: </span> MCR</Typography> <CheckCircleOutlineIcon/></Box>
              <Box></Box>
              <Box><Typography ><span>Type: </span> MCR</Typography> <CheckCircleOutlineIcon/></Box>
            </Box> */}
          </Box>
          <Box sx={{ width: '60%', backgroundColor: (theme) => theme.palette.background.paper,borderRadius:'6px',boxShadow:'0px 0px 40px rgba(0, 0, 0, 0.1)' }}>
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
