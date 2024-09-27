import { Formik, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    console.log("Form submitted:", values);
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    navigate("/verifyotp");
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r dark:bg-black">
      <div className="w-auto gap-8 flex p-8 bg-white rounded-lg shadow-lg">
        <Formik initialValues={{ email: "" }} onSubmit={handleSubmit}>
          {() => (
            <form>
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Forgot Password
              </h2>
              <p className="mb-4">
                Please enter your email or mobile number to search for <br />{" "}
                your account.
              </p>
              <div className="relative mb-4">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                className={`w-full bg-primary200 text-white py-2 rounded-md transition duration-200 ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "hover:bg-primary100"
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 0116 0H4z"
                      />
                    </svg>
                    Loading...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
              <div className="mt-4 text-center">
                <Link to="/login" className="text-primary100 hover:underline">
                  Back to Login
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
