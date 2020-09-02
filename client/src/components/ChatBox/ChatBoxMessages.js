import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message";
import CurrentUsers from "./CurrentUsers";

const Messages = ({ users, messages, name }) => (
  <ScrollToBottom className="messages">
    <CurrentUsers users={users} />
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
