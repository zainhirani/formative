import React, { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import APP_ROUTES from "constants/RouteConstants";
import HomeScreen from "screens/HomeScreen";
// import Button from "theme/Button";
// import Head from "next/head";
// import Image from "next/image";

const Home: NextPage = () => {
  const router = useRouter();

  // Redirect to '/dashboard' when the page loads

  // useEffect(() => {
  //   router.push(APP_ROUTES.DASHBOARD);
  // }, [router]);

  return (
    <>
      <HomeScreen />
    </>
  );
};

export default Home;
