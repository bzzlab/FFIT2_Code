let socket = io('http://localhost:5000');

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
