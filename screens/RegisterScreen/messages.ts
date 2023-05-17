/*
 * RegisterScreen Messages
 *
 * This contains all the text for the RegisterScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.RegisterScreen";

export default defineMessages({
  stepOneTitle: {
    id: `${scope}.stepOneTitle`,
    defaultMessage: "Sign Up",
  },
  stepTwoTitle: {
    id: `${scope}.stepTwoTitle`,
    defaultMessage: "Profile",
  },
  //First Step Messages
  description: {
    id: `${scope}.description`,
    defaultMessage: "Will you please fill out the form?",
  },
  firstNameLabel: {
    id: `${scope}.firstNameLabel`,
    defaultMessage: "Given (First) Name",
  },
  lastNameLabel: {
    id: `${scope}.lastNameLabel`,
    defaultMessage: "Family (Last) Name",
  },
  nickNameLabel: {
    id: `${scope}.nickNameLabel`,
    defaultMessage: "Preferred (Nick) Name",
  },
  genderLabel: {
    id: `${scope}.genderLabel`,
    defaultMessage: "Gender Pronoun",
  },
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: "E-mail Address",
  },
  rfuLabel: {
    id: `${scope}.rfuLabel`,
    defaultMessage: "RFU ID",
  },
  programLabel: {
    id: `${scope}.programLabel`,
    defaultMessage: "School/Program",
  },
  graduationLabel: {
    id: `${scope}.graduationLabel`,
    defaultMessage: "Year of Graduation - Class of (20XX)",
  },
  birthLabel: {
    id: `${scope}.birthLabel`,
    defaultMessage: "Birth Place",
  },
  userLabel: {
    id: `${scope}.userLabel`,
    defaultMessage: "User Name",
  },
  passwordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: "Password",
  },
  confirmPasswordLabel: {
    id: `${scope}.confirmPasswordLabel`,
    defaultMessage: "Confirm Password",
  },
  firstNamePlaceholder: {
    id: `${scope}.firstNamePlaceholder`,
    defaultMessage: "Enter your first name here",
  },
  lastNamePlaceholder: {
    id: `${scope}.lastNamePlaceholder`,
    defaultMessage: "Enter your last name here",
  },
  nickNamePlaceholder: {
    id: `${scope}.nickNamePlaceholder`,
    defaultMessage: "Enter your nick name here",
  },
  emailPlaceholder: {
    id: `${scope}.emailPlaceholder`,
    defaultMessage: "Enter your valid email address here",
  },
  rfuPlaceholder: {
    id: `${scope}.rfuPlaceholder`,
    defaultMessage: "Enter your id here",
  },
  graduationPlaceholder: {
    id: `${scope}.graduationPlaceholder`,
    defaultMessage: "20xx",
  },
  birthPlaceholder: {
    id: `${scope}.birthPlaceholder`,
    defaultMessage: "Enter birthplace here",
  },
  userPlaceholder: {
    id: `${scope}.userPlaceholder`,
    defaultMessage: "Enter your unique user name",
  },
  passwordPlaceholder: {
    id: `${scope}.passwordPlaceholder`,
    defaultMessage: "Enter your password",
  },
  confirmPasswordPlaceholder: {
    id: `${scope}.confirmPasswordPlaceholder`,
    defaultMessage: "Re-enter your password",
  },
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: "Sign Up & Continue",
  },
  nextStepText: {
    id: `${scope}.nextStepText`,
    defaultMessage: "Step 1/2. Next step",
  },
  nextStep: {
    id: `${scope}.nextStep`,
    defaultMessage: "Profile",
  },
  textSignIn: {
    id: `${scope}.textSignIn`,
    defaultMessage: "Already have an account?",
  },

  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: "Sign In",
  },

  //Second Step Messages
  dobLabel: {
    id: `${scope}.dobLabel`,
    defaultMessage: "Date of Birth",
  },
  pharmacyLabel: {
    id: `${scope}.pharmacyLabel`,
    defaultMessage: "Years of Pharmacy Technician Experience (0-50)",
  },
  partTimeLabel: {
    id: `${scope}.partTimeLabel`,
    defaultMessage: "Are you working part time?",
  },
  bioLabel: {
    id: `${scope}.bioLabel`,
    defaultMessage: "Have you taken a Biochemistry class before?",
  },
  mathLabel: {
    id: `${scope}.mathLabel`,
    defaultMessage: "My math skills are",
  },
  learnLabel: {
    id: `${scope}.learnLabel`,
    defaultMessage: "I prefer to learn about",
  },
  sequenceLabel: {
    id: `${scope}.sequenceLabel`,
    defaultMessage: "My preferred learning sequence is",
  },
  studyLabel: {
    id: `${scope}.studyLabel`,
    defaultMessage: "I prefer to study",
  },
  playLabel: {
    id: `${scope}.playLabel`,
    defaultMessage: "In high school, I played",
  },
  volunteerLabel: {
    id: `${scope}.volunteerLabel`,
    defaultMessage: "In the last year, did you volunteer more than 40 hours",
  },
  hobbiesLabel: {
    id: `${scope}.hobbiesLabel`,
    defaultMessage: "Hobbies",
  },
  dobPlaceholder: {
    id: `${scope}.dobPlaceholder`,
    defaultMessage: "YYYY MM DD",
  },
  pharmacyPlaceholder: {
    id: `${scope}.pharmacyPlaceholder`,
    defaultMessage: "Enter no. of years here",
  },
  hobbiesPlaceholder: {
    id: `${scope}.hobbiesPlaceholder`,
    defaultMessage: "Enter your hobbies",
  },
  profile: {
    id: `${scope}.profile`,
    defaultMessage: "Save & Continue",
  },
  finalStepText: {
    id: `${scope}.nextStepText`,
    defaultMessage: "Finish & Proceed to Dashboard",
  },

  successMessage: {
    id: `${scope}.successMessage`,
    defaultMessage: "Signed Up Successfully!",
  },
});
