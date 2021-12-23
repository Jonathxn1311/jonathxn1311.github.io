;
((d, io) => {
    const chatForm = d.getElementById('chat-form')
    const chatMessage = d.getElementById('chat-message')
    const chat = d.getElementById('chat')

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault()
        io.emit('new message', chatMessage.value)
        chatMessage.value = null
        return 
    })

    io.on('new user', newUser => {
        alert(newUser.message)
    })

    io.on('user message', message => {
        chat.insertAdjacentHTML('beforeend', `<li>${message}</li>`)
    })


})(document, io())

alert('iniciando')