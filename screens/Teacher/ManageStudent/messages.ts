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
  enrollStudent: {
    id: `${scope}.createNew`,
    defaultMessage: "Enroll Students",
  },
  successMessage: {
    id: `${scope}.successMessage`,
    defaultMessage: "All selected students are enrolled in the selected course.",
  },
});
