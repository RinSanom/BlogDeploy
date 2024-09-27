import React, { useState } from "react";
import {
  FaRegHeart,
  FaHeart,
  FaBookmark,
  FaRegBookmark,
  FaShare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function ProductCard({ thumbnail, title, content, id }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [bookmarks, setBookmarks] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shares, setShares] = useState(0); // State for share count

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };
  const handleShare = () => {
    setShares((prev) => prev + 1); // Increment share count
    console.log(`Shared: ${title}`);
  };
  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => {
      const newBookmarkState = !prev;
      setBookmarks((prev) => (newBookmarkState ? prev + 1 : prev - 1));
      return newBookmarkState;
    });
  };
  return (
    <div className="flex mx-28 dark:bg-black">
      <div className="bg-white  rounded-lg overflow-hidden w-80 border-2">
        <Link to="/articledetail ">
          <img src={thumbnail} alt="" className="w-full h-48 object-cover" />
          <div className="p-4">
            <div className="flex items-center mb-2">
              <img src="" alt="" className="rounded-full mr-2" />
              <div>
                <p className="text-sm font-semibold">Natali Craig</p>
                <p className="text-xs text-gray-500">14 Jan 2022</p>
              </div>
            </div>
            <h2 className="text-lg font-bold mb-2 line-clamp-1">{title}</h2>
            <p className="text-gray-700 text-sm mb-4 line-clamp-2">{content}</p>
          </div>
        </Link>
        <div className="w-full flex justify-between text-md mx-3  ">
          <div className="flex gap-2 text-gray-600 mb-2">
            <span className="badge">
              <button onClick={handleLikeClick}>
                {isLiked ? <FaHeart /> : <FaRegHeart />}
              </button>
            </span>
            <span className="badge">{likes}</span>
          </div>
          <div className="flex gap-2 text-gray-600">
            <span className="badge">
              <button onClick={handleBookmarkClick}>
                {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
              </button>
            </span>
            <span className="badge">{bookmarks}</span>
          </div>
          <div className="flex gap-2 text-gray-600">
            <span className="badge">
              <button onClick={handleShare}>
                <FaShare />
              </button>
            </span>
            <span className="badge">{shares}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
