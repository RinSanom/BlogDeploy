import React, { useEffect, useState } from "react";
import BlogCard from "./components/card/BlogCart.jsx";
import ProfileCard from "./pages/auth/EditProfile";
import { Link } from "react-router-dom";
import PostCard from "./pages/auth/PostCard.jsx";
import Post from "./pages/auth/Post.jsx";
import BlogList from "./lib/BlogeList.jsx";
import Profile from "./pages/auth/Profile.jsx";
// import ChatHead from "./pages/auth/ChatHead.jsx";
import ChatBot from "./pages/auth/ChatBot.jsx";
function App() {
  return (
    <>
      {/* <PostCard /> */}
      {/* Hero section */}
      <div className="dark:bg-black">
        <div className="bg-blue-950 w-full dark:bg-black flex justify-between">
          <div className="flex image">
            <div className="my-auto ml-20">
              <div className="flex font-bold space-x-2">
                <h1 className="text-white text-lg">Welcome to</h1>
                <h1 className="text-amber-400 text-lg">STORY BRIDGE</h1>
              </div>
              <p className="text-white text-sm my-5">
                A knowledge-sharing platform that allows users to create, share,
                and explore insightful articles across various topics.
              </p>
              <Link
                to="/aboutus"
                className="text-white border-2 p-2 text-base hover:bg-white hover:text-blue-950"
              >
                About Us
              </Link>
            </div>
          </div>
          <img
            src="/assets/News-cuate.png"
            alt="block"
            className="max-h-72 object-cover rounded-xl mr-5"
          />
        </div>
      </div>
      <BlogList />
      {/* <ChatBot/> */}
    </>
  );
}
export default App;
