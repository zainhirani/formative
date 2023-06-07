import React, {useState} from 'react'
import PageLayout from 'components/PageLayout'
import TableSection from './tableSection'
import SearchSection from './searchSection'



const ManageStudents = () => {
  // const [isChecked, setIsChecked] = useState([])
  
  const [checked, setChecked] = useState(false);

  console.log(checked,'checked custom');
  return (
    <>
        {/* <PageLayout> */}
            <SearchSection checked={checked} />
            <TableSection setChecked={setChecked} />
        {/* </PageLayout> */}
    </>
  )
}

export default ManageStudents