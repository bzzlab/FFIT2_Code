//TASK: fill the gaps in the function sendMessage
function sendMessage($el, i, socket) {
//??
//??
//??
//??
//??
//??
//??
}

//TASK: fill the gaps in the function setupChatChannels
function setupChatChannels (i, template) {
    //set socket for channel i
//??
    //replace index in template
//??

    //append template to row
//??

    //Add CTRL+RETURN as shortcut for sending a message
    $el.find('.input-message').keyup(function (e) {
        //preventDefault: to freeze page after validation
//??
//??
//??
//??
    });

    //send message when pressing the button
    $el.find('.message-form').bind('submit', function (e) {
//??
//??
    });

    // Update channel with chat
    socket.on('message.sent', function (data) {
<!--??-->
<!--??-->
<!--??-->
<!--??-->
<!--??-->
<!--??-->
//??
    });
}

//TASK: fill the gaps to set up two channels
$(function () {
    //fetch HTML-channel template
//??
    //loop twice for setting up two channels
//??
//??
//??
});
