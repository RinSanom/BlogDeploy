import React, { useState } from "react";
import {
  FaRegHeart,
  FaHeart,
  FaBookmark,
  FaRegBookmark,
  FaShare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BlogCard({
  thumbnail,
  title,
  content,
  username,
  updated_at,
  profileUrl,
  bio,
} = {}) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleShare = () => {
    setShares((prev) => prev + 1);
    console.log(`Shared: ${title}`);
  };

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => {
      const newBookmarkState = !prev;
      setBookmarks((prev) => (newBookmarkState ? prev + 1 : prev - 1));
      console.log(`Bookmark: ${title}`);
      return newBookmarkState;
    });
  };

  return (
    <div className=" pt-5 mx-5">
      <div className="grid grid-col-1 max-w-screen-xl m-auto px-4 ">
        <div className="dark:bg-black dark:text-white rounded-lg shadow-lg overflow-hidden w-[300px] h-[400px] border border-gray-200 transition-transform transform hover:scale-105">
          <Link
            to="/articledetail"
            state={{
              thumbnail,
              title,
              content,
              username,
              updated_at,
              profileUrl,
              bio,
            }}
          >
            <img
              src={thumbnail}
              alt="Thumbnail"
              className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90"
            />
            <div className="flex items-center p-2">
              <Link
                to="/profile"
                state={{ profileUrl, username, bio, thumbnail, title, content }}
              >
                <img
                  src={
                    profileUrl ||
                    "https://i.pinimg.com/564x/69/fb/1f/69fb1f2853d3d2ac18f2faf3fb9c8774.pg"
                  }
                  className="w-12 h-12 rounded-full object-cover"
                  alt="Profile"
                />
              </Link>
              <div className="ml-3">
                <span className="font-semibold text-base">{username}</span>
                <span className="text-gray-400 text-xs block">
                  {new Date(updated_at).toLocaleString()}
                </span>
              </div>
            </div>
            <div className="p-4 h-24">
              <h2 className="text-lg font-semibold mb-2 line-clamp-1">
                {title}
              </h2>
              <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                {content}
              </p>
            </div>
          </Link>
          <div className="flex flex-col sm:flex-row justify-between p-4 text-md text-gray-600 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-2 sm:mb-0">
              <button onClick={handleLikeClick} className="flex items-center">
                {isLiked ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart />
                )}
              </button>
              <span className="badge text-sm">{likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
