import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import RootLayout from "./components/layout/RootLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import Profile from "./pages/auth/Profile.jsx";

import Verify from "./pages/auth/Verify.jsx";
import { AboutUs } from "./pages/Aboutus.jsx";
import EditProfile from "./pages/auth/EditProfile.jsx";
import ArticleDetail from "./pages/auth/ArticleDetail.jsx";
import PostCard from "./pages/auth/PostCard.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/editprofile",
        element: <EditProfile />,
      },
      {
        path: "/articledetail",
        element: <ArticleDetail />,
      },
      {
        path: "/postcard",
        element: <PostCard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-email",
    element: <Verify />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
