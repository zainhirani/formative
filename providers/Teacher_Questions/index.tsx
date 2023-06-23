import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { getQuestionById, getQuestionByIdAtempt, getQuestions } from "./api";

const KEY = "Questions";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}

export const useQuestionsListing = (props: any) => {
  return useQuery(getKeyFromProps(props, "LISTING"), () => getQuestions(props));
};

export const useQuestionDetailsAttempt = (props: any) => {
  return useQuery(
    "DETAIL_ATTEMPT",
    () => getQuestionByIdAtempt(props.questionId),
    {
      enabled: !!props.questionId,
    },
  );
};

export const useQuestionDetails = (props: any) => {
  return useQuery(
    getKeyFromProps(props, "DETAIL"),
    () => getQuestionById(props.questionId),
    { enabled: !!props.questionId },
  );
};
