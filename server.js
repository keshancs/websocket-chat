const ws  = require('ws');
const wss = new ws.Server({ port:8080 });

wss.on('connection', (socket) => {
    socket.on('message', (message) => socket.send(message));
});