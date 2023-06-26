import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import * as api from "./api";
import { Question } from "./types";

const KEY = "Questions";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}

//Listing
export function useQuestionListing(
  props: Question.ListingProps,
): UseQueryResult<Question.ListingResponse> {
  return useQuery(getKeyFromProps(props, "LISTING"), () => api.listing(props));
}
