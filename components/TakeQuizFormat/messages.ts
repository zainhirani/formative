/*
 * TakeQuiz Messages
 *
 * This contains all the text for the TakeQuiz
 */

import { defineMessages } from "react-intl";

export const scope = "app.component.TakeQuiz";

export default defineMessages({
  noQuestionTitle: {
    id: `${scope}.noQuestionTitle`,
    defaultMessage: "No question selected!",
  },
  noQuestionDescription: {
    id: `${scope}.noQuestionDescription`,
    defaultMessage: "Please, select a question from the list to test yourself.",
  },
  chooseQuestion: {
    id: `${scope}.chooseQuestion`,
    defaultMessage: "Choose the best answer",
  },
  answerTime: {
    id: `${scope}.answerTime`,
    defaultMessage: "Answer the question in: ",
    // defaultMessage: "Answer the question in: {value} Seconds",
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: "Submit",
  },
  tryMore: {
    id: `${scope}.tryMore`,
    defaultMessage: "Want to try more?",
  },
  select: {
    id: `${scope}.select`,
    defaultMessage:
      "Please, select another question from the list to take test again.",
  },
});
