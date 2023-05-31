/*
 * ManageQuestionsScreen Messages
 *
 * This contains all the text for the ManageQuestionsScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.ManageQuestionsScreen";

export default defineMessages({
  searchQuiz: {
    id: `${scope}.searchQuiz`,
    defaultMessage: "Search quiz",
  },
  selectCourse: {
    id: `${scope}.selectCourse`,
    defaultMessage: "Select Course",
  },
  selectFolder: {
    id: `${scope}.selectFolder`,
    defaultMessage: "Select Folder",
  },
  selectStatus: {
    id: `${scope}.selectStatus`,
    defaultMessage: "Select Status",
  },
  createNew: {
    id: `${scope}.createNew`,
    defaultMessage: "Create New",
  },
  statusCompleted: {
    id: `${scope}.statusCompleted`,
    defaultMessage: "Completed",
  },
  statusDraft: {
    id: `${scope}.statusDraft`,
    defaultMessage: "Draft",
  },
});
