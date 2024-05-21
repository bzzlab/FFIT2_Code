let socket = io('http://localhost:5000');

// Update the users count
socket.on('users.count', function (data) {//??
    $('#users-count').text(data.count);//??
});//??

// Update the comments count
socket.on('comments.count', function (data) {//??
    $('#comments-count').text(data.count);//??
});//??

// Update the posts count
socket.on('posts.count', function (data) {//??
    $('#posts-count').text(data.count);//??
});//??

// Add comments
socket.on('comment.add', function (data) {//??
    document.querySelector('#recent-comments').innerHTML=""//??
    //location.reload();
    $('#comments-count').text(data.comments.length);//??
    data.comments.forEach(comment => {//??
        let $row = $('<tr>' +//??
            '<td>' + comment.user + '</td>' +//??
            '<td>' + comment.comment + '</td>' +//??
            '</tr>');//??
        $('#recent-comments').append($row);//??
    })//??
});//??


// Add posts
socket.on('post.add', function (data) {//??
    document.querySelector('#recent-posts').innerHTML=""//??
    //location.reload();
    $('#posts-count').text(data.posts.length);//??
    data.posts.forEach(post => {//??
        let $row = $('<tr>' +//??
            '<td>' + post.user + '</td>' +//??
            '<td>' + post.title + '</td>' +//??
            '</tr>');//??
        $('#recent-posts').append($row);//??
    })//??
});//??
