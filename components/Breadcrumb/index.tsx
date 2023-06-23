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
import SideDrawer from "components/Drawer";
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
  const [drawerOpenStudents, setDrawerOpenStudents] = useState(false);
  const [drawerOpenTooltip, setDrawerOpenTooltip] = useState(false);

  const handleDrawerCloseStudents = () => {
    setDrawerOpenStudents(false);
  };

  const handleDrawerTooltipClick = () => {
    console.log("open click tooltip");
    setDrawerOpenTooltip(true);
  };

  const handleDrawerTooltipClickClose = () => {
    console.log("close click tooltip");
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

  console.log("tooltip button render");

  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<ChevronRightIcon fontSize="medium" />}
      >
        <Link href="/" sx={{ color: "#7F7F7F", textDecoration: "none" }}>
          Dashboard
        </Link>
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography sx={{ color: "#404040" }} key={pathname}>
              {capitalizeFirstLetter(pathname)}
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
        content={modelData}
      />
    </>
  );
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default Breadcrumb;
