import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import Footer from "../../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <Outlet />
      </MaxWidthWrapper>
      <Footer />
    </>
  );
};

export default Layout;
