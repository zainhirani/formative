import { UseMutationResult, useMutation, useQuery, useQueryClient } from "react-query";

import * as api from "./api";
import { useSnackbar } from "notistack";
import APP_ROUTES from "constants/RouteConstants";
import { number } from "yup";
import { useRouter } from "next/router";
import {Forgot} from './type'

const KEY = "Forgot_Password";


  export function useForgotPassword(
    props: Forgot.PasswordProps = {},
  ): UseMutationResult<
    Forgot.PasswordResponse,
    {
      message?: string;
    },
    Forgot.PasswordAPIMutationPayload
  > {
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    return useMutation((payload) => api.forgotPassword({ ...props, data: payload }), {
      mutationKey: `${KEY} | Create`,
      onSuccess: () => {
        enqueueSnackbar("Password reset code sent to your email!", {
          autoHideDuration: 1500,
          variant: "success",
        });
      },
      onError: (err: any) => {
        enqueueSnackbar("Email not Register", {
          autoHideDuration: 1500,
          variant: "error",
        });
      },
      retry: 0,
    });
  }
  

  export function usePasswordVerification(
    props: Forgot.VerificationProps = {},
  ): UseMutationResult<
    Forgot.VerificationResponse,
    {
      message?: string;
    },
    Forgot.VerificationAPIMutationPayload
  > {
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    return useMutation((payload) => api.verificationCode({ ...props, data: payload }), {
      mutationKey: `${KEY} | Create`,
      onSuccess: () => {
        enqueueSnackbar("Code verified successfully", {
          autoHideDuration: 1500,
          variant: "success",
        });
      },
      onError: (err: any) => {
        console.log(err,'errrr')
        enqueueSnackbar(err.message, {
          autoHideDuration: 1500,
          variant: "error",
        });
      },
      retry: 0,
    });
  }
  

  export function useResetPassword(
    props: Forgot.ResetProps = {},
  ): UseMutationResult<
    Forgot.ResetResponse,
    {
      message?: string;
    },
    Forgot.ResetAPIMutationPayload
  > {
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    return useMutation((payload) => api.resetPassword({ ...props, data: payload }), {
      mutationKey: `${KEY} | Create`,
      onSuccess: () => {
        enqueueSnackbar("Reset Password Successfully !", {
          autoHideDuration: 1500,
          variant: "success",
        });
      },
      onError: (err: any) => {
        console.log(err,'errrr')
        enqueueSnackbar(err.message, {
          autoHideDuration: 1500,
          variant: "error",
        });
      },
      retry: 0,
    });
  }