//Register API Integration

import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import * as api from "./api";
import { Register, Profile } from "./types";

const KEY = "Register";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL",
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

//Create
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
      queryClient.invalidateQueries(getKeyFromProps(props, "LISTING"));
    },
    retry: 0,
  });
}

// Detail
export function useRegisterDetail(
  props: Register.DetailProps,
): UseQueryResult<Register.DetailResponse> {
  return useQuery(getKeyFromProps(props, "DETAIL"), () => api.detail(props));
}

//Profile API Integration

//Create
export function useProfile(props: Profile.CreateProps = {}): UseMutationResult<
  Profile.CreateResponse,
  {
    message?: string;
  },
  Profile.CreateMutationPayload
> {
  const queryClient = useQueryClient();
  return useMutation(
    (payload) => api.createProfile({ ...props, data: payload }),
    {
      mutationKey: `${KEY}|Create`,
      onSuccess: () => {
        queryClient.invalidateQueries(getKeyFromProps(props, "LISTING"));
      },
      retry: 0,
    },
  );
}

// Detail
export function useProfileDetail(
  props: Profile.DetailProps,
): UseQueryResult<Profile.DetailResponse> {
  return useQuery(getKeyFromProps(props, "DETAIL"), () =>
    api.detailProfile(props),
  );
}
