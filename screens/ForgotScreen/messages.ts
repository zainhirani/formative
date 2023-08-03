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
    defaultMessage: "E-mail Address",
  },
  userPlaceholder: {
    id: `${scope}.userPlaceholder`,
    defaultMessage: "Enter your e-mail address",
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
  verify: {
    id: `${scope}.verify`,
    defaultMessage: "Verify",
  },
  codePlaceholder: {
    id: `${scope}.codePlaceholder`,
    defaultMessage: "Enter Code Here",
  },
  codeLabel: {
    id: `${scope}.codeLabel`,
    defaultMessage: "Your Code",
  },
  resetPasswordLabel: {
    id: `${scope}.resetPasswordLabel`,
    defaultMessage: "Password",
  },
  resetPlaceholder: {
    id: `${scope}.resetPlaceholder`,
    defaultMessage: "Enter New Password",
  },
});
