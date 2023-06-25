/*
 * ManageQuestionsScreen Messages
 *
 * This contains all the text for the ManageQuestionsScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.ManageQuestionsScreen";

export default defineMessages({
  faculty: {
    id: `${scope}.faculty`,
    defaultMessage: "Faculty:",
  },
  facultyPlaceholder: {
    id: `${scope}.facultyPlaceholder`,
    defaultMessage: "Select faculty",
  },
  folder: {
    id: `${scope}.folder`,
    defaultMessage: "Folder:",
  },
  folderPlaceholder: {
    id: `${scope}.folderPlaceholder`,
    defaultMessage: "Select folder",
  },
  type: {
    id: `${scope}.type`,
    defaultMessage: "Type:",
  },
  typePlaceholder: {
    id: `${scope}.typePlaceholder`,
    defaultMessage: "Select type",
  },
  category: {
    id: `${scope}.category`,
    defaultMessage: "Category:",
  },
  categoryPlaceholder: {
    id: `${scope}.categoryPlaceholder`,
    defaultMessage: "Select Categories",
  },
  categories: {
    id: `${scope}.categories`,
    defaultMessage: "Categories:",
  },
  createNew: {
    id: `${scope}.createNew`,
    defaultMessage: "Create New",
  },
});
