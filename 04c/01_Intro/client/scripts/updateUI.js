//setup namespace
function createNamespace (i, template) {
    //set socket for channel i
    let socket = io(`http://localhost:4000/group-${i}`);//??
    //replace index in template
    let $el = $(template.replace(/\${i}/g, (i + 1)));//??

    //append template to row
    $('.row').append($el);//??


    //send message when pressing the button
    $el.find('.message-form').bind('submit', function (e) {
        e.preventDefault();//??
        socket.emit('message.send', {//??
            message: $el.find('.input-message').val(),//??
            username: $el.find('.input-username').val()//??
        });//??
    });

    // Update channel with chat
    socket.on('message.sent', function (data) {
        $el.find('.messages').prepend(`
            <div>
                <hr />
                <div><strong>${data.username}</strong></div>
                <p>${data.message}</p>
            </div>
        `);
    });
}

//set up two channels
$(function () {
    //fetch HTML-group template
    let template = $('#namespace-group-tpl').text();//??
    //loop twice for setting up two channels
    for (let i = 0; i < 2; i++) {//??
        createNamespace(i, template);//??
    }//??
});
