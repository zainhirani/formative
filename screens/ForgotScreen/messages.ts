/*
 * ForgotScreen Messages
 *
 * This contains all the text for the ForgotScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.ForgotScreen";

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: "Forgot your password!",
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: "Request a new password.",
  },
  loginFooter: {
    id: `${scope}.loginFooter`,
    defaultMessage:
      "© Rosalind Franklin University of Medicine and Science 2023",
  },
  userLabel: {
    id: `${scope}.userLabel`,
    defaultMessage: "User Name or E-mail Address",
  },
  userPlaceholder: {
    id: `${scope}.userPlaceholder`,
    defaultMessage: "Enter your user name or e-mail address",
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: "Submit",
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: "Cancel",
  },
  successMessage: {
    id: `${scope}.successMessage`,
    defaultMessage: "Password Changed Successfully!",
  },
});
