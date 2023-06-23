import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Iconbox from "components/IconBox";
import FormattedMessage from "theme/FormattedMessage";
import {
  QUIZ,
  COURSES,
  STUDENTS,
  QUESTIONS,
  TESTYOURSELF,
  HOW_AM_I_DOING,
  PROFILE,
} from "configs";
import messages from "./messages";
import APP_ROUTES from "constants/RouteConstants";
import { useAuthContext } from "contexts/AuthContext";
import { generateGreetings } from "utils";

// Teacher's Dashboard Content
const teachersDashboardContent = [
  {
    title: "Quiz",
    description: "Create new quiz or make an edit to an existing quiz",
    image: QUIZ,
    link: APP_ROUTES.MANAGE_QUIZ,
  },
  {
    title: "Courses",
    description: "Manage existing courses or create a new course.",
    image: COURSES,
    link: APP_ROUTES.COURSES,
  },
  {
    title: "Students",
    description: "Enroll or remove students from a course.",
    image: STUDENTS,
    link: APP_ROUTES.STUDENTS,
  },
  {
    title: "Questions",
    description: "Edit existing questions or add new questions.",
    image: QUESTIONS,
    link: APP_ROUTES.QUESTIONS_CREATE_NEW,
  },
];

//Student's Dashboard Content

const studentsDashboardContent = [
  {
    title: "Take Quiz",
    description: "Take a quiz to test your abilities of the subjects.",
    image: QUIZ,
    link: APP_ROUTES.TAKE_QUIZ,
  },
  {
    title: "Test Yourself",
    description: "Ask yourself a questions to test your skills.",
    image: TESTYOURSELF,
    link: APP_ROUTES.TEST_YOUR_SELF,
  },
  {
    title: "How Am I Doing?",
    description: "Review your grade report and see how you are doing.",
    image: HOW_AM_I_DOING,
    link: APP_ROUTES.HOW_AM_I_DOING,
  },
  {
    title: "Profile",
    description: "Update your details or change your password.",
    image: PROFILE,
    link: APP_ROUTES.PROFILE,
  },
];

const DashboardScreen = () => {
  const { currentUser } = useAuthContext();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Box>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              fontSize: "48px",
              lineHeight: "56px",
              fontWeight: "300",
              maxWidth: "380px",
            }}
          >
            <div>
              Welcome {currentUser.first_name + " " + currentUser.last_name}
            </div>
            <div>{generateGreetings()}</div>
          </Typography>
          <Typography variant="body2">
            <FormattedMessage {...messages.pitch} />
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }} mt={1}>
          {teachersDashboardContent.map((item, index) => (
            <Paper
              key={index}
              sx={{
                padding: 0,
                borderRadius: "none",
                boxShadow: "none",
                width: "48%",
              }}
            >
              <Iconbox
                title={item.title}
                description={item.description}
                image={item.image}
              ></Iconbox>
            </Paper>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default DashboardScreen;
