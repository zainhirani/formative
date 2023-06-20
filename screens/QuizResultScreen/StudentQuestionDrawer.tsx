import { useState, useMemo } from "react";

import QuizQuestionFormat from "components/QuizQuestionFormat";
import { useStudentAttempQuestion } from "providers/QuestionAttempt";
import { useRouter } from "next/router";
import { BoxPaginate, ShowingBox } from "./Styled";
import { Pagination } from "@material-ui/core";

interface StudentQuestionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  stdId?: string;
  quizId: string;
}

const StudentQuestionDrawer = ({
  isOpen,
  onClose,
  stdId,
  quizId,
}: StudentQuestionDrawerProps) => {
  const [page, setPage] = useState(1);
  const studentQuestion = useStudentAttempQuestion({
    quizId,
    userId: stdId,
  });

  const totalRows = studentQuestion?.data?.length;
  const totalPages = Math.ceil(totalRows ? totalRows / 1 : 1);
  const paginatedRows = studentQuestion?.data?.slice((page - 1) * 1, page * 1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };

  const filterOptions = useMemo(() => {
    if (paginatedRows?.[0]?.question?.option) {
      const jsonData = JSON.parse(paginatedRows?.[0]?.question?.option);
      return jsonData.map((item: any) => ({
        value: item.key,
        optionText: item.value,
      }));
    }
  }, [paginatedRows]);

  return (
    <>
      <QuizQuestionFormat
        quizOptions={filterOptions}
        title="Quiz review for Zakira Akbari on Group Final"
        questionContext={paginatedRows?.[0]?.question?.detail}
        actualQuestion={paginatedRows?.[0]?.question?.title}
        isOpen={isOpen}
        onClose={onClose}
        answerStats={[]}
        isHeader={false}
        score={paginatedRows?.[0]?.score}
        timeSpent={paginatedRows?.[0]?.submission_duration}
        loading={studentQuestion?.isFetching}
        media={paginatedRows?.[0]?.question?.media}

        disable={true}
        isShowScoreBar
        isChecked={filterOptions?.findIndex(
          (item: { value: string }) =>
            item.value ===
            JSON.parse(
              paginatedRows?.[0]?.question?.answer
                ? paginatedRows?.[0]?.question?.answer
                : "",
            ),
        )}
      >
        <BoxPaginate>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            className="customPagination"
          />
          <ShowingBox>
            Showing {page} of {studentQuestion?.data?.length}
          </ShowingBox>
        </BoxPaginate>
      </QuizQuestionFormat>
    </>
  );
};

export default StudentQuestionDrawer;
