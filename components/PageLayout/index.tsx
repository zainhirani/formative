import React, {useEffect} from "react";
import { Box, Container } from "@mui/material";
import AppBarComponent from "./AppBar";
import Drawer from "./Drawer";
import DrawerContent from "./DrawerContent";
import { DrawerHeader } from "./DrawerContent/Styled";
import { useAuthContext } from "contexts/AuthContext";
import { useRouter } from "next/router";
import { useRegisterDetail } from "providers/Auth";
interface Props {
  children?: JSX.Element;
  title?: any;
  icon?: any;
  subText?: string;
  iconAngle?: boolean;
  onIconClick?: () => void;
  hide?:boolean
}

const PageLayout = (props: Props) => {
  const primaryDrawerWidth = 220;
  const [open, setOpen] = React.useState(true);
  // const {currentUser} = useAuthContext()
  const currentUser = useRegisterDetail();
  const router = useRouter()
console.log(open,"open");


  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(!open);
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    
    
    <>
     <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      {!currentUser?.data ? null :
      <>
      <Box
        sx={{
          width: open ? primaryDrawerWidth : 50,
        }}
        component="nav"
        >
        <Drawer
          open={open}
          width={open ? primaryDrawerWidth : 50}
          onClose={handleDrawerClose}
          >
          <DrawerContent open={open} clickHandler={handleDrawerClose} />
        </Drawer>
      </Box>
      {/* Header with breadcrumb */}

      <AppBarComponent
        title={props.title}
        icon={props.icon}
        iconAngle={props.iconAngle}
        subText={props.subText}
        open={open}
        clickHandler={handleDrawerOpen}
        onIconClick={props.onIconClick}
      />
          </>
}
      {/* Main  */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingLeft: { md: "24px", xs: "60px" },
          paddingRight: { md: "24px", xs: "24px" },
          paddingTop:currentUser?.data ?  '100px' : '0px',
          width: { sm: `calc(100% - ${primaryDrawerWidth}px )` },
          marginBottom: "0",
          background: (theme) => theme.palette.primary.light,
        }}
      >
        {props.children ? props.children : null}
      </Box>
    </Box>

    </>
    
  );
};

export default PageLayout;
