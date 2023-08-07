import service from "services";
import { Withdraw } from "./type";

export async function quizWithdraw  (payload : Withdraw.withdrawAPIPayload ) :Promise<Withdraw.withdrawResponse> {

    return service({
      url: `/quiz/withdraw`,
      body: payload.data,
      method: "POST",
    });
  };