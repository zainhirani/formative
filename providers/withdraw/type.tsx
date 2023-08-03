import { type } from "os";

export namespace Quiz_Withdraw {
  export type withdrawProps = {};
  export type withdrawResponse = { id: number };
  export type withdrawMutationPayload = {
    id: number;
  };
  export interface withdrawAPIPayload extends withdrawProps {
    data: withdrawMutationPayload;
  }
}
