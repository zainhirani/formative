/*
 * ManageQuizScreen Messages
 *
 * This contains all the text for the ManageQuizScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.ManageQuizScreen";

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
  helpTitle: {
    id: `${scope}.helpTitle`,
    defaultMessage: "How this page works?",
  },
  helpHeading: {
    id: `${scope}.helpHeading`,
    defaultMessage: "This article helps you to understand and how to perform different operations on this page.",
  },
  helpDescription: {
    id: `${scope}.helpDescription`,
    defaultMessage: "If you still need help then please send us an email to get email support. Thanks!",
  }
  
});
