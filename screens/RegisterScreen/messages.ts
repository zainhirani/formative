/*
 * RegisterScreen Messages
 *
 * This contains all the text for the RegisterScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.RegisterScreen";

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: "Hello",
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: "This is the basic starter project for react",
  },
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: "Enter your Email",
  },
  passwordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: "Enter Password",
  },
  confirmPasswordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: "Enter Password Again",
  },
  userRoleLabel: {
    id: `${scope}.userRoleLabel`,
    defaultMessage: "Select Your Role",
  },
  emailPlaceholder: {
    id: `${scope}.emailPlaceholder`,
    defaultMessage: "Enter your Mail",
  },
  passwordPlaceholder: {
    id: `${scope}.passwordPlaceholder`,
    defaultMessage: "Enter your password",
  },
  confirmPasswordPlaceholder: {
    id: `${scope}.passwordPlaceholder`,
    defaultMessage: "Enter your password again",
  },
  userRolePlaceholder: {
    id: `${scope}.userRolePlaceholder`,
    defaultMessage: "Please select your Role",
  },
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: "Sign Up",
  },

  textSignIn: {
    id: `${scope}.textSignIn`,
    defaultMessage: "Already a member?",
  },

  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: "Sign In now",
  },
  successMessage: {
    id: `${scope}.successMessage`,
    defaultMessage: "Signed Up Successfully!",
  },
});
