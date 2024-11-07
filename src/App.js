import React, { useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import AdminRoutes from "./Auth/AdminRoutes";
import Destination from "./Pages/Destinations";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slices/userSlice";
import UserDestinations from "./Pages/UserDestinations";
import AuthenticationRoutes from "./Auth/AuthenticationRoutes";

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user?.role, token);
    if (user?.role && token && isAuthenticated) {
      dispatch(setUser({ ...user, token }));
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserDestinations />} />
        <Route
          path="/signup"
          element={
            <AuthenticationRoutes>
              <SignUp />
            </AuthenticationRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <AuthenticationRoutes>
              <Login />
            </AuthenticationRoutes>
          }
        />
        <Route
          path="/destinations"
          element={
            <AdminRoutes>
              <Destination />
            </AdminRoutes>
          }
        />
      </Routes>
      <Toaster richColors position="top-center" />
      <Footer />

    </BrowserRouter>
  );
};

export default App;
