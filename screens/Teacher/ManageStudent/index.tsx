import React, { useState } from "react";
import PageLayout from "components/PageLayout";
import TableSection from "./tableSection";
import SearchSection from "./searchSection";

const ManageStudents = () => {
  // const [isChecked, setIsChecked] = useState([])
  const [program, setProgram] = useState();
  const [yearOfGraduation, setYearOfGraduation] = useState();
  const [checked, setChecked] = useState(false);
  const [selectNewCourse, setSelectNewCourse] = useState("");
  const [userId, setUserId] = useState([]);
  const [addCourse , setAddCourse] = useState("")
  

  return (
    <>
      {/* <PageLayout> */}
      <SearchSection
        selectedCourse={selectNewCourse}
        userIds={userId}
        setCourse={setSelectNewCourse}
        checked={checked}
        setProgram={setProgram}
        setYearOfGraduation={setYearOfGraduation}
        addCourse={addCourse}
        setAddCourse={setAddCourse}
      />
      <TableSection
        setUserId={setUserId}
        selectNewCourse={selectNewCourse?.label}
        isCheckbox={selectNewCourse||selectNewCourse?.label}
        setChecked={setChecked}
        program={program}
        yearOfGraduation={yearOfGraduation}
      />
      {/* </PageLayout> */}
    </>
  );
};

export default ManageStudents;
