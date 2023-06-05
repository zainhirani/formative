/*
 * TakeQuizScreen Messages
 *
 * This contains all the text for the TakeQuizScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.TakeQuizScreen";

export default defineMessages({
  searchQuiz: {
    id: `${scope}.searchQuiz`,
    defaultMessage: "Search Quiz:",
  },
  selectCourse: {
    id: `${scope}.selectCourse`,
    defaultMessage: "Select Course",
  },
  underTakingTitle: {
    id: `${scope}.underTakingTitle`,
    defaultMessage: "Undertaking:",
  },
  underTakingDesc: {
    id: `${scope}.underTakingDesc`,
    defaultMessage:
      "I will not discuss this assessment with classmates until after they have also taken the assessment",
  },
  underTakingLongDesc: {
    id: `${scope}.underTakingLongDesc`,
    defaultMessage:
      "Rosalind Franklin University of Medicine Rosalind Franklin University of Medicine and Science places the highest value on intellectual integrity and academic honesty. As a future health care professional, I will uphold the highest ethical standards and will expect the same from your peers. By completing and submitting this assessment. I affirm that this work represents my onw. I have not received any assistance (including but not limited to notes, books, my fellow students, or electronically stored information) nor used dishonest means for purpose of completing this examination. I understand that a violation of academic integrity may result in dismissal from the program.",
  },
  confirmUnderTaking: {
    id: `${scope}.confirmUnderTaking`,
    defaultMessage: "Are you sure you want to take the quiz now?",
  },
  accept: {
    id: `${scope}.accept`,
    defaultMessage: "Accept & Continue:",
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: "Cancel",
  },
  modalTitle: {
    id: `${scope}.modalTitle`,
    defaultMessage: "Kate Michelle this is Medchem Week 5 Formative:",
  },
  questionNo: {
    id: `${scope}.questionNo`,
    defaultMessage: "Question no.",
  },
  remainingTime: {
    id: `${scope}.remainingTime`,
    defaultMessage: "Time Remaining:",
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: "Submit",
  },
  quizScoreTitle: {
    id: `${scope}.quizScoreTitle`,
    defaultMessage: "Quiz Score",
  },
  quizScore: {
    id: `${scope}.quizScore`,
    defaultMessage: "You scored",
  },
  quizScoreText: {
    id: `${scope}.quizScoreText`,
    defaultMessage: "out of a possible",
  },
  quizScorePoints: {
    id: `${scope}.quizScorePoints`,
    defaultMessage: "points.",
  },
  percentage: {
    id: `${scope}.percentage`,
    defaultMessage: "Percentage:",
  },
  scored: {
    id: `${scope}.scored`,
    defaultMessage: "You Scored:",
  },
  close: {
    id: `${scope}.close`,
    defaultMessage: "Close",
  },
});
