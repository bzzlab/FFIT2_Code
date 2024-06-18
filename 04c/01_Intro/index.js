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
    function createNamespace with two
    separated chat channels.
    We can post to either groups. The message will
    be restricted to the namespace for that group.
*/
function createNamespace (i) { //??
    let group = io.of('/group-' + i);//??
    group.on('connection', function(socket) {//??
        socket.on('message.send', function (data) {//??
            group.emit('message.sent', data);//??
        });//??
    });//??
}//??

//initialize namespace
for (let i = 0; i < 2; i++) {//??
    createNamespace(i);//??
}//??
