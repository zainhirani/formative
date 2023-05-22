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
    defaultMessage: "Hello there!",
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: "Log in with your details to launch.",
  },
  loginFooter: {
    id: `${scope}.loginFooter`,
    defaultMessage:
      "© Rosalind Franklin University of Medicine and Science 2023",
  },
  userLabel: {
    id: `${scope}.userLabel`,
    defaultMessage: "User Name",
  },
  passwordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: "Password",
  },
  userPlaceholder: {
    id: `${scope}.userPlaceholder`,
    defaultMessage: "Enter your user name",
  },
  passwordPlaceholder: {
    id: `${scope}.passwordPlaceholder`,
    defaultMessage: "Enter your password",
  },
  userRolePlaceholder: {
    id: `${scope}.userRolePlaceholder`,
    defaultMessage: "Please select your Role",
  },

  forgot: {
    id: `${scope}.forgot`,
    defaultMessage: "Forgot password?",
  },

  logIn: {
    id: `${scope}.logIn`,
    defaultMessage: "Log In",
  },
  OR: {
    id: `${scope}.OR`,
    defaultMessage: "OR",
  },

  textSignUp: {
    id: `${scope}.textSignUp`,
    defaultMessage: "Don’t have an account?",
  },
  SSO: {
    id: `${scope}.SSO`,
    defaultMessage: "Log In via The Rosalind Franklin SSO",
  },
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: "Sign up",
  },
  successMessage: {
    id: `${scope}.successMessage`,
    defaultMessage: "Signed in Successfully",
  },
  welcomeTitle: {
    id: `${scope}.welcomeTitle`,
    defaultMessage: "Welcome Kevin B. Good Morning!",
  },
});
