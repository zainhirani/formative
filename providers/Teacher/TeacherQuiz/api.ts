import service from "services";
import { Quiz } from "./types";

//Quiz API Integration

// Get Quiz By Id
export async function allTeacherQuizById(
  props?: Quiz.QuizByIdAPIPayload,
): Promise<Quiz.QuizByIdResponse> {
  return await service({
    method: "GET",
    url: `/quiz/${props?.id}`,
  });
}

// Get Quiz No
export async function allTeacherQuizNo(
  props?: Quiz.QuizNoAPIPayload,
): Promise<Quiz.QuizNoResponse> {
  return await service({
    method: "GET",
    url: `/quiz/next/no`,
  });
}

// Get Quiz
export async function allTeacherQuiz(
  props?: Quiz.QuizAPIPayload,
): Promise<Quiz.QuizResponse> {
  return service({
    method: "GET",
    url: `/quiz`,
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

// All Folders Get
export async function allFolders(
  props?: Quiz.FolderListingAPIPayload,
): Promise<Quiz.FolderListingResponse> {
  return service({
    method: "GET",
    url: `/folder`,
  });
}

// All Scoring Get
export async function allScoring(
  props?: Quiz.ScoringListingAPIPayload,
): Promise<Quiz.ScoringListingResponse> {
  return service({
    method: "GET",
    url: `/scoring`,
  });
}

// Get Scoring By ID
export async function getScoringByID(
  props?: Quiz.ScoringByIDAPIPayload,
): Promise<Quiz.ScoringByIDResponse> {
  return service({
    method: "GET",
    url: `/scoring/${props?.id}`,
  });
}
// Create
export async function create(
  props: Quiz.CreateAPIPayload,
): Promise<Quiz.CreateResponse> {
  return service({
    method: "POST",
    url: `/quiz`,
    body: props.data,
  });
}

// Edit
export async function update(
  props: Quiz.UpdateAPIPayload,
): Promise<Quiz.UpdateResponse> {
  return service({
    method: "PATCH",
    url: `/quiz/${props.id}`,
    body: props.data,
  });
}

//Detail
export async function detail(
  props: Quiz.DetailAPIPayload,
): Promise<Quiz.DetailResponse> {
  return service({
    method: "GET",
    url: `/quiz/${props.id}`,
  });
}