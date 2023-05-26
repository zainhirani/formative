import React, { useState  } from 'react'
import { Pagination,Grid,IconButton,Box  } from '@mui/material';
import { DataGrid,GridColDef } from '@mui/x-data-grid'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Image from 'next/image';
import editSvg from '../../../public/quiz/edit.svg';
import copySvg from '../../../public/quiz/copy.svg';
import circleLeftSvg from '../../../public/quiz/circle-left.svg';
import trashSvg from '../../../public/quiz/trash.svg';
import { BoxPaginate, BoxWrapper } from './Styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import FormattedMessage from 'theme/FormattedMessage';
import messages from './messages';


const columns: GridColDef[] = [

  {
    field: 'quizNoSort',
    headerName: 'Quiz No. sort',
    minWidth: 180,
    flex: 1,
    renderCell: (params) => {
      const num = params.formattedValue;
      return (
        <Grid container spacing={3} alignItems="center">
            <Grid item xs>
              <Box sx={{
                display: "flex",
                alignItems: 'center',
                gap: '2px',
                color: (theme) => theme.palette.text.primary,
                fontWeight: '700'

              }}>
                {num} <ArrowForwardRoundedIcon style={{fontSize: '20px'}} />
              </Box>
            </Grid>
        </Grid>
        
      );
    },
  },
  {
    field: 'name',
    headerName: 'Name',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'course',
    headerName: 'Course',
     minWidth: 150,
    flex: 1,
  },
  {
    field: 'folder',
    headerName: 'Folder',
     minWidth: 150,
    flex: 1,
  },
  {
    field: 'status',
    headerName: 'Status',
     minWidth: 150,
    flex: 1,
    renderCell: (params) => {
      const status = params.formattedValue;
      return (
        <Grid container spacing={3} alignItems="center">
          {status == 'Draft'? (
            <Grid item xs>
              <Box sx={{
                display: "flex",
                alignItems: 'center',
                gap: '2px',
                color: (theme) => theme.additionalColors?.primaryYellow,
              }}>
                <SaveAsIcon  style={{fontSize: '20px'}}/> <FormattedMessage {...messages.statusDraft} />
                </Box>
            </Grid>
          ) : (
            <Grid item xs>
              <Box sx={{
                display: "flex",
                alignItems: 'center',
                gap: '2px',
                color: (theme) => theme.additionalColors?.primaryGreen,
              }}>
                <CheckCircleIcon  style={{fontSize: '20px'}}/> <FormattedMessage {...messages.statusCompleted} />
                </Box>
            </Grid>
          )}
        </Grid>
        
      );
    },
  },
  {
    field: 'difficulty',
    headerName: 'Difficulty',
     minWidth: 200,
    flex: 1,
  },
  {
    field: 'std_difficulty',
    headerName: 'Std. Difficulty',
     minWidth: 180,
    flex: 1,
  },
  {
    field: 'quick_actions',
    headerName: 'Quick Actions',
    width: 200,
    headerClassName: 'super-app-theme--header',
    renderCell: (params) => {
      return (
        <Grid container spacing={3}>
          <Grid item xs>
            <IconButton>
              <Image
                alt="quiz-logo"
                src={editSvg}
              />
            </IconButton>
            <IconButton>
              <Image
                alt="quiz-logo"
                src={copySvg}
              />
            </IconButton>
            <IconButton>
              <Image
                alt="quiz-logo"
                src={circleLeftSvg}
              />
            </IconButton>
            <IconButton>
              <Image
                alt="quiz-logo"
                src={trashSvg}
              />
            </IconButton>
          </Grid>
        </Grid>
        
      );
    },
  },
];

