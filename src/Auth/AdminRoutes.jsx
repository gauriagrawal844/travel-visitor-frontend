import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (!user?.role) {
      navigate("/login");
    }
  }, [navigate, user]);

  if (!user?.role) {
    return <h1>You are not authorized to access this page</h1>;
  }

  if (user.role === "admin") {
    return children;
  }

  return <h1>You are not authorized to access this page</h1>;
};

export default AdminRoutes;
