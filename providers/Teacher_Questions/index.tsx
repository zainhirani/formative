import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addQuestion,
  deleteQuestion,
  duplicateQuestion,
  editQuestion,
  getCategories,
  getCategoriesFaculties,
  getFolders,
  getQuestionById,
  getQuestionCountId,
  getQuestions,
  postCategory,
  getFaculties,
} from "./api";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import APP_ROUTES from "constants/RouteConstants";

const KEY = "Teacher__Questions";

export function getKeyFromProps(
  props: any,
  type:
    | "LISTING"
    | "DETAIL"
    | "DUPLICATE_QUESTION"
    | "TEACHER_QUESTIONS_LISTINGS"
    | "DELETE_QUESTION"
    | "ADD_QUESTION"
    | "GET_FOLDERS"
    | "GET_CATEGORIES"
    | "GET_FACULTY"
    | "GET_QUESTION_COUNT_ID"
    | "POST_CATEGORY"
    | "TEACHER__GET_FACULTIES",
): string[] {
  const key = [KEY, type];
  if (props) {
    key.push(props);
  }
  return key;
}

export const useGetFolders = () => {
  return useQuery({
    queryFn: getFolders,
    queryKey: getKeyFromProps(null, "GET_FOLDERS"),
  });
};

export const useGetCategories = () => {
  return useQuery({
    queryFn: getCategories,
    queryKey: getKeyFromProps(null, "GET_CATEGORIES"),
  });
};

export const useGetFaculties = () => {
  return useQuery({
    queryFn: getFaculties,
    queryKey: getKeyFromProps(null, "TEACHER__GET_FACULTIES"),
  });
};

export const useGetQuestionCountId = () => {
  return useQuery({
    queryFn: getQuestionCountId,
    queryKey: getKeyFromProps(null, "GET_QUESTION_COUNT_ID"),
  });
};

export const useQuestionsListing = (props: any) => {
  return useQuery(getKeyFromProps(props, "TEACHER_QUESTIONS_LISTINGS"), () =>
    getQuestions(props),
  );
};

export const useQuestionDetails = (props: any) => {
  return useQuery(
    getKeyFromProps(props, "DETAIL"),
    () => getQuestionById(props.questionId),
    { enabled: !!props.questionId },
  );
};

export const useDeleteQuestion = (questionId: any) => {
  const client = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation((questionId) => deleteQuestion(questionId), {
    mutationKey: getKeyFromProps(questionId, "DELETE_QUESTION"),
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [KEY],
      });
    },
    onError: (err: any) => {
      enqueueSnackbar(err.message, {
        autoHideDuration: 1500,
        variant: "error",
      });
    },
    retry: 1,
  });
};

export const useAddQuestion = (payload: any) => {
  const client = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  return useMutation((payload) => addQuestion(payload), {
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [KEY],
      });
      enqueueSnackbar("Question has been created successfully !", {
        autoHideDuration: 1500,
        variant: "success",
      });
      router.push(APP_ROUTES.QUESTIONS_MANAGE_QUESTIONS);
    },
    onError: (err: any) => {
      enqueueSnackbar(err.message, {
        autoHideDuration: 1500,
        variant: "error",
      });
    },

    mutationKey: getKeyFromProps(payload, "ADD_QUESTION"),

    retry: 1,
  });
};
export const useUpdateQuestion = (payload: any) => {
  const client = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  return useMutation((payload) => editQuestion(payload), {
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [KEY],
      });
      enqueueSnackbar("Question has been updated successfully !", {
        autoHideDuration: 1500,
        variant: "success",
      });
      router.push(APP_ROUTES.QUESTIONS_MANAGE_QUESTIONS);
    },
    onError: (err: any) => {
      enqueueSnackbar(err.message, {
        autoHideDuration: 1500,
        variant: "error",
      });
    },

    mutationKey: getKeyFromProps(payload, "ADD_QUESTION"),

    retry: 1,
  });
};

export const useDuplicateQuestion = (questionId: any) => {
  const client = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation((questionId) => duplicateQuestion(questionId), {
    onSuccess: () => {
      enqueueSnackbar("Question has been duplicated !", {
        autoHideDuration: 1500,
        variant: "success",
      });

      client.invalidateQueries({
        queryKey: [KEY],
      });
    },
    onError: (err: any) => {
      enqueueSnackbar(err.message, {
        autoHideDuration: 1500,
        variant: "error",
      });
    },

    mutationKey: getKeyFromProps(questionId, "DUPLICATE_QUESTION"),

    retry: 1,
  });
};

export const usePostCategory = (payload: any) => {
  const client = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  return useMutation((payload) => postCategory(payload), {
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [KEY],
      });
      enqueueSnackbar("New Category has been Created !", {
        autoHideDuration: 1500,
        variant: "success",
      });
      router.push(APP_ROUTES.QUESTIONS_CREATE_NEW);
    },
    onError: (err: any) => {
      enqueueSnackbar(err.message, {
        autoHideDuration: 1500,
        variant: "error",
      });
    },

    mutationKey: getKeyFromProps(payload, "POST_CATEGORY"),

    retry: 1,
  });
};
