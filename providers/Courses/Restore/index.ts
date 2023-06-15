import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import * as api from "./api";
import { RestoreCourse } from "./types";

const KEY = "Restore";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}

//Listing
export function useRestoreCourseListing(
  props?: RestoreCourse.ListingProps,
): UseQueryResult<RestoreCourse.ListingResponse> {
  return useQuery(getKeyFromProps(props, "LISTING"), () => api.listing(props));
}

//Create
export function useRestoreCourse(
  props: RestoreCourse.CreateProps = {},
): UseMutationResult<
  RestoreCourse.CreateResponse,
  {
    message?: string;
  },
  RestoreCourse.CreateMutationPayload
> {
  const queryClient = useQueryClient();
  return useMutation((payload) => api.restore({ ...props, data: payload }), {
    mutationKey: `${KEY} | Create`,
    onSuccess: () => {
      console.log(getKeyFromProps(props, "LISTING"));
      queryClient.invalidateQueries([KEY]);
    },
    retry: 0,
  });
}
