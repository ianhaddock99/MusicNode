const socket = io();

let chatUsername = document.querySelector('#chat-username');
let chatMessage = document.querySelector('#chat-message');

socket.on('connect', ()=>{

    let chatForm = document.querySelector('form');

    chatForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        socket.emit('postMessage', {
            username: chatUsername.value, 
            message: chatMessage.value
        })

        chatMessage.value = '';
        chatMessage.focus();
    })

    socket.on('updateMessages', (data)=>{

        let chatDisplay = document.querySelector('.chat-display');
        let newMessage = document.createElement('p');

        newMessage.innerHTML = `<strong>${data.username}</strong>: ${data.message}`;

        chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
    })

})