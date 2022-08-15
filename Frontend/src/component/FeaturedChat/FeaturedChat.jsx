import React from "react";
import "./FeaturedChat.scss";

const FeaturedChat = () => {
  return (
    <div className="featuredChat">
      <div className="img">
        <img src="http://picsum.com/40" alt="" />
      </div>
      <div className="chatInfo">
        <p className="userName">Jubayer Hossain</p>
        <p className="message">This Is a simple message </p>
      </div>
    </div>
  );
};

export default FeaturedChat;
