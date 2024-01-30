import React from "react";
import Sidebar from "./Sidebar";
import Layout from "./Layout";
import "../../styles/Contents.css";

const Contents = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-contents">
        <Layout />
      </div>
    </div>
  );
};

export default Contents;
