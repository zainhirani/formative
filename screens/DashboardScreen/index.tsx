import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Iconbox from "components/IconBox";
import PageLayout from "components/PageLayout";
import DataTable from "components/DataTable";
import FormattedMessage from "theme/FormattedMessage";
import { QUIZ, COURSES, STUDENTS, QUESTIONS } from "configs";
import messages from "./messages";
import SideDrawer from "components/Drawer";

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

let COLUMN_NAME = {
  ID: "Id",
  COLLEGE_LOGO: "Logo",
  COLLEGE_NAME: "College Name",
  COLLEGE_LOCATION: "Location",
  ACTIONS: "Actions",
};

const collegesData = [
  {
    Id: 1,
    CollegeImageURL: "https://picsum.photos/200/300",
    CollegeName: "College 1",
    Location: "Location",
    Address: "Abc Address",
    Contact: "123456678",

    TotalStudentsHired: "1",
    Date: "01-01-2022",
    Team: "",
    Drives: [],
  },
  {
    Id: 2,
    CollegeName: "College 2",
    CollegeImageURL: "https://picsum.photos/200/300",
    Location: "Location",
    Address: "Abc Address",
    Contact: "123456678",

    TotalStudentsHired: "2",
    Date: "02-01-2022",
    Team: "",
    Drives: [],
  },
  {
    Id: 3,
    CollegeName: "College 3",
    Location: "Location",
    Address: "Abc Address",
    Contact: "123456678",
    TotalStudentsHired: "3",
    Date: "03-01-2022",
    Team: "",
    CollegeImageURL: "https://picsum.photos/200/300",
    Drives: [],
  },
  {
    Id: 4,
    CollegeName: "College 4",
    Location: "Location",

    Address: "Abc Address",
    Contact: "123456678",

    TotalStudentsHired: "4",
    Date: "04-01-2022",
    Team: "",
    CollegeImageURL: "https://picsum.photos/200/300",
    Drives: [],
  },
  {
    Id: 5,
    CollegeName: "College 5",
    Location: "Location",

    Address: "Abc Address",
    Contact: "123456678",

    TotalStudentsHired: "5",
    Date: "05-01-2022",
    Team: "",
    CollegeImageURL: "https://picsum.photos/200/300",
    Drives: [],
  },
  {
    Id: 6,
    CollegeName: "College 6",
    Location: "Location",

    Address: "Abc Address",
    Contact: "123456678",

    TotalStudentsHired: "6",
    Date: "06-01-2022",
    Team: "",
    CollegeImageURL: "https://picsum.photos/200/300",
    Drives: [],
  },
];

const DashboardScreen = () => {
  let config = [
    {
      columnName: COLUMN_NAME.ID,
      render: () => {
        return "-";
      },
    },
    {
      columnName: COLUMN_NAME.COLLEGE_LOGO,
      render: () => {
        return "-";
      },
    },
    {
      columnName: COLUMN_NAME.COLLEGE_NAME,
      render: () => {
        return "-";
      },
    },
    {
      columnName: COLUMN_NAME.COLLEGE_LOCATION,
      render: () => {
        return "-";
      },
    },
    {
      columnName: COLUMN_NAME.ACTIONS,
      render: () => {
        return "-";
      },
    },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <PageLayout title={"Dashboard"}>
      <Box sx={{ flexGrow: 1 }}>
        {/* <DataTable data={collegesData} config={config} /> */}

        <div>
          <button onClick={handleDrawerOpen}>Open Drawer</button>
          <SideDrawer
            title="Dr. Kevin B. this is how Question 10/2 appears to student"
            open={drawerOpen}
            onClose={handleDrawerClose}
            isHelp={true}
          >
            {/* Your content goes here */}
            <h1>Drawer Content</h1>
            <p>This is the content of the drawer.</p>
          </SideDrawer>
        </div>

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
            <FormattedMessage {...messages.title} />
          </Typography>
          <Typography variant="body2">
            <FormattedMessage {...messages.pitch} />
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
    </PageLayout>
  );
};

export default DashboardScreen;
