const APP_ROUTES = {
  // ===========TEACHER PORTAL ===========

  // Quiz Section
  ADD_QUIZ: "/add-quiz",
  DRAFT_QUIZ: "teacher/quiz/draft",
  DRAFT_QUIZ_EDIT: "teacher/quiz/draft/[id]",
  MANAGE_QUIZ: "/teacher/quiz",
  QUIZ_RESULTS: "/teacher/quiz/quiz-results",
  // - Question Section
  QUESTIONS_CREATE_NEW: "/teacher/questions/add",
  QUESTIONS_UPLOAD_QUESTIONS: "/teacher/questions/upload",
  QUESTIONS_MANAGE_QUESTIONS: "/teacher/questions/manage",
  // - Students Section
  STUDENTS: "/teacher/students",
  // - Courses Section
  COURSES: "/teacher/courses",

  // =========== STUDENT PORTAL ===========

  // Take Quiz Section
  TAKE_QUIZ: "/student/take-quiz",
  // - Test Yourself Section
  TEST_YOUR_SELF: "/student/test-yourself",
  // - How am I doing Section
  HOW_AM_I_DOING: "/student/how-am-i-doing",

  // =========== COMMON ===========
  DASHBOARD: "/dashboard",
  // - Setting Section
  SETTINGS: "/settings",
  // - Profile Section
  PROFILE: "/profile",

  // Absolute Paths:
  ANY_ABSOLUTE_PATH: "https://any-absolute-path.com/",
};

export default APP_ROUTES;
