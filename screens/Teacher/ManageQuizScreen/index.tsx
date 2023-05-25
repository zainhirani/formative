import React from 'react'
import PageLayout from 'components/PageLayout'
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import SearchSection from './searchSection';
import TableSection from './tableSection';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic'
import Loader from 'components/Loader';

const PageLayout = dynamic(() => import("components/PageLayout"), {
      ssr: false,
      loading: () => <Loader />,
});

const ManageQuizScreen = () => {
  return (
    <PageLayout title="All Quiz" icon={<HelpRoundedIcon />}>
      <Box>
        <SearchSection />
        <TableSection />
      </Box>
    </PageLayout>
  )
}

export default ManageQuizScreen
