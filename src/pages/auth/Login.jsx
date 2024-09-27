import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { login } from "./action/authAction";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .matches(
        /^[a-zA-Z0-9_]*$/,
        "Username must contain only letters, numbers, and underscores"
      )
      .required("Username is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
      )
      .required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const loginRes = await login(values);
      console.log("Login Response:", loginRes); // Log the entire response for debugging
      if (loginRes.access_token) {
        toast.success("Login Successfully");
        console.log("Navigating to home...");
        navigate("/");
      } else if (loginRes.message) {
        toast.error(loginRes.message);
      }
    } catch (error) {
      toast.error("An error occurred during login. Please try again.");
    } finally {
      resetForm();
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r dark:bg-black">
      <div className="w-auto gap-8 flex p-8 bg-white rounded-lg shadow-lg">
        <div className="w-[500px]">
          <div className="w-full flex justify-center">
            <img
              src="./public/assets/LogoFinal.png"
              className="w-[100px]"
              alt="Logo"
            />
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome to Story Bridge
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div className="relative">
                  <Field
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-0 mr-3 mt-3 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-5 w-full bg-primary200 hover:bg-primary100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
          <div className="mt-6 text-center">
            <p className="text-gray-600">Don't have an account?</p>
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
        <div>
          <img
            src="/assets/Sign up-bro.png"
            alt="Hero Image"
            className="max-h-96 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
