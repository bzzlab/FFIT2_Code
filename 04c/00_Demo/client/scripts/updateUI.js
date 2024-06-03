//setup namespace
function createNamespace (i, template) {
    //set socket for channel i
//??
    //replace index in template
//??

    //append template to row
//??


    //send message when pressing the button
    $el.find('.message-form').bind('submit', function (e) {
//??
//??
//??
//??
//??
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
//??
    //loop twice for setting up two channels
//??
//??
//??
});
