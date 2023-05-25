import React from 'react'
import PageLayout from 'components/PageLayout'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchSection from './searchSection';
import TableSection from './tableSection';

const ManageQuizScreen = () => {
  return (
    <PageLayout title="All Quiz" icon={<ArrowForwardIcon/>}>
      <div>
        <SearchSection />
        <TableSection />
      </div>
    </PageLayout>
  )
}

export default ManageQuizScreen