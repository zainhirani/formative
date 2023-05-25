/*
 * LoginScreen Messages
 *
 * This contains all the text for the LoginScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.LoginScreen";

export default defineMessages({
  searchQuiz: {
    id: `${scope}.searchQuiz`,
    defaultMessage: "Search Quiz",
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
});
