const { users } = require('../models/users')
let comments = [{
    user: users[0],
    comment: 'Great post!'
}, {
    user: users[1],
    comment: 'Interesting ideas...'
}, {
    user: users[2],
    comment: 'Thanks, Batman!'
}, {
    user: users[3],
    comment: 'I agree with Batman'
}];

module.exports = function (socket) {
    // Emit recent comments as array
//??
    // Emit recent comments count
//??
};
