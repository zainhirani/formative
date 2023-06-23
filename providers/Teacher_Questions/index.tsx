import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  deleteQuestion,
  duplicateQuestion,
  getQuestionById,
  getQuestions,
} from "./api";

const KEY = "Questions";

export function getKeyFromProps(
  props: any,
  type:
    | "LISTING"
    | "DETAIL"
    | "DUPLICATE_QUESTION"
    | "TEACHER_QUESTIONS_LISTINGS"
    | "DELETE_QUESTION",
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
