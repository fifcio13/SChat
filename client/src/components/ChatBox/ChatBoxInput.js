import React from 'react'

const ChatBoxInput = ({ message, setMessage, sendMessage }) => (
  <form className="form">
        <input
        type="text"
        placeholder="Wiadomość"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
        }
        />
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      Send
    </button>
  </form>
);

export default ChatBoxInput