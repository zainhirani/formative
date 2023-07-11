import React, { useState } from "react";
import {
  Breadcrumbs,
  Button,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { useRouter } from "next/router";
import { styled } from "@material-ui/core";
import HelpModal from "components/HelpPage";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#005E84",
    color: "#fff",
    maxWidth: 234,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #EAEAEA",
    padding: 20,
  },
}));

const Breadcrumb = () => {
  const router = useRouter();
  const pathnames = router.asPath.split("/").filter((x) => x);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerOpenTooltip, setDrawerOpenTooltip] = useState(false);
  
  const handleDrawerTooltipClick = () => {
    setDrawerOpenTooltip(true);
  };

  const handleDrawerTooltipClickClose = () => {
    setDrawerOpenTooltip(false);
  };

  const modelData = [
    {
      title: "Filters",
      description:
        "Use the course and folder drop down menus to filter your completed and partially completed quizzes.",
    },
    {
      title: "Difficulty",
      description:
        "The difficulty is simply the number of times the question has been shown divided by the number of attempt all users have made to determine the correct answer.",
    },
    {
      title: "Std. Difficulty",
      description:
        "This is the more traditional difficulty score, the number of error free responses to a particular quiz.",
    },
    {
      title: "Quiz",
      description:
        "Click on the quiz number that you want to see student and question level scoring for a particular quiz.",
    },
  ];
  const dataEditQuiz = [
    {
      title: "Filters:",
      description:
        "Use the filters to limit the number of assessments that you see",
    },
    {
      title: "Status: ",
      listItem: [
        {
          content: "Draft - An assessment whose start time occurs after this moment and has not been distributed to any students.",
        },
        {
          content: "Available - An assessment whose start time occurs before this moment and stop time occurs after this moment and has not beeen distributed to any students.",
        },
        {
          content: "Distributed - As assessment that has been made available to students, but none of them have started to take the assessment and the stop time occurs after this moment.",
        },
        {
          content: "Ongoing - An assessment where one or more student has completed the assessment. However, the stop time occurs after this moment.",
        },
        {
          content: "Completed - Any assessment where the stop time occurred before this momment",
        },
      ],
    },
    {
      title: "Quiz #:",
      description:
        "Click on a quiz number to view or edit the properties of an assessment.",
    },
  ];
  const dataQuizResults = [
    {
      title: "Filters",
      description:
        "Use the course and folder drop down menus to filter your completed and partially completed quizzes.",
    },
    {
      title: "Difficulty",
      description:
        "The difficulty is simply the number of times the question has been shown divided by the number of attempt all users have made to determine the correct answer.",
    },
    {
      title: "Std. Difficulty",
      description:
        "This is the more traditional difficulty score, the number of error free responses to a particular quiz.",
    },
    {
      title: "Quiz #",
      description:
        "Click on the quiz number that you want to see student and question level scoring for a particular quiz.",
    },
  ];
  const dataEditQuestion = [
    {
      title: "Folder:",
      description:
        "The name of the folder where the question can be found. The folder of a question can be changed by editing the question.",
    },
    {
      title: "Filter:",
      description:
        "Use the Folder, Type, Category drop down menus to filter your questions. N.B. - The first Category drop down contains only primary categories, while the second and third Category drop downs contain all categories. The categories can be combined with logical AND and OR.",
    },
    {
      title: "New Question:",
      description:
        "Lets you write a new question rather than uploading a question from ExamSoft.",
    },
    {
      title: "Sort Questions:",
      description:
        "Filtered questions can be sorted by clicking on the header row or the table.",
    },
    {
      title: "ID:",
      description:
        "Click on the (blue) ID to edit a particular question.",
    },
    {
      title: "Type:",
      description:
        "Short answer questions (not yet implemented) have the code SA. Numeric questions (not yet implemented) have the code NUM. Naturally ordered (N) and Randomized (R) Multiple Choice (MC) and Multiple Select (MS) questions have the codes MCN, MCR, MSN, and MSR, respectively. Multiple Choice and Multiple Select filters that are order insensitive are MCx and MSx, respectively.",
    },
    {
      title: "Diff:",
      description:
        "If the question has been used in the past, the difficulty (Diff) is the number of times the question has been asked divided by the number of times students needed to answer. For multiple select questions the number of times need to answer is adjusted for the number of correct answers.",
    },
    {
      title: "Stem...:",
      description:
        "Click on the (pink) Stem to view a particular question.",
    },
  ];
  const dataUploadQuestion = [
    {
      title: "Examsoft formated question file:",
      listItem: [
        {
          content: "Obtain an RTF file from Examsoft. In the Questions section of Examsoft find a category (strongly prefered) or folder of questions that you want to download. Hover over the gear symbol, choose Export Questions, select RTF and hit OK. Unzip the downloaded file and edit the RTF file in microsoft word.",
        },
        {
          content: "Remove any short answer questions from the file. This program does not yet handle this sort of question.",
        },
        {
          content: "Replace any '/' (slash) characters from any categories",
        },
        {
          content: "Trim the bottom of the file by removing any blank lines.",
        },
        {
          content: 'Use save As a plain text file. When the File Conversion popup appears, click "Other Encodings" and choose Unicode (UTF-8). ',
        },
        {
          content: 'Click Choose File and find the .txt file to be uploaded. ',
        },
      ],
    },
    {
      title: "Primary Category Prefix:",
      description:
        'Every question has a primary category and up to seven additional categories. The primary category will be able to be used by students in any question that is deemed to be "public." In general, the primary category will be the first category used by Examsoft. However, if you have systematically labeled your course categories with a prefix, this prefix can be used to select that category to be primary.',
    },
    {
      title: "Examsoft formated question file:",
      listItem: [
        {
          content: "For instance, if you use BT as your Primary Category Prefix, then Bloom's Taxonomy will be the primary category, since Bloom's Taxonomy categories are coded as BT01 - Recall, BT02 - Interpretation, BT03 - Problem Solving.",
        },
        {
          content: "Be aware that if you use B as your Primary Category Prefix, the you would get either Appendix B categories or Appendix 1 B01, B02, B03, ... categories as your primary category for a question that used both sets of categories.",
        },
        {
          content: "The good news is that you can go and edit individual categories in the Edit Questions section of this program.",
        },
      ],
    },
    {
      title: "Upload Questions:",
      description:
        'Once questions have been uploaded you will get a report on how the process went. Try not to upload the questions twice since in creates a mess. At the bottom of the report, you will find a "Return" button.',
    },
  ];
  const currentUrl =  router.pathname; 
  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<ChevronRightIcon fontSize="medium" />}
      >
        {/* <Link href="/" sx={{ color: "#7F7F7F", textDecoration: "none" }}>
          Dashboard
        </Link> */}
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          
          if(pathname == 'questions' || pathname == 'quiz'){
            return (
              <Typography
                key={pathname}
                sx={{ color: "#7F7F7F" }}
                component="span"
              >
                {capitalizeFirstLetter(pathname)}
              </Typography>
            );
          }
          
          return isLast ? (
            <Typography sx={{ color: "#404040" }} key={pathname}>
              {capitalizeFirstLetter(pathname.replace(/-/g, " "))}
            </Typography>
          ) : (
            <Link
              key={pathname}
              href={routeTo}
              sx={{ color: "#7F7F7F", textDecoration: "none" }}
            >
              {capitalizeFirstLetter(pathname)}
            </Link>
          );
        })}
      </Breadcrumbs>
      <HtmlTooltip
        title={
          <React.Fragment>
            {"If you ever need help, this is where to go for support."}
            <br /> <br />
            <Typography color="inherit">
              <b>Got it</b>
            </Typography>
          </React.Fragment>
        }
      >
        <HelpIcon
          onClick={handleDrawerTooltipClick}
          sx={{
            color: (theme) => theme.palette.primary.main,
            marginLeft: "8px",
          }}
          fontSize="medium"
        />
      </HtmlTooltip>
      {/* <SideDrawer  open={drawerOpenTooltip}
          onClose={handleDrawerTooltipClickClose} title="Tooltip">
            <Typography>savita bhabi</Typography>
      </SideDrawer> */}
      <HelpModal
        title="How this page works?"
        isOpen={drawerOpenTooltip}
        onClose={handleDrawerTooltipClickClose}
        heading="This article helps you to understand and how to perform different operations on this page."
        description="If you still need help then please send us an email to get email support. Thanks!"
        content={
          currentUrl == "/teacher/quiz/add" ? dataEditQuiz : 
          currentUrl == "/teacher/quiz/quiz-results" ? dataQuizResults : 
          currentUrl == "/teacher/questions/add" ? dataEditQuestion : 
          currentUrl == "/teacher/questions/manage" ? dataEditQuestion : 
          currentUrl == "/teacher/questions/upload" ? dataUploadQuestion : modelData }
        // content={ modelData }
        sx={{ width: drawerOpenTooltip ? "initial" : "0px" }}
      />
    </>
  );
};

const capitalizeFirstLetter = (string: string) => {
  // return string.charAt(0).toUpperCase() + string.slice(1);
  return string.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
};

export default Breadcrumb;
