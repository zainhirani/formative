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
    defaultMessage: "David Harrison",
  },
  folder: {
    id: `${scope}.folder`,
    defaultMessage: "Folder:",
  },
  folderPlaceholder: {
    id: `${scope}.folderPlaceholder`,
    defaultMessage: "MedChem",
  },
  type: {
    id: `${scope}.type`,
    defaultMessage: "Type:",
  },
  typePlaceholder: {
    id: `${scope}.typePlaceholder`,
    defaultMessage: "Select",
  },
  category: {
    id: `${scope}.category`,
    defaultMessage: "Category:",
  },
  categoryPlaceholder: {
    id: `${scope}.categoryPlaceholder`,
    defaultMessage: "Select Multiple",
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
