import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const AuthenticationRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else if (
      location.pathname === "/login" ||
      location.pathname === "/signup"
    ) {
      navigate("/");
    }
  }, [isAuthenticated, navigate, location.pathname]);

  return children;
};

export default AuthenticationRoutes;
