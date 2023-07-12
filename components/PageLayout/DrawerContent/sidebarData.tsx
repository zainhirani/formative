import { TEST_YOURSELF } from "configs";
import { SMALL_QUIZ } from "configs";
import { DASHBOARD } from "configs";
import { QUESTIONS_SMALL } from "configs";
import { STUDENTS_SMALL } from "configs";
import { COURSES_SMALL } from "configs";
import { HOW_DOING } from "configs";
import { PROFILE_SMALL } from "configs";
import { SETTINGS } from "configs";
import APP_ROUTES from "constants/RouteConstants";
import Image from "theme/Image";

export const COMMON_MENU = {
  dashboard: {
    title: "Dashboard",
    icon: <Image src={DASHBOARD} lazyLoad={true} width={16} alt="Dashboard" />,
    link: APP_ROUTES.DASHBOARD,
  },
  profile: {
    title: "Profile",
    icon: (
      <Image src={PROFILE_SMALL} lazyLoad={true} width={16} alt="Profile" />
    ),
    link: APP_ROUTES.PROFILE,
  },
  settings: {
    title: "Settings",
    icon: <Image src={SETTINGS} lazyLoad={true} width={20} alt="Settings" />,
    link: APP_ROUTES.SETTINGS,
  },
};

export const TEACHER_MENU = [
  /*

      Menus:
      -----------
    - Take Quiz
    - Make/Edit Quiz
    - Quiz Result
    - Upload Questions
    - Test Yourself
    - How am I doing
    - Add/Edit Questions
    - Manage Students
    - Manage Courses
    - Change Profile
    - Change Password
    - Logout

  */
  COMMON_MENU.dashboard,

  {
    title: "Quiz",
    icon: <Image src={SMALL_QUIZ} lazyLoad={true} width={16} alt="Quiz" />,
    link: "",
    subitems: [
      {
        id: 1,
        title: "Manage Quiz",
        link: APP_ROUTES.MANAGE_QUIZ,
      },
      {
        id: 2,
        title: "Quiz Results",
        link: APP_ROUTES.QUIZ_RESULTS,
      },

      //  :TODO: To be decide
      // {
      //   id: 1,
      //   title: "Add Quiz",
      //   link: "",
      // },

      //  :TODO: To be decide
      // {
      //   id: 3,
      //   title: "Take Quiz",
      //   link: "",
      // },
    ],
  },
  {
    title: "Questions",
    icon: (
      <Image src={QUESTIONS_SMALL} lazyLoad={true} width={16} alt="Questions" />
    ),
    link: "",
    subitems: [
      {
        id: 1,
        title: "Create New",
        link: APP_ROUTES.QUESTIONS_CREATE_NEW,
      },
      // {
      //   id: 2,
      //   title: "Upload Questions",
      //   link: APP_ROUTES.QUESTIONS_UPLOAD_QUESTIONS,
      // },
      {
        id: 3,
        title: "Manage Questions",
        link: APP_ROUTES.QUESTIONS_MANAGE_QUESTIONS,
      },
    ],
  },
  {
    title: "Students",
    icon: (
      <Image src={STUDENTS_SMALL} lazyLoad={true} width={16} alt="Students" />
    ),
    link: APP_ROUTES.STUDENTS,
  },
  {
    title: "Courses",
    icon: (
      <Image src={COURSES_SMALL} lazyLoad={true} width={16} alt="Courses" />
    ),
    link: APP_ROUTES.COURSES,
  },
  //  :TODO: To be decide
  // {
  //   title: "Test Yourself",
  //   icon: (
  //     <Image
  //       src={TEST_YOURSELF}
  //       lazyLoad={true}
  //       width={16}
  //       alt="Test Yourself"
  //     />
  //   ),
  //   link: "",
  // },
  // {
  //   title: "How am I doing",
  //   icon: (
  //     <Image src={HOW_DOING} lazyLoad={true} width={16} alt="How am I doing" />
  //   ),
  //   link: "",
  // },
];

export const STUDENT_MENU = [
  /*
Menus:
-----------
- Take Quiz
- Test Yourself
- How am I doing
- Change Profile
- Change Password
- Logout
  */
  COMMON_MENU.dashboard,
  {
    title: "Take Quiz",
    icon: <Image src={SMALL_QUIZ} lazyLoad={true} width={16} alt="Quiz" />,
    link: APP_ROUTES.TAKE_QUIZ,
  },
  {
    title: "Test Yourself",
    icon: (
      <Image
        src={TEST_YOURSELF}
        lazyLoad={true}
        width={16}
        alt="Test Yourself"
      />
    ),
    link: APP_ROUTES.TEST_YOUR_SELF,
  },
  {
    title: "How am I doing?",
    icon: (
      <Image src={HOW_DOING} lazyLoad={true} width={16} alt="How am I doing" />
    ),
    link: APP_ROUTES.HOW_AM_I_DOING,
  },
];
