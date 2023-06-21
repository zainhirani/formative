import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { getQuestions } from "./api";

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
