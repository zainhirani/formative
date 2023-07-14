/*
 * ManageQuizScreen Messages
 *
 * This contains all the text for the ManageQuizScreen
 */
 
import { defineMessages } from "react-intl";

export const scope = "app.screens.ManageQuizScreen";

export default defineMessages({
  searchCourse: {
    id: `${scope}.searchCourse`,
    defaultMessage: "Enter new course name ...",
  },
  newCourse: {
    id: `${scope}.newCourse`,
    defaultMessage: "New Course",
  },
  graduationYear: {
    id: `${scope}.graduationYear`,
    defaultMessage: "Year of Graduation: 2004",
  },
  program: {
    id: `${scope}.program`,
    defaultMessage: "School/Program: COP",
  },
  enrollStudent: {
    id: `${scope}.createNew`,
    defaultMessage: "Enroll Students",
  },
  statusCompleted: {
    id: `${scope}.statusCompleted`,
    defaultMessage: "Completed",
  },
  statusDraft: {
    id: `${scope}.statusDraft`,
    defaultMessage: "Draft",
  },
  successMessage: {
    id: `${scope}.successMessage`,
    defaultMessage: "All selected students are enrolled in the selected course.",
  },
  errorMessage: {
    id: `${scope}.errorMessage`,
    defaultMessage: "Error in enrolling student",
  },
});
