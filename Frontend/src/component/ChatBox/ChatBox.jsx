import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { socket } from "../../index.tsx";
import { formatMessage } from "../../utils/message/formatMessage.js";
import ChatHeader from "../ChatHeader/ChatHeader.jsx";
import Message from "../Message/Message.jsx";
import "./ChatBox.scss";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const chatsElement = useRef();

  const { user } = useSelector((state) => state.user);

  console.log("USer", user);

  useEffect(() => {
    console.log("reload");
    socket.on("message", (newMessage) => {
      console.log(newMessage, "new Messages");
      if (newMessage) {
        setMessages([...messages, newMessage]);
        console.log(messages, "messages");
      }
    });
  }, [messages]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    const getFormattedMessage = formatMessage(
      user?.displayName ? user.displayName : "Anynomous",
      message
    );

    socket.emit("chatMessage", getFormattedMessage);
    chatsElement.current.scrollTop = chatsElement.current.scrollHeight;
  };

  console.log(messages);
  return (
    <div className="chatBox">
      <ChatHeader />
      <div className="chats" ref={chatsElement}>
        {/* <Message />
        <Message me={true} /> */}

        {messages.map((message, index) => (
          <Message
            me={message.username === user.displayName}
            key={index}
            message={message.text}
            user={message.username}
            time={message.time}
          />
        ))}
      </div>
      <div>
        <form action="" className="send-message" onSubmit={handleMessageSubmit}>
          <input
            placeholder="Type a message..."
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></input>
          <button onClick={handleMessageSubmit}>Send</button>
        </form>
        {/* </form> */}
      </div>
    </div>
  );
};

export default ChatBox;
