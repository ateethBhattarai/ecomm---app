import React from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const loggedin = true;
  if (loggedin) {
    return children;
  } else {
    return navigate("/login");
  }
};

export default Protected;
