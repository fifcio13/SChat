import React from "react";
import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {

  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  if (user === "admin" || user === "Admin") {
    return (
      <div className="admin-message">
        <div className="message-box">
          <p className="admin-text">{(text)}</p>
        </div>
      </div>
    );
  } else {
    return isSentByCurrentUser ? (
      <div className="message-container cur-user">
        <div className="message-box">
          <p className="message-text">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    ) : (
      <div className="message-container not-cur-user">
        <p className="user">{user}:</p>
        <div className="message-box">
          <p className="message-text">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    );
  }
};

export default Message;
