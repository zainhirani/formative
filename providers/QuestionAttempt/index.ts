import {
    UseMutationResult,
    UseQueryResult,
    useMutation,
    useQuery,
    useQueryClient,
  } from "react-query";
  import * as api from "./api";
  import { QuestionAttempt } from "./types";


  const KEY = "AttemptQuestion";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}

//Detail
export function useStudentAttempQuestion(
    props: QuestionAttempt.StudentListingProps,
  ): UseQueryResult<QuestionAttempt.StudentListingResponse> {
    return useQuery(getKeyFromProps(props, "DETAIL"), () => api.studentAttemptListing(props),{enabled:
    !!props.userId && !!props.quizId});
  }