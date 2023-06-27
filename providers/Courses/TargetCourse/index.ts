import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import * as api from "./api";
import { TargetCourse } from "./types";

const KEY = "Courses";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}

//Target
export function useTargetCourse(
  props: TargetCourse.CreateProps = {},
): UseMutationResult<
  TargetCourse.CreateResponse,
  {
    message?: string;
  },
  TargetCourse.CreateMutationPayload
> {
  const queryClient = useQueryClient();
  return useMutation((payload) => api.target({ ...props, data: payload }), {
    mutationKey: `${KEY} | Create`,
    onSuccess: () => {
      console.log(getKeyFromProps(props, "LISTING"));
      queryClient.invalidateQueries([KEY]);
    },
    retry: 0,
  });
}
