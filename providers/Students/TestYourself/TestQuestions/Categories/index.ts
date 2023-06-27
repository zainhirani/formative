import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import * as api from "./api";
import { Category } from "./types";

const KEY = "Category";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}

//Listing
export function useCategoryListing(
  props?: Category.ListingProps,
): UseQueryResult<Category.ListingResponse> {
  return useQuery(getKeyFromProps(props, "LISTING"), () => api.listing(props));
}
