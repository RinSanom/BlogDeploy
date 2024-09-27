import React, { useState, useRef } from "react";
import ChatIcon from "/assets/ChatIcon.jpg";
import ChatWindow from "./ChatWindow";
function ChatBot() {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleIconClick = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <div>
      <img
        src={ChatIcon}
        alt="Chat"
        onClick={handleIconClick}
        className="fixed cursor-pointer w-14 h-14 right-3 bottom-3 rounded-full "
      />
      {isChatVisible && (
        <div className="chat-window">
          <ChatWindow />
        </div>
      )}
    </div>
  );
}

export default ChatBot;
