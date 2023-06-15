import React, {useState} from 'react'
import PageLayout from 'components/PageLayout'
import TableSection from './tableSection'
import SearchSection from './searchSection'



const ManageStudents = () => {
  // const [isChecked, setIsChecked] = useState([])
  const [program, setProgram] = useState()
  const [yearOfGraduation, setYearOfGraduation] = useState()
  const [checked, setChecked] = useState(false);
  const [selectNewCourse, setSelectNewCourse] = useState();
  const [userId,setUserId] = useState([])

  return (
    <>
        {/* <PageLayout> */}
            <SearchSection userIds={userId} selectedCourse={selectNewCourse} setCourse={setSelectNewCourse} checked={checked} setProgram={setProgram} setYearOfGraduation={setYearOfGraduation} />
            <TableSection setUserId={setUserId} isCheckbox={!!selectNewCourse} setChecked={setChecked} program={program} yearOfGraduation={yearOfGraduation}/>
        {/* </PageLayout> */}
    </>
  )
}

export default ManageStudents