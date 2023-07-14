/*
 * CreateQuestion Messages
 *
 * This contains all the text for the CreateQuestion
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.CreateQuestion";

export default defineMessages({
  author: {
    id: `${scope}.author`,
    defaultMessage: "Author:",
  },
  authorName: {
    id: `${scope}.authorName`,
    defaultMessage: "Dr. Kevin B.",
  },
  statusLabel: {
    id: `${scope}.statusLabel`,
    defaultMessage: "Status",
  },
  status: {
    id: `${scope}.status`,
    defaultMessage: "Draft",
  },
  questNo: {
    id: `${scope}.questNo`,
    defaultMessage: "Quest No. ",
  },
  questNoValue: {
    id: `${scope}.questNoValue`,
    defaultMessage: "2573/1",
  },
  questType: {
    id: `${scope}.questType`,
    defaultMessage: "Type: ",
  },
  questTypeValue: {
    id: `${scope}.questTypeValue`,
    defaultMessage: "Select type",
  },
  public: {
    id: `${scope}.public`,
    defaultMessage: "Public",
  },
  limit: {
    id: `${scope}.limit`,
    defaultMessage: "Limit: ",
  },
  limitValue: {
    id: `${scope}.limitValue`,
    defaultMessage: "0",
  },
  folder: {
    id: `${scope}.folder`,
    defaultMessage: "Folder: ",
  },
  folderValue: {
    id: `${scope}.folderValue`,
    defaultMessage: "Select folder",
  },
  category: {
    id: `${scope}.category`,
    defaultMessage: "Category: ",
  },
  categoryValue: {
    id: `${scope}.categoryValue`,
    defaultMessage: "Select category",
  },
  categoriesForFaculty: {
    id: `${scope}.categoriesForFaculty`,
    defaultMessage: "Categories for faculty: ",
  },
  categoriesForFacultyValue: {
    id: `${scope}.limitValue`,
    defaultMessage: "Select multiple",
  },
  text1: {
    id: `${scope}.text1`,
    defaultMessage: "BC06- Amino Acids",
  },
  text2: {
    id: `${scope}.text2`,
    defaultMessage: "Appendix ",
  },
  text3: {
    id: `${scope}.text3`,
    defaultMessage: "B01 Biochemistry ",
  },
  imageLabel: {
    id: `${scope}.imageLabel`,
    defaultMessage: "Image ",
  },
  addImageButton: {
    id: `${scope}.addImageButton`,
    defaultMessage: "Add ",
  },
  addImageText: {
    id: `${scope}.addImageText`,
    defaultMessage: `No image attached. Click on "Add" to add image`,
  },
  optionPlaceholder: {
    id: `${scope}.optionPlaceholder`,
    defaultMessage: `Type your details here`,
  },
  correctCheck: {
    id: `${scope}.correctCheck`,
    defaultMessage: `Correct`,
  },
  lockCheck: {
    id: `${scope}.lockCheck`,
    defaultMessage: `Lock`,
  },
  deleteButton: {
    id: `${scope}.deleteButton`,
    defaultMessage: `Delete`,
  },
});
