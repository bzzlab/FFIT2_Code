let socket = io('http://localhost:5000');

// Update the users count
socket.on('users.count', function (data) {
    $('#users-count').text(data.count);
});

// Add a post
socket.on('post.add', function (data) {//??
    document.querySelector('#recent-posts').innerHTML=""
    //location.reload();
    $('#posts-count').text(data.posts.length);//??
    data.posts.forEach(post => {
        let $row = $('<tr>' +//??
            '<td>' + post.user + '</td>' +//??
            '<td>' + post.title + '</td>' +//??
            '</tr>');//??
        $('#recent-posts').append($row);//??
    })
});//??
