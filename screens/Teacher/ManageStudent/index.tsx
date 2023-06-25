import React, { useEffect, useMemo, useState } from "react";
import PageLayout from "components/PageLayout";
import TableSection from "./tableSection";
import SearchSection from "./searchSection";
import { useStudentListing } from "providers/Teacher/student";

const LIMIT = 10;
const ManageStudents = () => {
  const [program, setProgram] = useState();
  const [yearOfGraduation, setYearOfGraduation] = useState();
  const [checked, setChecked] = useState(false);
  const [selectNewCourse, setSelectNewCourse] = useState("");
  const [userId, setUserId] = useState([]);
  const [addCourse, setAddCourse] = useState("");
  const [page, setPage] = useState(1);
  const studentListing = useStudentListing({
    yop: yearOfGraduation,
    program: program,
    Limit: LIMIT,
    Page: page,
  });
  const filteredData = useMemo(() => {
    return studentListing.data?.data
      .filter((item: any) =>
        item.studentsCourses?.some(
          //@ts-ignore
          (course: any) => course.course_name === selectNewCourse?.label,
        ),
      )
      .map((item: any) => item.id);
    //@ts-ignore
  }, [studentListing.data?.data, selectNewCourse?.label]);
  //@ts-ignore
  const [checkedIds, setCheckedIds] = useState<number[]>(filteredData);
  console.log(checkedIds, "checked");

  useEffect(() => {
    //@ts-ignore
    setCheckedIds(filteredData);
  }, [filteredData]);

  const handleSelection = (ids: number[]) => {
    setCheckedIds(ids);
  };

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
        //@ts-ignore
        selectNewCourse={selectNewCourse?.label}
        //@ts-ignore
        isCheckbox={selectNewCourse || selectNewCourse?.label}
        setChecked={setChecked}
        program={program}
        yearOfGraduation={yearOfGraduation}
        studentData={studentListing?.data?.data || []}
        getRowId={(row: any) => row.id}
        loading={studentListing.isFetching}
        handleSelection={handleSelection}
        page={page}
        handlePageChange={(_: any, v: React.SetStateAction<number>) =>
          setPage(v)
        }
        totalCount={studentListing?.data?.count}
        checkedId={checkedIds}
      />
      {/* </PageLayout> */}
    </>
  );
};

export default ManageStudents;
