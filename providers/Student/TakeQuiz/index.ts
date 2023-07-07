//Quiz API Integration
// @ts-nocheck
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from "react-query";
import * as api from "./api";
import { Quiz } from "./types";
import QUERY_KEYS from 'queries/QueriesKeyConstant';


const KEY = "Take Quiz";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}
export function getStatsProviderKey(
  arg0: { userId: number | undefined },
  arg1: string,
): import("react-query").InvalidateQueryFilters<unknown> | undefined {
  throw new Error("Function not implemented.");
}
export function getFormProviderKey(
  arg0: { id: string | undefined },
  arg1: string,
): import("react-query").InvalidateQueryFilters<unknown> | undefined {
  throw new Error("Function not implemented.");
}


//Take Quiz Listing
export function useTakeQuizListing(
  props?:any,
): UseQueryResult<Quiz.TakeQuizListingResponse> {
  return useQuery(QUERY_KEYS.TAKE_QUIZ, () => api.allTakeQuiz(props));
}

//Quiz Get By Id
export function useQuesQuizById(
  props?: Quiz.QuesQuizByIdProps,
  onSuccess?:(data: Quiz.QuesQuizByIdResponse) => void,
  onError?:any 
): UseQueryResult<Quiz.QuesQuizByIdResponse> {
  return useQuery(QUERY_KEYS.QUES_QUIZ_BY_ID, () => api.allTakeQuesQuizById(props),{
    enabled:Boolean(props?.id),
    onSuccess: onSuccess,
    onError:onError
  });
}

//Quiz No
export function useQuizNo(
  props?: Quiz.QuizNoProps,
): UseQueryResult<Quiz.QuizNoResponse> {
  return useQuery(QUERY_KEYS.QUIZ_NO, () => api.allTakeQuizNo(props));
}

//Course Listing
export function useCourseListing(
  props?:any,
): UseQueryResult<Quiz.CourseListingResponse> {
  return useQuery(QUERY_KEYS.COURSES_LISTING, () => api.allCourses(props));
}

//Question Attepmt
export function useQuesAttempt(
  props?: Quiz.QuestionAttemptProps,
  onSuccess?: (data: any) => void 
): UseMutationResult<
  Quiz.QuestionAttemptResponse,
  {
    message?: string;
  },
> {
  const mutation = useMutation((payload) => api.questionAttempt(payload), {
    mutationKey: `${KEY} | QuestionAttempt`,
    onSuccess,
    retry: 0,
  });

  return mutation;
}