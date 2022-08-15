import React, { useEffect } from "react";
import ChatBox from "../../component/ChatBox/ChatBox.jsx";
import FeaturedChat from "../../component/FeaturedChat/FeaturedChat.jsx";
import Navbar from "../../component/Navbar/Navbar.jsx";
import "./chat.scss";

const Chat = () => {
  return (
    <div>
      <Navbar />
      <div className="chat">
        <div className="featuredChatWrapper">
          <FeaturedChat />
        </div>
        <div>
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default Chat;
