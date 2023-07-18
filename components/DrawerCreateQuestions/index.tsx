// @ts-nocheck
import React, { useState, useEffect } from "react";
import SideDrawer from "components/Drawer";
import AddQuestion from "screens/Teacher/QuestionsScreen/CreateNew";

const DrawerCreateQuestions = (props: any) => {
  const { drawerQuesCreateOpen, setDrawerQuesCreateOpen } = props;
  const handleDrawerCloseQuestion = () => {
    setDrawerQuesCreateOpen(false);
  };
  return (
    <>
      <SideDrawer
        title="Add Questions"
        open={drawerQuesCreateOpen}
        onClose={handleDrawerCloseQuestion}
        isHelp={true}
        sx={{ width: "100%", maxWidth: "100%" }}
      >
        <AddQuestion
          drawerQuesCreateOpen={drawerQuesCreateOpen}
          setDrawerQuesCreateOpen={setDrawerQuesCreateOpen}
        />
      </SideDrawer>
    </>
  );
};

export default React.memo(DrawerCreateQuestions);
