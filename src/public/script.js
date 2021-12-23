;
((d, io) => {
    const chatForm = d.getElementById('chat-form')
    const chatMessage = d.getElementById('message-text')
    const chat = d.getElementById('chat')

    chatForm.addEventListener('submit', e => {
        e.preventDefault()
        if(chatMessage.value !== ''){
            io.emit('new message', { message: chatMessage.value })
            chatMessage.value = null
        } 
    })

    io.on('new user', newUser => {
        alert(newUser.message)
    })

    io.on('user message', newMessage => {
        chat.insertAdjacentHTML('beforeend', `<li>${newMessage.message}</li>`)
    })


})(document, io())