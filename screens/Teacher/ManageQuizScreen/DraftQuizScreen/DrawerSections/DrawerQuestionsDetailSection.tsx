import SideDrawer from "components/Drawer";
import { useAppState } from "contexts/AppStateContext";
import React, { useState } from "react";

const DrawerQuestionsDetailSection = () => {
  const { state, setState } = useAppState();
  const handleDrawerCloseQuestion = () => {
    setState(false);
  };
  return (
    <>
      <SideDrawer
        title="Add Questions"
        open={state}
        onClose={handleDrawerCloseQuestion}
      >
        Test
      </SideDrawer>
    </>
  );
};

export default DrawerQuestionsDetailSection;
