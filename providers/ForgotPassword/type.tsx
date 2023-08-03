export namespace Forgot {
  //forget password

  export type PasswordProps = {};
  export type PasswordResponse = {
    token: string;
  };

  export type PasswordAPIMutationPayload = {
    email: string;
  };

  export interface PasswordAPIPayload extends PasswordProps {
    data: PasswordAPIMutationPayload;
  }

  //verification code
  export type VerificationProps = {};

  export type VerificationResponse = {
    token: string;
  };

  export type VerificationAPIMutationPayload = {
    token: string;
    code: string;
  };

  export interface VerificationAPIPayload extends VerificationProps {
    data: VerificationAPIMutationPayload;
  }

  //reset password

  export type ResetProps = {};
  export type ResetResponse = {
    message: string;
  };

  export type ResetAPIMutationPayload = {
    token: string;
    password: string;
  };
  export interface ResetAPIPayload extends ResetProps {
    data: ResetAPIMutationPayload;
  }
}
