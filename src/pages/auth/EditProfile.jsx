import React from "react";

const ProfileCard = () => {
  return (
    <div className="shadow-md rounded-lg p-6 w-80 dark:bg-black">
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Paul Thomas"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700">
          Designation
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Sr. Support Agent"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700">
          Email
        </label>
        <input
          type="email"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="paulaguillar1992@gmail.com"
        />
      </div>
      <button className="w-full bg-primary200 text-white py-2 rounded-md hover:bg-primary100 transition duration-200">
        Save
      </button>
    </div>
  );
};

export default ProfileCard;
