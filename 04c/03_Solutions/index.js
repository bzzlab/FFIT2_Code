//Import express, http and socket.io
const express = require('express'),
    http = require('http'),
    socketIO = require('socket.io');
//assign express to app
const app = express();

//Request all client resources over static path
const path = require('path');
app.use('/', express.static(path.join(__dirname, 'client')))

//set http-server and listen
let server = http.Server(app);
//set port to 5000
let port = 5000;
server.listen(port);
//message on which port the server is running
console.log(`server running on port ${port}!`)
//set socket io
let io = socketIO(server);

/*
    TASK: add function setupChatChannels with two
    separated chat channels.
    We can post to either rooms. The message will
    be restricted to the namespace for that room.
*/
function setupChatChannels (i) { //??
    let channel = io.of('/channel-' + i);//??
    channel.on('connection', function(socket) {//??
        socket.on('message.send', function (data) {//??
            channel.emit('message.sent', data);//??
        });//??
    });//??
}//??

//TASK: initialize namespace
for (let i = 0; i < 2; i++) {//??
    setupChatChannels(i);//??
}//??
