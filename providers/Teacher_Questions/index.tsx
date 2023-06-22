import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { duplicateQuestion, getQuestionById, getQuestions } from "./api";

const KEY = "Questions";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL" | "DUPLICATE_QUESTION",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}

export const useQuestionsListing = (props: any) => {
  return useQuery("TEACHER_QUESTIONS_LISTINGS", () => getQuestions(props));
};

export const useQuestionDetails = (props: any) => {
  return useQuery(
    getKeyFromProps(props, "DETAIL"),
    () => getQuestionById(props.questionId),
    { enabled: !!props.questionId },
  );
};

// export const useDuplicateQuestion = (questionId: any) => {
//   return useMutation((questionId) => duplicateQuestion(questionId), {
//     mutationKey: getKeyFromProps(questionId, "DUPLICATE_QUESTION"),
//     onSuccess: () => {},
//     retry: 1,
//   });
// };
