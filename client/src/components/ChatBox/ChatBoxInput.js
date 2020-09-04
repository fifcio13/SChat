import React from 'react'

const ChatBoxInput = ({ message, setMessage, sendMessage }) => {

  const handleChange = (event) => (
    event.key === "Enter" && !event.shiftKey ? sendMessage(event) : null
    // event.preventDefault();
  );

  return (
  <form className="form">
        <textarea
        type="text"
        placeholder="Wiadomość"
        value={message}
        maxLength="512"
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(e) => handleChange(e)}
        />
    <button type="submit" className="sendButton" onClick={(e) => sendMessage(e)}>
      ➤
    </button>
  </form>
  );

  };

export default ChatBoxInput