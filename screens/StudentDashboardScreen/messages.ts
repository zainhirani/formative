/*
 * StudentDashboardScreen Messages
 *
 * This contains all the text for the StudentDashboardScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.StudentDashboardScreen";

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: "Student",
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: "You are logged in as a student",
  },

});
