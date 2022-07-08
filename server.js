const WebSocket = require('ws')

const server = new WebSocket.Server({port: 3000})

server.addEventListener('connection', ws => {
    ws.send('Hello world!')
})