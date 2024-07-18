import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  if (user?.role) return <h1>User is logged in</h1>;
  return <div>Navbar</div>;
};

export default Navbar;
