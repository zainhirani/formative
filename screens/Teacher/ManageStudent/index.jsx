import PageLayout from 'components/PageLayout'
import TableSection from './tableSection'
import SearchSection from './searchSection'


const ManageStudents = () => {
  return (
    <>
        <PageLayout>
            <SearchSection />
            <TableSection />
        </PageLayout>
    </>
  )
}

export default ManageStudents