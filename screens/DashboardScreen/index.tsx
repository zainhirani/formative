import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Iconbox from "components/IconBox";
import PageLayout from "components/PageLayout";
import FormattedMessage from "theme/FormattedMessage";
import { QUIZ, COURSES, STUDENTS, QUESTIONS } from "configs";
import messages from './messages'


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

const DashboardScreen = () => {
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
                        <FormattedMessage  {...messages.title} />
                    </Typography>
                    <Typography variant="body2">
                        <FormattedMessage  {...messages.pitch} />
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }} mt={1}>
                    {boxContent.map((item, index) => (
                        <Paper
                            key={index}
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
                        </Paper>
                    ))}
                </Box>
            </Box>
        </PageLayout>
    );
};

export default DashboardScreen;
