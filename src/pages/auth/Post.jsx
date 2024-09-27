import React, { useState } from "react";
import ReactQuill from "react-quill"; // Ensure you have the ReactQuill import
import "react-quill/dist/quill.snow.css"; // Import Quill CSS

export default function Post() {
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image URL to state
      };
      reader.readAsDataURL(file); // Convert file to base64 URL
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200 mt-10 dark:bg-black">
      <h1 className="font-bold text-center text-3xl text-gray-800 mb-6">
        Create Your Post
      </h1>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="mb-6"
      />
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Description
      </label>
      <textarea
        id="message"
        rows="4"
        className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-6 transition duration-200 ease-in-out"
        placeholder="Write your thoughts here..."
      ></textarea>

      <div className="flex items-center justify-center w-full mb-6">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  hover:bg-gray-100 transition duration-200 ease-in-out"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-10 h-10 mb-4 text-blue-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold text-blue-600">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
      </div>

      {image && (
        <div className="mb-6">
          <img
            src={image}
            alt="Uploaded"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )}

      <button
        type="button"
        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3 transition duration-200 ease-in-out"
      >
        Post
      </button>
    </div>
  );
}
