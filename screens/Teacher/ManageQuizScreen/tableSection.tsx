import React, { useEffect } from "react";
import { BoxWrapper } from "./Styled";
import {
  columnsManageQuiz,
  pageSizeManageQuiz,
} from "mock-data/Teacher/ManageQuiz";
import CustomDataGrid from "components/CustomDataGrid";
import { useTeacherQuizListing } from "providers/Teacher/TeacherQuiz";

const TableSection = (props: any) => {
  const { searchChange, selectCourse, selectFolder, selectStatus } = props;
  const {
    data: quizList,
    refetch,
    isFetching,
  } = useTeacherQuizListing({
    courseId: selectCourse,
    folderId: selectFolder,
    status: selectStatus,
    ...(searchChange && { SearchBy: searchChange }),
  });

  useEffect(() => {
    refetch({
      courseId: selectCourse,
      folder: selectFolder,
      status: selectStatus,
      ...(searchChange && { SearchBy: searchChange }),
    });
  }, [searchChange, selectCourse, selectFolder, selectStatus]);

  return (
    <BoxWrapper>
      {/* @ts-ignore */}
      <CustomDataGrid
        rows={quizList?.data || []}
        columns={columnsManageQuiz}
        pageSizeData={pageSizeManageQuiz}
        type={"1"}
        isCheckbox={false}
        loading={isFetching}
      />
    </BoxWrapper>
  );
};

export default TableSection;
