import React from "react";
import DashboardScreen from "screens/DashboardScreen";
import { useAuthContext } from "contexts/AuthContext";
import { signOut } from "next-auth/react";

const Dashboard = () => {
  const { currentUser } = useAuthContext();

  if (!currentUser?.id) {
    signOut({ callbackUrl: "/login" });
    localStorage.clear();
  }

  return <DashboardScreen />;
};

export default Dashboard;
