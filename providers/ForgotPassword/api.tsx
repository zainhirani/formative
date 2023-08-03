
import service from "services";
import {Forgot} from './type'

export async function forgotPassword  (props : Forgot.PasswordAPIPayload ) :Promise<Forgot.PasswordResponse> {

    return service({
      url: `/auth/forget-password`,
      body: props.data,
      method: "POST",
    });
  };


  export async function verificationCode  (payload : Forgot.VerificationAPIPayload ) :Promise<Forgot.VerificationResponse> {

    return service({
      url: `/auth/forget-password/verification`,
      body: payload.data,
      method: "POST",
    });
  };


  export async function resetPassword  (payload : Forgot.ResetAPIPayload ) :Promise<Forgot.ResetResponse> {

    return service({
      url: `/auth/reset-password`,
      body: payload.data,
      method: "POST",
    });
  };