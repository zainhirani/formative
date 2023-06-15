import service from "services";
import { QuizResult } from "./types";

export async function listing(props?:QuizResult.ListingAPIPayload):Promise<QuizResult.ListingResponse> {
    return service ({
        method:'GET',
        url:`/quiz-attempt`
    })
}

  //Detail
  export async function detail(
    props: QuizResult.DetailAPIPayload,
  ): Promise<QuizResult.DetailResponse> {
    return service({
      method: "GET",
      url: `/quiz-attempt/${props.id}`,
    });
  }