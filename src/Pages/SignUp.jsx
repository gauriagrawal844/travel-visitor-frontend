import React, { useState } from "react";
import InputField from "../components/InputField";
import { signUp } from "../services/userApi";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUp({
        email,
        name,
        phoneNo: phone,
        password,
        confirmPassword,
      });
      setEmail("");
      setName("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      navigate("/login")
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
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
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
              label="Name"
              type="text"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <InputField
              label="Phone Number"
              type="number"
              name="phone"
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />

            <InputField
              label="Password"
              type="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <InputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Already have an account?
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
