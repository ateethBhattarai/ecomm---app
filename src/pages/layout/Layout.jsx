import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import Footer from "../../components/Footer";

const Layout = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <MaxWidthWrapper className={"flex-1 py-4"}>
        <Outlet />
      </MaxWidthWrapper>
      <Footer />
    </main>
  );
};

export default Layout;