const rows = [
  {
    id: 1,
    quizNoSort: 306, 
    name: 'Team 2023', 
    course: "Cannabis 2023", 
    folder: "/ Daily", 
    status: "Completed", 
    difficulty: "Cannabis 2023" , 
    std_difficulty: "Cannabis 2023" , 
    quick_actions: "Cannabis 2023"  
  },
  {
    id: 2,
    quizNoSort: 307, 
    name: 'Team 2023', 
    course: "Cannabis 2023", 
    folder: "/ Daily", 
    status: "Completed", 
    difficulty: "Cannabis 2023" , 
    std_difficulty: "Cannabis 2023" , 
    quick_actions: "Cannabis 2023"  
  },
  {
    id: 3,
    quizNoSort: 308, 
    name: 'Team 2023', 
    course: "Cannabis 2023", 
    folder: "/ Daily", 
    status: "Completed", 
    difficulty: "Cannabis 2023" , 
    std_difficulty: "Cannabis 2023" , 
    quick_actions: "Cannabis 2023"  
  },
  {
    id: 4,
    quizNoSort: 309, 
    name: 'Team 2023', 
    course: "Cannabis 2023", 
    folder: "/ Daily", 
    status: "Completed", 
    difficulty: "Cannabis 2023" , 
    std_difficulty: "Cannabis 2023" , 
    quick_actions: "Cannabis 2023"  
  },
  {
    id: 5,
    quizNoSort: 310, 
    name: ' 1Team 2023 ', 
    course: "2Cannabis 2023", 
    folder: "/ Daily", 
    status: "Completed", 
    difficulty: "Cannabis 2023" , 
    std_difficulty: "Cannabis 2023" , 
    quick_actions: "Cannabis 2023"  
  },
  {
    id: 6,
    quizNoSort: 311, 
    name: 'Team 2023', 
    course: "4Cannabis 2023", 
    folder: "/ Daily", 
    status: "Draft", 
    difficulty: "Cannabis 2023" , 
    std_difficulty: "Cannabis 2023" , 
    quick_actions: "Cannabis 2023"  
  },
  {
    id: 7,
    quizNoSort: 311, 
    name: 'Team 2023', 
    course: "4Cannabis 2023", 
    folder: "/ Daily", 
    status: "Draft", 
    difficulty: "Cannabis 2023" , 
    std_difficulty: "Cannabis 2023" , 
    quick_actions: "Cannabis 2023"  
  },
  {
    id: 8,
    quizNoSort: 311, 
    name: 'Team 2023', 
    course: "4Cannabis 2023", 
    folder: "/ Daily", 
    status: "Completed", 
    difficulty: "Cannabis 2023" , 
    std_difficulty: "Cannabis 2023" , 
    quick_actions: "Cannabis 2023"  
  },
  {
    id: 9,
    quizNoSort: 311, 
    name: 'Team 2023', 
    course: "4Cannabis 2023", 
    folder: "/ Daily", 
    status: "Draft", 
    difficulty: "Cannabis 2023" , 
    std_difficulty: "Cannabis 2023" , 
    quick_actions: "Cannabis 2023"  
  },
  {
    id: 10,
    quizNoSort: 311, 
    name: 'Team 2023', 
    course: "4Cannabis 2023", 
    folder: "/ Daily", 
    status: "Completed", 
    difficulty: "Cannabis 2023" , 
    std_difficulty: "Cannabis 2023" , 
    quick_actions: "Cannabis 2023"  
  },
  {
    id: 11,
    quizNoSort: 311, 
    name: 'Team 2023', 
    course: "4Cannabis 2023", 
    folder: "/ Daily", 
    status: "Draft", 
    difficulty: "Cannabis 2023" , 
    std_difficulty: "Cannabis 2023" , 
    quick_actions: "Cannabis 2023"  
  },
  {
    id: 12,
    quizNoSort: 311, 
    name: 'Team 2023', 
    course: "4Cannabis 2023", 
    folder: "/ Daily", 
    status: "Draft", 
    difficulty: "Cannabis 2023" , 
    std_difficulty: "Cannabis 2023" , 
    quick_actions: "Cannabis 2023"  
  },
  {
    id: 13,
    quizNoSort: 311, 
    name: 'Team 2023', 
    course: "4Cannabis 2023", 
    folder: "/ Daily", 
    status: "Completed", 
    difficulty: "Cannabis 2023" , 
    std_difficulty: "Cannabis 2023" , 
    quick_actions: "Cannabis 2023"  
  },
];



const TableSection = () => {
  const [page, setPage] = useState(1);

  const pageSizeData: number = 12;
  const totalRows = rows.length;
  const totalPages = Math.ceil(totalRows / pageSizeData);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const getRowHeight = () => {
    return 50;
  };
  
  const paginatedRows = rows.slice((page - 1) * pageSizeData, page * pageSizeData);

    return(
      <BoxWrapper
    >
          <Grid container>
            <Grid item xs={12}> 
              <DataGrid
                pagination
                hideFooter
                // pageSize={pageSizeData}
                rows={paginatedRows}
                columns={columns}
                getRowHeight={getRowHeight}
                disableColumnMenu
                disableColumnSelector
                disableDensitySelector
                disableRowSelectionOnClick
              />
            </Grid>
            <BoxPaginate>
              <Grid item xs={6}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  variant="outlined"
                  shape="rounded"
                  className='customPagination'
                />
              </Grid>
              <Grid item xs={6} className="showing-text">
                Showing {paginatedRows.length} of {rows.length}
              </Grid>
            </BoxPaginate>
          </Grid>
        </BoxWrapper>
    )
}

export default TableSection