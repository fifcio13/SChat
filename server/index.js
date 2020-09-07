const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

const Admin = 'Admin';

io.on("connect", (socket) => {
  socket.on("join", ({ name, room, users }, callback) => {

    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: `${Admin}`,
      text: `Hello ${user.name}.`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", {
        user: `${Admin}`,
        text: `${user.name} has joined the room.`,
      });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    // function findRooms() {
    //   var availableRooms = [];
    //   var rooms = io.sockets.adapter.rooms;
    //   if (rooms) {
    //     for (var room in rooms) {
    //       if (!rooms[room].hasOwnProperty(room)) {
    //         availableRooms.push(room);
    //       }
    //     }
    //   }
    //   console.log(availableRooms);
    // }
    // findRooms();

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: `${Admin}`,
        text: `${user.name} left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));