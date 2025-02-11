
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const RootLayout = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Outlet /> 
      <Footer/>
    </>
  );
};

export default RootLayout;
