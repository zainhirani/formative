/*
 * LoginScreen Messages
 *
 * This contains all the text for the LoginScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.LoginScreen";

export default defineMessages({
  print: {
    id: `${scope}.print`,
    defaultMessage: "Print",
  },
  Refresh: {
    id: `${scope}.Refresh`,
    defaultMessage: "Refresh",
  },
  addQuestion: {
    id: `${scope}.addQuestion`,
    defaultMessage: "Add Question",
  },
});

