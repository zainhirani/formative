/*
 * LoginScreen Messages
 *
 * This contains all the text for the LoginScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.LoginScreen";

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
  userRolePlaceholder: {
    id: `${scope}.userRolePlaceholder`,
    defaultMessage: "Please select your Role",
  },
  rememberLabel: {
    id: `${scope}.rememberLabel`,
    defaultMessage: "Remember me",
  },

  forgot: {
    id: `${scope}.forgot`,
    defaultMessage: "Forgot password?",
  },

  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: "Sign In",
  },

  textSignUp: {
    id: `${scope}.textSignUp`,
    defaultMessage: "Don’t have an account?",
  },

  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: "Sign up now",
  },
});
