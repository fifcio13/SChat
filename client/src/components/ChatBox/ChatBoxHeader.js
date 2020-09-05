import React from 'react'

const ChatBoxHeader = ({ room }) => (
        <div className="chatbox-header">
            <div className="chatbox-title">
                <h2><span className="room">Room: </span>{ room }</h2>
            </div>
            <div className="chatbox-close">
                <a title="Leave the room" href="/">×</a>
            </div>
        </div>
)

export default ChatBoxHeader
