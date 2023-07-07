import service from "services";
import { QuizResultsCourse } from "./types";

//GET QuizResultsCourse

export async function listing(
  props?: QuizResultsCourse.ListingAPIPayload,
): Promise<QuizResultsCourse.ListingResponse> {
  return service({
    method: "GET",
    url: `/quiz-result/courses/result`,
    queryParams: props,
  });
}

//GET QuizResultsList

export async function quizReslutListing(
  props?: QuizResultsCourse.QuizResultListingAPIPayload,
): Promise<QuizResultsCourse.QuizResultListingResponse> {
  return service({
    method: "GET",
    url: `/quiz-result`,
    queryParams: props,
  });
}
//AttemptQuiz

export async function attemptQuizListing(
  props?: QuizResultsCourse.AttemptQuizAPIPayload,
): Promise<QuizResultsCourse.AttemptQuizResponse> {
  return service({
    method: "GET",
    url: `/quiz-result/${props?.quizId}`,
  });
}
