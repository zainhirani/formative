import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
const MenuData = [
  {
    title: "Dashboard",
    icon: <DashboardOutlinedIcon />,
    link: "/dashboard",
  },
  {
    title: "Quiz",
    icon: <ShoppingBagIcon />,
    link: "/app/products",
  },
  {
    title: "Questions",
    icon: <HelpOutlineOutlinedIcon />,
    link: "",
  },
  {
    title: "Students",
    icon: <PeopleAltOutlinedIcon />,
    link: "",
  },
  {
    title: "Courses",
    icon: <AutoStoriesOutlinedIcon />,
    link: "",
  },
  {
    title: "Test Yourself",
    icon: <ReceiptLongOutlinedIcon />,
    link: "",
  },
  {
    title: "How am I doing",
    icon: <DescriptionOutlinedIcon />,
    link: "",
  },
  {
    title: "Profile",
    icon: <PersonOutlineOutlinedIcon />,
    link: "/profile",
  },
  {
    title: "Settings",
    icon: <DescriptionOutlinedIcon />,
    link: "",
  },
];

export default MenuData;
