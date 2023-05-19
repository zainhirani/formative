/*
 * Dashboard Messages
 *
 * This contains all the text for the Dashboard
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.Dashboard";

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: "Welcome Kevin B. Good Morning!",
  },
    pitch: {
    id: `${scope}.pitch`,
    defaultMessage: "What do you want to do?",
  },
})