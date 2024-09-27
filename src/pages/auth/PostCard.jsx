import { key } from "localforage";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function PostCard({ addBlogPost }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [cardTitle, setCardTitle] = useState("");
  const [cardContent, setCardContent] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddCard = async (e) => {
    e.preventDefault();

    if (cardTitle.trim() && cardContent.trim() && selectedImage) {
      const newCard = {
        title: cardTitle,
        content: cardContent,
        image: await toBase64(selectedImage),
      };

      const token = import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY; // Retrieve the token

      console.log("API Endpoint:", `${import.meta.env.VITE_BASE_URL}/blogs`);
      console.log("Request Body:", JSON.stringify(newCard));
      console.log("Authorization Token:", token); // Log the token
      if (!token) {
        console.error(
          "Authorization Token is undefined. Check your .env file."
        );
        setSuccessMessage("Authorization Token is missing.");
        return;
      }

      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/blogs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newCard),
        });

        if (response.ok) {
          const savedPost = await response.json();
          addBlogPost({ ...savedPost, key: Date.now() });
          setCardTitle("");
          setCardContent("");
          setSelectedImage(null);
          setSuccessMessage("Card added successfully!");
        } else {
          const errorData = await response.json();
          console.error("Error details:", errorData);
          throw new Error("Failed to create blog post");
        }
      } catch (error) {
        setSuccessMessage(error.message);
      }
    } else {
      setSuccessMessage("Please fill in all fields!");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    });

  return (
    <div className="container mx-auto p-6 dark:bg-black">
      <form onSubmit={handleAddCard} className="mb-4">
        <ReactQuill
          value={cardTitle}
          onChange={setCardTitle}
          placeholder="Enter card title"
          className="border border-gray-300 mb-2"
        />
        <div className="mb-4">
          <input
            type="file"
            onChange={handleImageChange}
            className="border border-gray-300 mb-2"
          />
        </div>
        <ReactQuill
          value={cardContent}
          onChange={setCardContent}
          placeholder="Enter card content"
          className="border border-gray-300 mb-2"
        />
        <button
          type="submit"
          className="bg-primary200 text-white px-4 py-2 rounded-lg hover:bg-primary100"
        >
          Add Card
        </button>
        {successMessage && (
          <p className="mt-2 text-green-600 font-semibold">{successMessage}</p>
        )}
      </form>
    </div>
  );
}

export default PostCard;
