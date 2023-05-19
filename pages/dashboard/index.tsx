import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Iconbox from "components/IconBox";
import PageLayout from "components/PageLayout";
import { QUIZ } from "configs";
import { COURSES } from "configs";
import { STUDENTS } from "configs";
import { QUESTIONS } from "configs";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const boxContent = [
  {
    title: "Quiz",
    description: "Create new quiz or make an edit to an existing quiz",
    image: QUIZ,
  },
  {
    title: "Courses",
    description: "Manage existing courses or create a new course.",
    image: COURSES,
  },
  {
    title: "Students",
    description: "Enroll or remove students from a course.",
    image: STUDENTS,
  },
  {
    title: "Questions",
    description: "Edit existing questions or add new questions.",
    image: QUESTIONS,
  },
];

const index = () => {
  return (
    <PageLayout>
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
            Welcome Kevin B. Good Morning!
          </Typography>
          <Typography variant="body2">What do you want to do?</Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }} mt={1}>
          {boxContent.map((item) => (
            <Item
              sx={{
                padding: 0,
                borderRadius: "none",
                boxShadow: "none",
                width: "49%",
              }}
            >
              <Iconbox
                title={item.title}
                description={item.description}
                image={item.image}
              ></Iconbox>
            </Item>
          ))}
        </Box>
      </Box>
    </PageLayout>
  );
};

export default index;
