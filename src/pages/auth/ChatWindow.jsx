import React, { useState, useRef, useEffect } from "react";
// import axios from "axios";
import axios from 'axios';
import { Send, User, Bot } from "lucide-react";
import CleanResponse from "./CleanResponse";

const API_KEY = "AIzaSyA9eHJ7vTeKkr_UVOdeSBL1jbUylX1CBVg";
const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

const GeminiChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await axios.post(
        `${API_URL}?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: input }] }],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const aiMessage = {
        role: "ai",
        content: result.data.candidates[0].content.parts[0].text,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        role: "ai",
        content: "An error occurred while fetching the response.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed flex flex-col p-4 mx-auto bg-white border border-gray-300 rounded-lg right-20 h-[500px] max-w-96 w-[280px] bottom-3">
      <h1 className="mb-4 text-base font-bold">Gemini Assistant</h1>
      <div className="flex-1 p-4 mb-4 overflow-auto border border-gray-300 rounded-lg scroll">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start mb-4 ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-start space-x-2 ${
                message.role === "user" ? "flex-row-reverse" : ""
              } max-w-3xl`}
            >
              <div
                className={`p-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-blue-100 text-sm"
                    : "bg-gray-100 text-sm"
                } w-full`}
              >
                {message.role === "user" ? (
                  message.content
                ) : (
                  <CleanResponse content={message.content} />
                )}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center justify-start mb-4">
            <div className="p-3 bg-gray-200 rounded-lg">
              <div className="flex space-x-2 animate-pulse">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 w-full p-2 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="p-2 text-white bg-blue-500 rounded-lg"
          disabled={isLoading}
        >
          <Send className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};

export default GeminiChatBot;
