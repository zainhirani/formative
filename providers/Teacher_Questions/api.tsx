import service from "services";
import {
  TEACHER__ADD_QUESTION,
  TEACHER__GET_QUESTIONS,
  TEACHER__GET_QUESTIONS_BY_ID,
  TEACHER__GET_FACULTIES,
  TEACHER__GET_FACULTIES_CATEGORIES,
  TEACHER__GET_FOLDERS,
  TEACHER__GET_CATEGORIES,
  TEACHER__GET_QUESTION_COUNT_ID,
  TEACHER__GET_QUESTIONS_ATTEMPT_BY_ID,
} from "providers/endpoints";

export const getQuestions = (props: any) => {
  return service({
    url: TEACHER__GET_QUESTIONS,
    method: "GET",
    queryParams: props,
  });
};
export const getQuestionByIdAtempt = (id: any) => {
  return service({
    url: `${TEACHER__GET_QUESTIONS_ATTEMPT_BY_ID}${id}`,
    method: "GET",
  });
};
export const getQuestionById = (id: any) => {
  return service({
    url: `${TEACHER__GET_QUESTIONS_BY_ID}${id}`,
    method: "GET",
  });
};

export const duplicateQuestion = (id: any) => {
  return service({
    url: `/questions/${id}/duplicate`,
    method: "POST",
  });
};

export const getCategories = () => {
  return service({
    url: TEACHER__GET_CATEGORIES,
    method: "GET",
  });
};

export const getCategoriesFaculties = () => {
  return service({
    url: TEACHER__GET_FACULTIES_CATEGORIES,
    method: "GET",
  });
};

export const getFaculties = () => {
  return service({
    url: TEACHER__GET_FACULTIES,
    method: "GET",
  });
};

export const addQuestion = (payload: any) => {
  return service({
    method: "POST",
    url: TEACHER__ADD_QUESTION,
    body: payload,
    formData: true,
  });
};

export const getFolders = () => {
  return service({
    url: TEACHER__GET_FOLDERS,
    method: "GET",
  });
};

export const editQuestion = (payload: any) => {
  return service({
    url: `/questions/${payload.qId}`,
    method: "PATCH",
    body: payload.formdata,
    formData: true,
  });
};

export const deleteQuestion = (id: any) => {
  return service({
    url: `/questions/${id}`,
    method: "DELETE",
  });
};

export const getQuestionCountId = () => {
  return service({
    url: TEACHER__GET_QUESTION_COUNT_ID,
    method: "GET",
  });
};

// export const postCategory = () => {
//   return service({
//     url: `/categories`,
//     method: "POST",
//   });
// };

export const postCategory = (payload: any) => {
  return service({
    method: "POST",
    url: `/categories`,
    body: payload,
  });
};