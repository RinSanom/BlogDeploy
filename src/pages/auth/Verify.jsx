import React from "react";
import { useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { verify } from "../../pages/auth/action/authAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Verify() {
  const location = useLocation();
  console.log("location", location);
  //   handel verify
  const handleVerify = async (values) => {
    const verifyRes = await verify(values);
    {
      verifyRes.message && toast.success(verifyRes.message);
    }
    {
      verifyRes.error && toast.error(verifyRes.error);
    }
  };
  return (
    <section className="flex justify-center mt-10 dark:bg-black">
      <dev className="w-1/2 bg-slate-100 p-5 rounded-md">
        <Formik
          initialValues={{
            email: location?.state?.email,
            otp_code: "",
          }}
          validationSchema={Yup.object({
            otp_code: Yup.string().required("otp code is required"),
          })}
          onSubmit={(values) => {
            console.log("values", values);
            handleVerify(values);
          }}
        >
          <Form>
            <div className="mt-5">
              <label
                htmlFor="otp_code"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                OTP Code
              </label>
              <Field
                type="text"
                name="otp_code"
                id="otp_code"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter OTP Code"
              ></Field>
              <ErrorMessage
                className="text-red-600"
                component="div"
                name="otp_code"
              ></ErrorMessage>
            </div>
            <button
              type="submit"
              className="mt-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Verify
            </button>
          </Form>
        </Formik>
      </dev>
      <ToastContainer />
    </section>
  );
}
