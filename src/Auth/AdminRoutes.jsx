import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [user]);
  console.log(user);

  if (user?.role === "admin") {
    return children;
  }

  // return <h1>You are not an admin</h1>;
  return children
};

export default AdminRoutes;
