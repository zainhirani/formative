import service from "services";
import { Quiz_Withdraw } from "./type";

export async function quizWithdraw(
  props?: Quiz_Withdraw.withdrawAPIPayload,
): Promise<Quiz_Withdraw.withdrawResponse> {
  return service({
    url: `/quiz/withdraw`,
    body: props,
    method: "POST",
  });
}
