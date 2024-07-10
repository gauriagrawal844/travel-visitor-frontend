import React from "react";
import SignUp from "./Pages/SignUp";
import { Toaster, toast } from "sonner";
const App = () => {
  return (
    <>
      <SignUp />
      <Toaster richColors position="top-center" />;
    </>
  );
};

export default App;
