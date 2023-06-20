//Quiz API Integration
import React,{useMemo} from 'react'
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import * as api from "./api";
import { Quiz } from "./types";
import QUERY_KEYS from 'queries/QueriesKeyConstant';

const KEY = "Quiz";

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

//Quiz Get By Id
export function useQuizById(
  props?: Quiz.QuizByIdProps,
): UseQueryResult<Quiz.QuizByIdResponse> {
  return useQuery(QUERY_KEYS.QUIZ_BY_ID, () => api.allTeacherQuizById(props), {
    enabled:Boolean(props?.id)
  });
}

//Quiz No
export function useQuizNo(
  props?: Quiz.QuizNoProps,
): UseQueryResult<Quiz.QuizNoResponse> {
  return useQuery(QUERY_KEYS.QUIZ_NO, () => api.allTeacherQuizNo(props));
}

//Course Listing
export function useCourseListing(
  props?: Quiz.CourseListingProps,
): UseQueryResult<Quiz.CourseListingResponse> {
  return useQuery(QUERY_KEYS.COURSES_LISTING, () => api.allCourses(props));
}


//Folder Listing
export function useFoldersListing(
  props?: Quiz.FolderListingProps,
): UseQueryResult<Quiz.FolderListingResponse> {
  return useQuery(QUERY_KEYS.FOLDER_LISTING, () => api.allFolders(props));
}

//Scoring Listing
export function useScoringListing(
  props?: Quiz.ScoringListingProps,
): UseQueryResult<Quiz.ScoringListingResponse> {
  return useQuery(QUERY_KEYS.SCORING_LISTING, () => api.allScoring(props));
}

//Scoring By ID
export function useScoringByID(
  props?: Quiz.ScoringByIDProps,
): UseQueryResult<Quiz.ScoringByIDResponse> {
  return useQuery("QUERY_KEYS.SCORING_LISTING_id", () => api.getScoringByID(props),{
    enabled:Boolean(props?.scoringId)
  });
}