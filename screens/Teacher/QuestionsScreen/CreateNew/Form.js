import * as Yup from "yup";

export const initialValues = {
  questionId: "121/1",
  authorName: "",
  title: "",
  detail: "",
  option: [],
  answer: "",
  isPublic: false,
  folderId: 0,
  media: "",
  type: "",
  status: "Draft",
  categoryId: 0,
  timelimit: 0,
  tries: 0,
  facultyIds: [],
};

export const validationSchema = Yup.object().shape({
  authorName: Yup.string(),
  questionId: Yup.string(),
  title: Yup.string().required("Title is required"),
  detail: Yup.string().required("Detail is required"),
  option: Yup.array().required("Option is required"),
  answer: Yup.string().required("Answer is required"),
  isPublic: Yup.boolean().required("isPublic is required"),
  folderId: Yup.number().required("Folder ID is required"),
  media: Yup.string(),
  type: Yup.string().required("Type is required"),
  status: Yup.string().required("Status is required"),
  categoryId: Yup.number().required("Category ID is required"),
  timelimit: Yup.number().required("Time limit is required"),
  tries: Yup.number().required("Number of tries is required"),
  facultyIds: Yup.array().required("Faculty IDs are required"),
});
