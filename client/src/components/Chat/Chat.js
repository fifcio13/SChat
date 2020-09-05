import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'

import ChatBoxHeader from '../ChatBox/ChatBoxHeader'
import ChatBoxInput from '../ChatBox/ChatBoxInput'
import ChatBoxMessages from '../ChatBox/ChatBoxMessages'

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
      const ENDPOINT = 'localhost:5000';
      // const ENDPOINT = "https://uch4t.herokuapp.com/";

    useEffect(() => {
      const { name, room } = queryString.parse(location.search);

      socket = io(ENDPOINT);

      setName(name);
      setRoom(room);


      socket.emit('join', { name, room }, (error) => {
        if(error) {
          window.location.href = '/';
          alert(error);
        }
      });

      return () => {
        socket.emit('disconnect');
        socket.off();
      }

    }, [ENDPOINT, location.search]);

    useEffect(() => {
      socket.on("message", (message) => {
        setMessages((messages) => [...messages, message]);
      });

      socket.on("roomData", ({ users }) => {
        setUsers(users);
      });
    }, []);

    // sending messages
    const sendMessage = (event) => {
      event.preventDefault();

      if(message) {
        socket.emit('sendMessage', message, () => setMessage(''));
      }
    }

    return (
      <div className="outer-chat">
        <div className="chat">
          <ChatBoxHeader room={room} />
          <ChatBoxMessages messages={messages} name={name} users={users} />
          <ChatBoxInput message={message} setMessage={setMessage} sendMessage={sendMessage}  />
        </div>
      </div>
    );
}

export default Chat