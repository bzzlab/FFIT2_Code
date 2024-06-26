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
//set port to 4000
let port = 4000;
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
//??
//??
//??
//??
//??
//??
//??
//??

//TASK: initialize namespace
//??
//??
//??
