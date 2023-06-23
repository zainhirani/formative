//Quiz API Integration
// @ts-nocheck
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
import { enqueueSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import APP_ROUTES from 'constants/RouteConstants';


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


//Teacher Quiz Listing
export function useTeacherQuizListing(
  props?:any,
): UseQueryResult<Quiz.TeacherQuizListingResponse> {
  return useQuery(QUERY_KEYS.QUIZ, () => api.allTeacherQuiz(props));
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
  props?:any,
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
  id?:any,
  isScoringId?:any
): UseQueryResult<Quiz.ScoringByIDResponse> {
  return useQuery("QUERY_KEYS.SCORING_LISTING_ID", () => api.getScoringByID(id), {enabled:isScoringId});
}

// Distribute
export function useQuizDistribute(
  props: any,
  // props: Quiz.QuizDistributeProps,
): UseMutationResult<
  Quiz.QuizDistributeResponse,
  {
    message?: string;
  },
  Quiz.QuizDistributeMutationPayload
> {
  const queryClient = useQueryClient();
  
  return useMutation((payload) => api.quizDistribute({ ...props,data: payload }), {
    mutationKey: QUERY_KEYS.QUIZ_DISTRIBUTE,
    onSuccess: () => {
      // console.log('distribute success');
      // queryClient.invalidateQueries(['Students']);
    },
    retry: 0,
  });
}



// Save Quiz
export function useQuizSave(
  props: any,
  // props: Quiz.QuizSaveProps,
): UseMutationResult<
  Quiz.QuizSaveResponse,
  {
    message?: string;
  },
  Quiz.QuizSaveMutationPayload
> {
  const queryClient = useQueryClient();
  
  return useMutation((payload) => api.quizSave({ ...props, data:payload }), {
    mutationKey: QUERY_KEYS.QUIZ_SAVE,
    onSuccess: (data) => {
      // const router = useRouter();
      enqueueSnackbar("Quiz Created Successfully", {
        variant: "success",
        autoHideDuration: 3000,
      });
      // router.push(APP_ROUTES.MANAGE_QUIZ)
      console.log('Save success');
      // queryClient.invalidateQueries(['Students']);
    },
    onError:(error) => {
      enqueueSnackbar(error?.message, {
        variant: "error",
        autoHideDuration: 3000,
      });
      console.log(error?.message,'onError success');
      // queryClient.invalidateQueries(['Students']);
    },
    retry: 0,
  });
}


// Save Quiz Edit
export function useQuizSaveEdit(
  props: any,
  // props: Quiz.QuizSaveEditProps,
): UseMutationResult<
  Quiz.QuizSaveEditResponse,
  { message?: string; },
  Quiz.QuizSaveEditMutationPayload
> {
  return useMutation((payload) => api.quizSaveEdit({ ...props, data:payload }), {
    mutationKey: QUERY_KEYS.QUIZ_SAVE,
    onSuccess: (data) => {
      enqueueSnackbar("Quiz Updated Successfully", {
        variant: "success",
        autoHideDuration: 3000,
      });
    },
    onError:(error) => {
      enqueueSnackbar(error?.message, {
        variant: "error",
        autoHideDuration: 3000,
      });
    },
    retry: 0,
  });
}
