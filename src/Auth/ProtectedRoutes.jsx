import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  if (user) {
    return children;
  }
  navigate("/login");
  return <h1>You are not authorized to access this page</h1>;
};

export default ProtectedRoutes;
