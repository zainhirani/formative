import service from "services";
import { Quiz } from "./types";

//Quiz API Integration

// Get Quiz By Id
export async function allTakeQuesQuizById(
  props?: Quiz.QuesQuizByIdAPIPayload,
): Promise<Quiz.QuesQuizByIdResponse> {
  return await service({
    method: "GET",
    url: `/question-attempt/${props?.id}/questions`,
  });
}

// Get Quiz No
export async function allTakeQuizNo(
  props?: Quiz.QuizNoAPIPayload,
): Promise<Quiz.QuizNoResponse> {
  return await service({
    method: "GET",
    url: `/quiz/next/no`,
  });
}

// Get Quiz
export async function allTakeQuiz(
  props?: any,
): Promise<Quiz.TakeQuizListingResponse> {
  return service({
    method: "GET",
    url: `/quiz/assign/student`,
    queryParams:props
  });
}

// All Courses Get 
export async function allCourses(
  props?: Quiz.CoursesAPIPayload,
): Promise<Quiz.CoursesResponse> {
  return service({
    method: "GET",
    url: `/courses`,
  });
}

// Question Attepmt
export async function questionAttempt(
  props: any,
): Promise<Quiz.QuestionAttemptResponse> {
  return service({
    method: "POST",
    url: `/question-attempt/${props?.quizId}/${props?.questionId}`,
    body: props?.payloadData
  });
}
