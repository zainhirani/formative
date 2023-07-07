// Firebase configurations

export const NEXT_PUBLIC_FIREBASE_API_KEY =
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
// export const LOG_ANALYTICS = true;
export const NEXT_PUBLIC_FIREBASE_PROJECT_ID =
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
export const NEXT_PUBLIC_FIREBASE_MESSAGING_ID =
  process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_ID;
export const NEXT_PUBLIC_FIREBASE_APP_ID =
  process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
export const NEXT_PUBLIC_MODE_ENV =
  process.env.NEXT_PUBLIC_MODE_ENV === "development";
  
export const LIMIT = 10;
export const AUTH_LOGIN_URL = process.env.NEXT_PUBLIC_AUTH_LOGIN_URL || '/login';
export const AUTH_SIGNUP_URL = process.env.NEXT_PUBLIC_AUTH_SIGNUP_URL || '/register';
export const PUBLIC_IMAGE_URL =
  process.env.NEXT_PUBLIC_IMAGE_URL || "https://api-formative.appnofy.com";
export const PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api-formative.appnofy.com/v1';
export const LOGINBG = "/LoginBackGround.png";
export const SITELOGO = "/websiteLogo.png";
export const USERIMAGE = "/userImage.png";
export const QUIZ = "/quiz.svg";
export const SMALL_QUIZ = "/quiz_small.svg";
export const COURSES = "/courses.svg";
export const STUDENTS = "/students.svg";
export const QUESTIONS = "/questions.svg";
export const TEST_YOURSELF = "/test_yourself.svg";
export const TESTYOURSELF = "/test-yourself.svg";
export const HOW_AM_I_DOING = "/how-am-i-doing.svg";
export const PROFILE = "/profile.svg"
export const DASHBOARD = "/dashboard.svg"
export const QUESTIONS_SMALL = "/questions_small.svg"
export const STUDENTS_SMALL = "/students_small.svg"
export const COURSES_SMALL = "/courses_small.svg"
export const HOW_DOING = "/how_doing.svg"
export const PROFILE_SMALL = "/profile_small.svg"
export const SETTINGS = "/settings.svg"
export const QUIZ1 = '/quiz1.png'
export const TOKEN = 'token';
