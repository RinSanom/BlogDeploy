
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

import { CiBookmark } from "react-icons/ci";

export function ArticleCard({ author, date, title, description, image }) {
  return (
    <div className=" dark:bg-black p-4 rounded-lg  transition duration-300">
      <div className="mb-4">
        <img
          src={image}
          alt={title}
          className="rounded-lg w-full object-cover"
        />
      </div>
      <div className="flex items-center mb-2">
        <img
          src="https://via.placeholder.com/40"
          alt={author}
          className="w-8 h-8 rounded-full mr-2"
        />
        <div>
          <p className="text-sm font-bold">{author}</p>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center text-gray-600">

        <span><FaRegBookmark /></span>

        <span>
          {" "}
          <CiBookmark />
          120
        </span>

        <button className="hover:text-blue-500">🔗 Share</button>
      </div>
    </div>
  );
}
