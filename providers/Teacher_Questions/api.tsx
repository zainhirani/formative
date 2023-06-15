import service from "services";
import {
  TEACHER__ADD_QUESTION,
  TEACHER__DELETE_QUESTION,
  TEACHER__EDIT_QUESTIONS,
  TEACHER__GET_QUESTIONS,
  TEACHER__GET_QUESTIONS_BY_CATEGORY_ID,
  TEACHER__GET_QUESTIONS_BY_ID,
  TEACHER__GET_FACULTIES,
  TEACHER__GET_FACULTIES_CATEGORIES,
  TEACHER__GET_FOLDERS,
  TEACHER__GET_CATEGORIES,
  TEACHER__GET_QUESTION_COUNT_ID,
} from "providers/endpoints";

export const getQuestions = async () => {
  return await service({
    url: TEACHER__GET_QUESTIONS,
    method: "GET",
  });
};
export const getQuestionById = async (id: any) => {
  return await service({
    url: TEACHER__GET_QUESTIONS_BY_ID,
    method: "GET",
  });
};

export const getCategories = async () => {
  return await service({
    url: TEACHER__GET_CATEGORIES,
    method: "GET",
  });
};

export const getCategoriesFaculties = async () => {
  return await service({
    url: TEACHER__GET_FACULTIES_CATEGORIES,
    method: "GET",
  });
};

export const getFaculties = async () => {
  return await service({
    url: TEACHER__GET_FACULTIES,
    method: "GET",
  });
};

export const addQuestion = async (payload) => {
  return service({
    method: "POST",
    url: TEACHER__ADD_QUESTION,
    body: payload,
    formData: true,
  });
};

export const getFolders = async () => {
  return await service({
    url: TEACHER__GET_FOLDERS,
    method: "GET",
  });
};

export const editQuestion = async () => {
  return await service({
    url: TEACHER__EDIT_QUESTIONS,
    method: "PATCH",
  });
};

export const deleteQuestion = async () => {
  return await service({
    url: TEACHER__DELETE_QUESTION,
    method: "DELETE",
  });
};

export const getQuestionCountId = async () => {
  return await service({
    url: TEACHER__GET_QUESTION_COUNT_ID,
    method: "GET",
  });
};
