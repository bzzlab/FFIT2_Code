//Import express, http, path and socket.io
const express = require('express'),//??
    http = require('http'),//??
    path = require('path'),//??
    socketIO = require('socket.io');//??
//assign express to app
const app = express();//??
//Request client with / with static path
app.use('/', express.static(
    path.join(__dirname, 'client'))
)

//set http-server and listen
let server = http.Server(app);//??
//set port to 5000
let port = 5000;//??
server.listen(port);//??
console.log(`server running on port ${port}!`)
//set socket io
let io = socketIO(server);//??
//connect to client by importing the controller
io.on('connection', function (socket) {
    //import controller posts
    require('./controllers/posts')(socket)//??
});
