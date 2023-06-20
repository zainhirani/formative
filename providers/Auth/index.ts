//Register API Integration

import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import * as api from "./api";
import { Register } from "./types";

const KEY = "Register";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL" | "test",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}
export function getStatsProviderKey(
  arg0: { userId: number | undefined },
  arg1: string,
): import("react-query").InvalidateQueryFilters<unknown> | undefined {
  throw new Error("Function not implemented.");
}
export function getFormProviderKey(
  arg0: { id: string | undefined },
  arg1: string,
): import("react-query").InvalidateQueryFilters<unknown> | undefined {
  throw new Error("Function not implemented.");
}

//user Create
export function useRegister(
  props: Register.CreateProps = {},
): UseMutationResult<
  Register.CreateResponse,
  {
    message?: string;
  },
  Register.CreateMutationPayload
> {
  const queryClient = useQueryClient();
  return useMutation((payload) => api.create({ ...props, data: payload }), {
    mutationKey: `${KEY}|Create`,
    onSuccess: () => {
      console.log(getKeyFromProps(props, "LISTING"));
      queryClient.invalidateQueries([KEY]);
    },
    retry: 0,
  });
}

// user update
export function useRegisterUpdate(
  props: Register.CreateProps = {},
): UseMutationResult<
  Register.CreateResponse,
  {
    message?: string;
  },
  Register.CreateMutationPayload
> {
  const queryClient = useQueryClient();
  return useMutation(
    (payload) => api.registerUpdate({ ...props, data: payload }),
    {
      mutationKey: `${KEY}|Create`,
      onSuccess: () => {
        console.log(getKeyFromProps(props, "LISTING"));
        queryClient.invalidateQueries([KEY]);
      },
      retry: 0,
    },
  );
}

// user Detail
export function useRegisterDetail(
  props?: Register.DetailAPIPayload,
): UseQueryResult<Register.DetailResponse> {
  return useQuery(getKeyFromProps(props, "DETAIL"), () => api.detail(props));
}
