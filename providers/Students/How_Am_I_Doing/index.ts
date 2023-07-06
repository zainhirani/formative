import {
  UseQueryResult,
  useQuery,
} from "react-query";
import * as api from "./api";
import { QuizResultsCourse } from "./types";

const KEY = "StudentsQuizResults";

const ATTEMPTQUIZKEY = "AttemptQuizList";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}

export function getKeyFromAttemptQuizProps(
  props: any,
  type: "LISTING" | "DETAIL",
): string[] {
  const key = [ATTEMPTQUIZKEY, type];
  key.push(props);
  return key;
}

//CourseListing
export function useQuizResultsCourseListing(
  props: QuizResultsCourse.ListingProps,
): UseQueryResult<QuizResultsCourse.ListingResponse> {
  return useQuery(getKeyFromProps(props, "LISTING"), () => api.listing(props));
}

//QuizResultListing
export function useQuizResultsListing(
  props: QuizResultsCourse.QuizResultListingProps,
): UseQueryResult<QuizResultsCourse.QuizResultListingResponse> {
  return useQuery(getKeyFromProps(props, "LISTING"), () => api.quizReslutListing(props));
}

//AttemptQuiz
export function useAttemptQuiz(
  props: QuizResultsCourse.AttemptQuizProps,
): UseQueryResult<QuizResultsCourse.AttemptQuizResponse> {
  return useQuery(getKeyFromAttemptQuizProps(props, "LISTING"), () =>
    api.attemptQuizListing(props));
}
