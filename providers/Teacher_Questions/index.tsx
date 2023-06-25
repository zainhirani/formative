import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addQuestion,
  deleteQuestion,
  duplicateQuestion,
  getQuestionById,
  getQuestions,
} from "./api";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import APP_ROUTES from "constants/RouteConstants";

const KEY = "Questions";

export function getKeyFromProps(
  props: any,
  type:
    | "LISTING"
    | "DETAIL"
    | "DUPLICATE_QUESTION"
    | "TEACHER_QUESTIONS_LISTINGS"
    | "DELETE_QUESTION"
    | "ADD_QUESTION",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}

export const useQuestionsListing = (props: any) => {
  return useQuery(getKeyFromProps(props, "TEACHER_QUESTIONS_LISTINGS"), () =>
    getQuestions(props),
  );
};

// export const useQuestionDetailsAttempt = (props: any) => {
//   return useQuery(
//     "DETAIL_ATTEMPT",
//     () => getQuestionByIdAtempt(props.questionId),
//     {
//       enabled: !!props.questionId,
//     },
//   );
// };

export const useQuestionDetails = (props: any) => {
  return useQuery(
    getKeyFromProps(props, "DETAIL"),
    () => getQuestionById(props.questionId),
    { enabled: !!props.questionId },
  );
};

export const useDeleteQuestion = (questionId: any) => {
  const client = useQueryClient();

  return useMutation((questionId) => deleteQuestion(questionId), {
    mutationKey: getKeyFromProps(questionId, "DELETE_QUESTION"),
    onSuccess: () => {
      client.invalidateQueries(["TEACHER_QUESTIONS_LISTINGS"]);
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
      client.invalidateQueries(["TEACHER_QUESTIONS_LISTINGS"]);
      enqueueSnackbar("Question has been created successfully !", {
        autoHideDuration: 1500,
        variant: "success",
      });
      router.push(APP_ROUTES.QUESTIONS_MANAGE_QUESTIONS);
    },
    onError: () => {
      enqueueSnackbar("Can't add question !", {
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

  // let obj = {
  //   facultyId: "",
  //   folderId: "",
  //   type: "",
  //   categories: "",
  //   Limit: 10,
  //   Page: 1,
  // };

  return useMutation((questionId) => duplicateQuestion(questionId), {
    onSuccess: () => {
      enqueueSnackbar("Question has been duplicated !", {
        autoHideDuration: 1000,
        variant: "success",
      });
    },
    onError: () => {
      enqueueSnackbar("Can't duplicate question !", {
        autoHideDuration: 1000,
        variant: "error",
      });
    },

    mutationKey: getKeyFromProps(questionId, "DUPLICATE_QUESTION"),

    retry: 1,
  });
};
