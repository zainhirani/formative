// @ts-nocheck
import React from "react";
import SideDrawer from "components/Drawer";

const DrawerQuestionsSection = (props: any) => {
  const { drawerOpen, setDrawerOpen } = props;

  return (
    <>
      <SideDrawer
        title="Add Questions"
        open={drawerOpen}
        onClose={handleDrawerCloseQuestion}
        isHelp={true}
      ></SideDrawer>
    </>
  );
};

export default React.memo(DrawerQuestionsSection);
