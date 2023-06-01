import { Box } from '@mui/material';
import { ButtonConfig } from 'components/GroupedButton/types';
import PageLayout from 'components/PageLayout';
import { useSnackbar } from 'notistack';
import React, {useState} from 'react'
import SearchSection from '../ManageQuizScreen/searchSection';
import CustomDataGrid from 'components/CustomDataGrid';
import { BoxWrapper, TableWrapper } from 'screens/Teacher/ManageCourse/Styled';
import { TextFieldStyled } from '../ManageCourse/Styled';
import { ButtonWrapper } from 'components/GroupedButton/Styled';
import GroupedButton from 'components/GroupedButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { columnsManageCourse, pageSizeManageCourse, rowsManageCourse } from 'mock-data/Teacher/CourseRestore';
import { useRouter } from 'next/router';
import SearchBar from '../ManageCourse/searchBar';

const CourseRestore = () => {
  const router = useRouter();

  const [checked, setChecked] = useState(false);
  console.log(checked,'checked custom');

  const { enqueueSnackbar } = useSnackbar();
    const config: ButtonConfig[] = [
        {
          key: "addStudents",
          startIcon: <CancelOutlinedIcon />,
          render: () => {
            return <Box>Cancel</Box>;
          },
          onClick: () => {
            router.push("/teacher/courses")
            // console.log("Add Students");
          },
        },
        {
          key: "save",
          startIcon: <ContentCopyIcon />,
          disabled: true,
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
          disabled: true,
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
            <SearchBar />
            <TableWrapper>
              <CustomDataGrid
                rows={rowsManageCourse}
                columns={columnsManageCourse}
                pageSizeData={pageSizeManageCourse}
                type={"1"}
                isCheckbox={true}
              />
            </TableWrapper>
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
                            Create Course
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

export default CourseRestore