//import users from model
const {users} = require("../models/users");
//Sample posts
let posts = [{
    user: users[5],
    title: 'How to Flip a Coin'
}, {
    user: users[4],
    title: 'Top 5 Jokes of 2023'
}, {
    user: users[3],
    title: 'Top 10 Jokes of 2024'
}, {
    user: users[2],
    title: 'I will kill you all!'
}, {
    user: users[1],
    title: 'Good idea. I\'ll do the same to you!'
}];

//export posts
module.exports = function (socket) {//??
    //https://stackoverflow.com/questions/40352318/socket-io-how-to-emit-an-array-and-a-variable-simultaneously
    // Emit recent posts as array
    socket.emit('post.add', {posts});//??
    // Emit recent posts count
    socket.emit('posts.count', { count: posts.length });//??
};//??


