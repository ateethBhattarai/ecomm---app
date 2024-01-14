import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";

const Layout = () => {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <Outlet />
      </MaxWidthWrapper>
    </>
  );
};

export default Layout;
