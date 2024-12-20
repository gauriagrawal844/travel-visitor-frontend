import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import InputField from "../components/InputField";
import { login } from "../services/userApi";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
//useDispatch => to update the state
//useSelector => to get the state
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        email,

        password,
      });
      setEmail("");
      setPassword("");
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("isAdmin", response.data.user.role === "admin");
      localStorage.setItem("isAuthenticated", true);
      dispatch(setUser({ ...response.data.user, token: response.data.token }));
      toast.success(response?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FtS5Nmw19_UejUFZJKSVuA_z517tSDaJ6g&s"
            className="mx-auto h-14 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-2">
            <InputField
              label="Email address"
              type="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <InputField
              label="Password"
              type="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <Link
              to="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Don't have an account?
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
