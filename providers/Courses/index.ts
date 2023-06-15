import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import * as api from "./api";
import { Course } from "./types";

const KEY = "Courses";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}

//Listing
export function useCourseListing(
  props?: Course.ListingProps,
): UseQueryResult<Course.ListingResponse> {
  return useQuery(getKeyFromProps(props, "LISTING"), () => api.listing(props));
}

//Create
export function useCreateCourse(
  props: Course.CreateProps = {},
): UseMutationResult<
  Course.CreateResponse,
  {
    message?: string;
  },
  Course.CreateMutationPayload
> {
  const queryClient = useQueryClient();
  return useMutation((payload) => api.create({ ...props, data: payload }), {
    mutationKey: `${KEY} | Create`,
    onSuccess: () => {
      console.log(getKeyFromProps(props, "LISTING"));
      queryClient.invalidateQueries([KEY]);
    },
    retry: 0,
  });
}

//Detail
export function useCourseDetail(
  props: Course.DetailProps,
): UseQueryResult<Course.DetailResponse> {
  return useQuery(getKeyFromProps(props, "DETAIL"), () => api.detail(props));
}

// Update
export function useCourseUpdate(props: Course.UpdateProps): UseMutationResult<
  Course.UpdateResponse,
  {
    message?: string;
  },
  Course.UpdateMutationPayload
> {
  const queryClient = useQueryClient();
  return useMutation((payload) => api.update({ ...props, data: payload }), {
    mutationKey: `${KEY}|Update`,
    onSuccess: () => {
      queryClient.invalidateQueries([KEY]);
    },
    retry: 0,
  });
}

// Remove
export function useCourseRemove(props?: Course.RemoveProps): UseMutationResult<
  Course.RemoveResponse,
  {
    message?: string;
  },
  Course.RemoveMutationPayload
> {
  const queryClient = useQueryClient();
  return useMutation((payload) => api.remove(payload), {
    mutationKey: `${KEY}|Remove`,
    onSuccess: () => {
      queryClient.invalidateQueries([KEY]);
    },
    retry: 0,
  });
}
