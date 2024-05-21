//import users from model
const {users} = require('../models/users') //??
//export users
module.exports = function (socket) {//??
    console.log(`Num of users: ${users.length}`)
    // Emit all user as array
    socket.emit('users.count', {//??
        count: users.length//??
    });//??
};//??
