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
import CustomDataGrid from 'components/CustomDataGrid';
import { columnsManageCourse, pageSizeManageCourse, rowsManageCourse } from 'mock-data/Teacher/ManageCourse';
import { useSnackbar } from "notistack";

const ManageCourseScreen = () => {
  const { enqueueSnackbar } = useSnackbar();
    const config: ButtonConfig[] = [
        {
          key: "addStudents",
          startIcon: <RestoreFromTrashOutlinedIcon />,
          render: () => {
            return <Box>Restore</Box>;
          },
          onClick: () => {
            // console.log("Add Students");
              enqueueSnackbar("hello World", {
                variant: "success",
              });
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
            enqueueSnackbar("Delete World", {
              variant: "error",
            });
          },
        }
    ];
  return (
    <PageLayout title="Courses"  icon={<HelpRoundedIcon />}>
        <Box>
            <SearchSection />
            <CustomDataGrid
              rows={rowsManageCourse}
              columns={columnsManageCourse}
              pageSizeData={pageSizeManageCourse}
              type={"1"}
            />
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