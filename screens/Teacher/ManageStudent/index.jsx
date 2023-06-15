import React, {useState} from 'react'
import PageLayout from 'components/PageLayout'
import TableSection from './tableSection'
import SearchSection from './searchSection'



const ManageStudents = () => {
  // const [isChecked, setIsChecked] = useState([])
  const [program, setProgram] = useState()
  const [yearOfGraduation, setYearOfGraduation] = useState()
  const [checked, setChecked] = useState(false);
  const [selectNewCourse, setSelectNewCourse] = useState()

  return (
    <>
        {/* <PageLayout> */}
            <SearchSection setCourse={setSelectNewCourse} checked={checked} setProgram={setProgram} setYearOfGraduation={setYearOfGraduation} />
            <TableSection isCheckbox={!!selectNewCourse} setChecked={setChecked} program={program} yearOfGraduation={yearOfGraduation}/>
        {/* </PageLayout> */}
    </>
  )
}

export default ManageStudents