import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import * as api from "./api";
import { QuizResult } from "./types";

const KEY = "QuizResult";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}

//Listing
export function useQuizResultListing(
  props: QuizResult.ListingProps,
): UseQueryResult<QuizResult.ListingResponse> {
  return useQuery(getKeyFromProps(props, "LISTING"), () => api.listing(props));
}

//Detail
export function useQuizResultDetail(
  props: QuizResult.DetailProps,
): UseQueryResult<QuizResult.DetailResponse> {
  return useQuery(getKeyFromProps(props, "DETAIL"), () => api.detail(props));
}
