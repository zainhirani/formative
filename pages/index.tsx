import React, { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import HomeScreen from "screens/HomeScreen";
import APP_ROUTES from "constants/RouteConstants";
// import Button from "theme/Button";
// import Head from "next/head";
// import Image from "next/image";

const Home: NextPage = () => {
  const router = useRouter();

  // Redirect to '/dashboard' when the page loads

  useEffect(() => {
    router.push(APP_ROUTES.DASHBOARD);
  }, []);

  return (
    <>
      <HomeScreen />
    </>
  );
};

export default Home;
