import { UseMutationResult, useMutation, useQuery, useQueryClient } from "react-query";

import * as api from "./api";
import { useSnackbar } from "notistack";
import { Withdraw } from "./type";

const KEY = "Quiz_Withdraw";

  export function useQuizWithdraw(
    props: Withdraw.withdrawProps = {},
  ): UseMutationResult<
    Withdraw.withdrawResponse,
    {
      message?: string;
    },
    Withdraw.withdrawAPIMutationPayload
  > {
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    return useMutation((payload) => api.quizWithdraw({ ...props, data: payload }), {
      mutationKey: `${KEY} | Create`,
      onSuccess: () => {
        enqueueSnackbar("WithDraw successfully !", {
          autoHideDuration: 1500,
          variant: "success",
        });
      },
      onError: (err: any) => {
        enqueueSnackbar(err.message, {
          autoHideDuration: 1500,
          variant: "error",
        });
      },
      retry: 0,
    });
  }