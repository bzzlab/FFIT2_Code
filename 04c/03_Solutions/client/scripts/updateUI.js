//TASK: fill the gaps in the function sendMessage
function sendMessage($el, i, socket) {
    let msg = $el.find('.input-message').val();//??
    let un = $el.find('.input-username').val()//??
    console.log(`Message: ${msg} to ${un} in group-${i} sent.`)//??
    socket.emit('message.send', {//??
        message: msg,//??
        username: un//??
    });//??
}

//TASK: fill the gaps in the function setupChatChannels
function setupChatChannels (i, template) {
    //set socket for channel i
    let socket = io(`http://localhost:5000/channel-${i}`)//??
    //replace index in template
    let $el = $(template.replace(/\${i}/g, (i + 1)));//??

    //append template to row
    $('.row').append($el);//??

    //Add CTRL+RETURN as shortcut for sending a message
    $el.find('.input-message').keyup(function (e) {
        //preventDefault: to freeze page after validation
        e.preventDefault();//??
        if (e.ctrlKey && e.which === 13) {//??
            sendMessage($el, i, socket);//??
        }//??
    });

    //send message when pressing the button
    $el.find('.message-form').bind('submit', function (e) {
        e.preventDefault();//??
        sendMessage($el, i, socket);//??
    });

    // Update channel with chat
    socket.on('message.sent', function (data) {
        $el.find('.messages').prepend(`<!--??-->
            <div><!--??-->
                <hr /><!--??-->
                <div><strong>${data.username}</strong></div><!--??-->
                <p>${data.message}</p><!--??-->
            </div><!--??-->
        `);//??
    });
}

//TASK: fill the gaps to set up two channels
$(function () {
    //fetch HTML-channel template
    let template = $('#namespace-channel-tpl').text();//??
    //loop twice for setting up two channels
    for (let i = 0; i < 2; i++) {//??
        setupChatChannels(i, template);//??
    }//??
});
