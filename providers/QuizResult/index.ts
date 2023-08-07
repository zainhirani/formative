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

function download(blob: any, filename: any) {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  // the filename you want
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

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
      //@ts-ignore
      res?.blob().then((blob: any) => download(blob, "Quiz-Result")),
        enqueueSnackbar("Download started", {
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
