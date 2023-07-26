// @ts-nocheck
import { useState, useMemo, useEffect } from "react";

import QuizQuestionFormat from "components/QuizQuestionFormat";
import { BoxPaginate, ShowingBox } from "./Styled";
import { Pagination } from "@material-ui/core";
import { useAttemptQuiz } from "providers/Students/How_Am_I_Doing";
import { useAuthContext } from "contexts/AuthContext";
import { useRegisterDetail } from "providers/Auth";

interface QuizAttemptDrawerProps {
  isOpen: boolean;
  onClose: (e?: any) => void;
  quizId: number;
}

const AttemptDrawer = ({ isOpen, onClose, quizId }: QuizAttemptDrawerProps) => {
  const [page, setPage] = useState(1);
  const attemptQuizList = useAttemptQuiz({ quizId: quizId });
  // const {currentUser} = useAuthContext();
  const currentUser = useRegisterDetail();
  useEffect(() => {
    setPage(1);
  }, [quizId]);

  const totalRows = attemptQuizList?.data?.questions?.length;
  const totalPages = Math.ceil(totalRows ? totalRows / 1 : 1);
  const paginatedRows = attemptQuizList?.data?.questions?.slice(
    (page - 1) * 1,
    page * 1,
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };
  const filterOptions = useMemo(() => {
    if (paginatedRows?.[0]?.option) {
      const jsonData = JSON.parse(paginatedRows?.[0]?.option);
      return jsonData.map((item: any) => ({
        value: item.key,
        optionText: item.value,
      }));
    }
  }, [paginatedRows]);
  console.log(
    filterOptions?.findIndex(
      (item: { value: string }) =>
        item.value ===
        JSON.parse(
          paginatedRows?.[0]?.answer ? paginatedRows?.[0]?.answer : "",
        ),
    ),
    "filterOptions",
  );
  // console.log(paginatedRows?.[0], "paginatedRows");

  return (
    <>
      <QuizQuestionFormat
        question={paginatedRows?.[0]}
        // question={paginatedRows?.[0]?.question}
        quizOptions={filterOptions}
        title={`Quiz review for ${currentUser?.data?.username} on ${attemptQuizList.data?.course[0].course_name}`}
        questionContext={paginatedRows?.[0]?.detail}
        actualQuestion={paginatedRows?.[0]?.title}
        isOpen={isOpen}
        onClose={onClose}
        answerStats={[]}
        isHeader={false}
        score={paginatedRows?.[0]?.score}
        timeSpent={paginatedRows?.[0]?.averageTime}
        loading={attemptQuizList?.isFetching}
        media={paginatedRows?.[0]?.media}
        disable={true}
        isShowScoreBar
        quizAnswers={paginatedRows?.[0]?.answer}
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
            Showing {page} of {attemptQuizList?.data?.questions?.length}
          </ShowingBox>
        </BoxPaginate>
      </QuizQuestionFormat>
    </>
  );
};

export default AttemptDrawer;
