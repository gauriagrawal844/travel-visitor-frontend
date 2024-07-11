import React from "react";
import SignUp from "./Pages/SignUp";
import { Toaster, toast } from "sonner";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./Pages/Destinations";
import 'react-quill/dist/quill.snow.css';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/destinations" element={<Destination />} />
      </Routes>
      <Toaster richColors position="top-center" />;
    </BrowserRouter>
  );
};

export default App;
