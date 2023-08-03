import { useMutation, useQuery, useQueryClient } from "react-query";

import * as api from "./api";
import { useSnackbar } from "notistack";
import APP_ROUTES from "constants/RouteConstants";

const KEY = "Quiz_Withdraw";

export function getKeyFromProps(
    props: any,
    type:
      | "WITHDRAW"
  ): string[] {
    const key = [KEY, type];
    if (props) {
      key.push(props);
    }
    return key;
  }
  export const useQuizWithdraw = (payload: any) => {
    const client = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
  
    return useMutation((payload) => api.quizWithdraw(payload), {
      onSuccess: () => {
        client.invalidateQueries({
          queryKey: [KEY],
        });
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
  
      mutationKey: getKeyFromProps(payload, "WITHDRAW"),
  
      retry: 1,
    });
  };
  