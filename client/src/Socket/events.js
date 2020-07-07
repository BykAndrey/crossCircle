import io from 'socket.io-client';


let userId = null;


const socket = io('http://localhost:8080');
socket.on('connect', function (data) {
});

socket.on('user:create', function (id) {
  userId = id;
});

socket.on('event', function (data) {
  console.log('event')
});


socket.on('disconnecting', function () {
});

window.addEventListener('beforeunload', () => {
  socket.emit('user:disconect', userId)
})
