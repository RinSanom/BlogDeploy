import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { IoMdBookmark } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import BlogCard from "../../components/card/BlogCart";
import { Link } from "react-router-dom";

export default function ArticleDetail() {
  const location = useLocation();
  const { thumbnail, title, content, profileUrl, username, updated_at, bio } =
    location.state || {}; // Ensure we handle undefined state
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(30);
  const [isLiked, setIsLiked] = useState(false);
  const [bookmarkCount, setBookmarkCount] = useState(30);

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => {
      if (!prev) {
        setBookmarkCount(bookmarkCount + 1);
      } else {
        setBookmarkCount(bookmarkCount - 1);
      }
      return !prev;
    });
  };

  const handleLikeClick = () => {
    setIsLiked((prev) => {
      if (prev) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }
      return !prev;
    });
  };

  return (
    <>
      <div className="container mx-auto px-4  dark:bg-black dark:text-white">
        <div className="shadow-lg p-6 ">
          <div className="AutorAcc flex items-center mb-6">
            <div className="profileAutor">
              <Link
                to="/profile"
                state={{
                  thumbnail,
                  title,
                  bio,
                  content,
                  profileUrl,
                  username,
                }}
              >
                <img
                  className="w-32 h-32 rounded-full object-cover"
                  src={profileUrl}
                  alt="Profile"
                />
              </Link>
            </div>
            <div className="infoAutor ml-4">
              <h3 className="text-2xl font-semibold">
                {username || "Unknown User"}
              </h3>
              <p className="text-gray-500 text-sm dark:text-white">
                Last updated:{" "}
                {updated_at ? new Date(updated_at).toLocaleString() : "N/A"}
              </p>
            </div>
          </div>
          <h1 className="text-xl mt-4 mb-4">{title}</h1>
          <img
            src={thumbnail}
            alt="Thumbnail"
            className="w-full h-96 object-contain mb-4"
          />
          <p className="text-gray-700 mb-8 dark:text-white">{content}</p>
          <div className="flex justify-between mt-4">
            <button
              onClick={handleLikeClick}
              className="text-2xl flex items-center transition-transform duration-200 hover:scale-110"
            >
              {isLiked ? (
                <FaHeart className="text-red-500 mr-2" />
              ) : (
                <FaRegHeart className="mr-2" />
              )}
              <span className="text-lg">{likes}</span>
            </button>
            <button
              onClick={handleBookmarkClick}
              className="text-2xl flex items-center transition-transform duration-200 hover:scale-110"
            >
              {isBookmarked ? (
                <IoMdBookmark className="mr-2" />
              ) : (
                <CiBookmark className="mr-2 text-gray-500" />
              )}
              <span className="text-lg">{bookmarkCount}</span>
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-10 ml-5">More Posts</h2>
      <div className="moresPost flex gap-4 justify-center items-center dark:text-white">
        <BlogCard
          thumbnail={thumbnail}
          username={username}
          updated_at={updated_at}
          profileUrl={profileUrl}
          title={title}
          content={content}
        />
      </div>
    </>
  );
}
