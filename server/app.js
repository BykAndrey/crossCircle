import express from 'express';
import http from 'http';
import socketIO from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketIO(server)
const PORT = 80;
const randomID = () => {
  return `${Math.ceil(Math.random() * 1000)}_${Date.now()}`;
}

class User {
  id = null;
  free = true;
  constructor(id) {
    this.id = id;

  }
}
class GameSession {
  id = null;
  x_user = null;
  o_user = null;
  constructor(x_user, o_user) {
    this.id = Math.ceil(Math.random() * 1000);
    this.x_user = x_user;
    this.o_user = o_user;
  } 
}


const addNewUserInQ = () => {
  const newUser = new User(randomID());
    users.push(newUser);
    return newUser.id;
}
const gameSessions = [
  
];
const users = [];


app.get('/', (req, res) => {
    res.send('OK')
});

io.on('connection', (socket) => {
    console.log('a user connected');
    const userId = addNewUserInQ();
    console.log(userId)
    socket.emit('user:create', userId);
    socket.emit('users_list', JSON.stringify(users));


    socket.on('hello', (msg) => {
        console.error(msg)
    })
    socket.on('disconnect', (id) => {
      console.log('user disconnected', id);
    });
    socket.on('user:disconect', id => {
      console.log('id', id)
    })
  });

server.listen(PORT, ()=>{
    console.log(`Ran on ${PORT} port`)
})