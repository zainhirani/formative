import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import * as api from "./api";
import { QuizResult } from "./types";
import QUERY_KEYS from "queries/QueriesKeyConstant";
import { useSnackbar } from "notistack";

const KEY = "QuizResult";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL" | "DOWNLOAD",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}

//Listing
export function useQuizResultListing(
  props: QuizResult.ListingProps,
): UseQueryResult<QuizResult.ListingResponse> {
  return useQuery(QUERY_KEYS.QUIZ_RESULT, () => api.listing(props));
}

//Detail
export function useQuizResultDetail(
  props: QuizResult.DetailProps,
): UseQueryResult<QuizResult.DetailResponse> {
  return useQuery(getKeyFromProps(props, "DETAIL"), () => api.detail(props));
}

//Download






export function useDownload(
  props: QuizResult.downloadProps = {},
): UseMutationResult<
QuizResult.downloadResponse,
  {
    message?: string;
  },
  QuizResult.downloadAPIMutationPayload
> {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  return useMutation((payload) => api.download({ ...props, data: payload }), {
    mutationKey: `${KEY} | download | Create`,
    onSuccess: (res) => {
      console.log(res,'ddddd')
      enqueueSnackbar("Download successs", {
        autoHideDuration: 1500,
        variant: "success",
      });
    },
    // onError: (err: any) => {
    //   enqueueSnackbar(err.message, {
    //     autoHideDuration: 1500,
    //     variant: "error",
    //   });
    // },
    retry: 0,
  });
}
