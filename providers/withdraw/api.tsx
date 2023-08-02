
import service from "services";

export const quizWithdraw = (payload :any) => {
    console.log(payload,"payload")
    return service({
      url: `/quiz/withdraw`,
      body: payload,
      method: "POST",
    });
  };