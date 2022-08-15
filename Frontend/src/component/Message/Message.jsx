import React from "react";
import "./Message.scss";

const Message = ({ me, message, user }) => {
  return (
    <div className={me ? "messageWrapper" : ""}>
      <div className={`message ${me ? "mymessage" : ""}`}>
        <img src="https://picsum.com/400" alt="" className="avater" />
        <div className={me ? "message_me" : "message-recieved"}>
          <p className="time">9:32 Pm</p>
          <p className="sender">{user}</p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
