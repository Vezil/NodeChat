const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
var date = newTime();

function newTime(){

    var date = (new Date()).toLocaleTimeString();
    return date;
}

io.on('connection',(socket) => {

    socket.on('join', ({ name, room }, callback) =>{
        const { error, user } = addUser({ id: socket.id, name, room });
        if(error) return callback(error);

        socket.emit('message', { user:`admin [${newTime()}]`, text: `${user.name}, welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message', { user: `admin [${newTime()}]`, text:`${user.name}, has joined!`}) // nadawanie do wszystkich w pokoju

        socket.join(user.room);

        io.to(user.room).emit('roomData',{room: user.room, users: getUsersInRoom(user.room)})

        callback();
    });

    socket.on('sendMessage', (message, callback) => {

        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: `${user.name} [${newTime()}]`, text: message});
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});

        callback();

    });

    socket.on('disconnect',() => {
        
        const user = removeUser(socket.id);
        if(user){
            io.to(user.room).emit('message', { user:`admin [${newTime()}]`, text: `${user.name} has left.` })
            io.to(user.room).emit('roomData',{room: user.room, users: getUsersInRoom(user.room)}) // jeżeli user wyjdzie wyslij info o userach ponownie
        }
    });
});

app.use(router);
app.use(cors());

server.listen(PORT, () => console.log(`Server has started on port ${PORT} (${date})`));