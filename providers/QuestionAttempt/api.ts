import service from "services";
import { QuestionAttempt } from "./types";

  //Detail
  export async function studentAttemptListing(
    props: QuestionAttempt.StudentListingAPIPayload,
  ): Promise<QuestionAttempt.StudentListingResponse> {
    return service({
      method: "GET",
      url: `/question-attempt/attempts/${props.quizId}/student/${props.userId}`,
    });
  }