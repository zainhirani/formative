import HomeIcon from "@mui/icons-material/Home";
import PaidIcon from "@mui/icons-material/Paid";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const MenuData = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/dashboard",
  },
  {
    title: "Quiz",
    icon: <ShoppingBagIcon />,
    link: "/app/products",
  },
  {
    title: "Questions",
    icon: <ShoppingCartIcon />,
    link: "",
  },
  {
    title: "Students",
    icon: <PaidIcon />,
    link: "",
  },
  {
    title: "Courses",
    icon: <PaidIcon />,
    link: "",
  },
  {
    title: "Test Yourself",
    icon: <PaidIcon />,
    link: "",
  },
  {
    title: "How am I doing",
    icon: <PaidIcon />,
    link: "",
  },
];

export default MenuData;
