import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { TEST_YOURSELF } from "configs";
import { COURSES } from "configs";
import { SMALL_QUIZ } from "configs";
import { DASHBOARD } from "configs";
import { QUESTIONS_SMALL } from "configs";
import { STUDENTS_SMALL } from "configs";
import { COURSES_SMALL } from "configs";
import { HOW_DOING } from "configs";
import { PROFILE_SMALL } from "configs";
import { SETTINGS } from "configs";
import Image from "theme/Image";

const MenuData = [
  {
    title: "Dashboard",
    icon: <Image src={DASHBOARD} lazyLoad={true} width={16} alt="dashboard" />,
    link: "/dashboard",
  },
  {
    title: "Quiz",
    icon: <Image src={SMALL_QUIZ} lazyLoad={true} width={16} alt="Quiz" />,
    link: "",
    subitems: [
      {
        id: 1,
        title: "Add Quiz",
        link: "",
      },
      {
        id: 2,
        title: "Manage Quiz",
        link: "",
      },
      {
        id: 3,
        title: "Quiz Results",
        link: "",
      },
      {
        id: 4,
        title: "Take Quiz",
        link: "",
      },
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
        link: "/teacher/questions/add",
      },
      {
        id: 2,
        title: "Upload Questions",
        link: "",
      },
      {
        id: 3,
        title: "Manage Questions",
        link: "",
      },
    ],
  },
  {
    title: "Students",
    icon: (
      <Image src={STUDENTS_SMALL} lazyLoad={true} width={16} alt="Students" />
    ),
    link: "",
  },
  {
    title: "Courses",
    icon: (
      <Image src={COURSES_SMALL} lazyLoad={true} width={16} alt="Courses" />
    ),
    link: "",
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
    link: "",
  },
  {
    title: "How am I doing",
    icon: (
      <Image src={HOW_DOING} lazyLoad={true} width={16} alt="How am I doing" />
    ),
    link: "",
  },
  {
    title: "Profile",
    icon: (
      <Image src={PROFILE_SMALL} lazyLoad={true} width={16} alt="Profile" />
    ),
    link: "/profile",
  },
  {
    title: "Settings",
    icon: <Image src={SETTINGS} lazyLoad={true} width={20} alt="Settings" />,
    link: "",
  },
  {
    title: "Logout",
    icon: <PowerSettingsNewOutlinedIcon />,
    link: "",
  },
];

export default MenuData;
