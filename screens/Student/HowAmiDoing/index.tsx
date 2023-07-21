import React, { useEffect, useState } from "react";
import SearchSection from "./searchSection";
import TableSection from "./tableSection";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { useQuizResultsListing } from "providers/Students/How_Am_I_Doing";
import Head from "next/head";

const LIMIT = 10;
const HowAmiDoingScreen = () => {
  const [beforeDatevalue, setBeforeDatevalue] = useState<any>(null);
  const [afterDatevalue, setAfterDatevalue] = useState<any>(null);
  const [searchChange, setSearchChange] = React.useState<any>(null);
  const [page, setPage] = useState(1);
  const [course, setCourse] = useState<any>("");

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  }

  console.log(formatDate(beforeDatevalue || ""), "formatDateformatDate");

  const quizResultListing = useQuizResultsListing({
    ...(searchChange && { quizName: searchChange }),
    courseId: course?.value,
    Limit: LIMIT,
    Page: page,
    ...(afterDatevalue && { afterDate: formatDate(afterDatevalue || "") }),
    ...(beforeDatevalue && { beforeDate: formatDate(beforeDatevalue || "") }),
    // beforeDate: beforeDatevalue && formatDate(beforeDatevalue || ""),
  });
  return (
    // <PageLayout>
    <>
      <Head>
        <title>How Am I doing</title>
      </Head>
      <SearchSection
        beforeDatevalue={beforeDatevalue}
        setBeforeDatevalue={setBeforeDatevalue}
        afterDatevalue={afterDatevalue}
        setAfterDatevalue={setAfterDatevalue}
        course={course}
        setCourse={setCourse}
        setSearchChange={setSearchChange}
      />
      <TableSection
        quizData={quizResultListing?.data?.data || []}
        loading={quizResultListing.isFetching}
        page={page}
        handlePageChange={(_: any, v: React.SetStateAction<number>) =>
          setPage(v)
        }
        //@ts-ignore
        totalCount={quizResultListing?.data?.count}
      />
    </>
    // </PageLayout>
  );
};

export default HowAmiDoingScreen;
