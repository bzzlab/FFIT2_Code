//Import express, http, path and socket.io
//??
//??
//??
//??
//assign express to app
//??
//Request client with / with static path
app.use('/', express.static(
    path.join(__dirname, 'client'))
)

//set http-server and listen
//??
//set port to 5000
//??
//??
console.log(`server running on port ${port}!`)
//set socket io
//??
//connect to client ...
io.on('connection', function (socket) {
    let controllers = ['posts','users'];
    //import controllers
    for (let i = 0; i < controllers.length; i++) {
        require('./controllers/' + controllers[i])(socket);
    }
});
