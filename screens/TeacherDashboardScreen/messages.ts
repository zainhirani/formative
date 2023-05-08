/*
 * TeacherDashboardScreen Messages
 *
 * This contains all the text for the TeacherDashboardScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.TeacherDashboardScreen";

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: "Teacher",
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: "You are logged in as a teacher",
  },

});
