import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import * as api from "./api";
import { TestQuestion } from "./types";
import { enqueueSnackbar } from "notistack";

const KEY = "Test";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}

//Test
export function useTestQuestion(
  props: TestQuestion.TestProps = {},
): UseMutationResult<
  TestQuestion.TestResponse,
  {
    message?: string;
  },
  TestQuestion.TestMutationPayload
> {
  const queryClient = useQueryClient();
  return useMutation((payload) => api.test({ ...props, data: payload }), {
    mutationKey: `${KEY} | Test`,
    onSuccess: () => {
      console.log(getKeyFromProps(props, "LISTING"));
      queryClient.invalidateQueries([KEY]);
    },
    onError:(error)=>{
      enqueueSnackbar(error?.message, {
        variant: "error",
        autoHideDuration: 2000,
      });
    },
    retry: 0,
  });
}
