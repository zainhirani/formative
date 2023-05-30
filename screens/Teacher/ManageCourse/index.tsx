import React from 'react'
import PageLayout from 'components/PageLayout';
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { Box, Input, Button } from '@mui/material';
import SearchSection from '../ManageQuizScreen/searchSection';
import TableSection from '../ManageQuizScreen/tableSection';
import { TextFieldStyled, ButtonWrapper , BoxWrapper} from './Styled';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import GroupedButton from 'components/GroupedButton';
import { ButtonConfig } from "components/GroupedButton/types";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const ManageCourseScreen = () => {
    const config: ButtonConfig[] = [
        {
          key: "addStudents",
          startIcon: <RestoreFromTrashOutlinedIcon />,
          render: () => {
            return <Box>Restore</Box>;
          },
          onClick: () => {
            // console.log("Add Students");
          },
        },
        {
          key: "save",
          startIcon: <ContentCopyIcon />,
          render: () => {
            return <Box>Duplicate</Box>;
          },
          onClick: () => {
            // console.log("Save");
          },
        },
        {
          key: "duplicate",
          startIcon: <DeleteForeverIcon />,
          render: () => {
            return <Box>Delete</Box>;
          },
          onClick: () => {
            // console.log("Duplicate");
          },
        }
    ];
  return (
    <PageLayout title="Courses"  icon={<HelpRoundedIcon />}>
        <Box>
            <SearchSection />
            <TableSection />
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <BoxWrapper display="grid" gridTemplateColumns="repeat(5, 1fr)">
                    <Box gridColumn="span 3">
                        <TextFieldStyled
                            placeholder="Enter Course Name here"
                            variant="outlined"
                            InputProps={{
                                style: { border: 'none',outline: '0px' }
                            }}
                        />
                    </Box>
                    <Box gridColumn="span 2">
                        <ButtonWrapper
                            startIcon={<AddCircleOutlineRoundedIcon />}
                            variant="contained"
                        >
                            Create New
                        </ButtonWrapper>
                    </Box>
                </BoxWrapper>
                <Box>
                    <GroupedButton config={config} />
                </Box>
            </Box>
        </Box>
    </PageLayout>
  )
}

export default ManageCourseScreen;