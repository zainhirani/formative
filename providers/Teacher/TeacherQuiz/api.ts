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
  props?: any,
): Promise<Quiz.TeacherQuizListingResponse> {
  return service({
    method: "GET",
    url: `/quiz`,
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
  id?: any,
): Promise<Quiz.ScoringByIDResponse> {
  return service({
    method: "GET",
    url: `/scoring/${id}`,
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

// Quiz Distribute
export async function quizDistribute(
  props: Quiz.QuizDistributeAPIPayload,
): Promise<Quiz.QuizDistributeResponse> {
  
  console.log(props,'props hook');
  const dataStd =  {
    studentsId: props?.data?.studentsId
  }
  return service({
    method: "POST",
    url: `/quiz/${props.data.id}/assign-student`,
    body: dataStd,
  });
}