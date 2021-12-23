const mongoose = require('mongoose')
const express = require('express')
const app = express()
const http = require('http').createServer(app)

const Message = require('./models/message.js')

const io = require('socket.io')(http)

app.use(express.static(__dirname))

app.set('port', 3000)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})


http.listen(app.get('port'), () => {
    console.log(`El servidor escuchando por el puerto ${app.get('port')}`)
})

io.on('connection', socket => {
    let message = 'Se desconecto un usuario'
    socket.broadcast.emit('new user', { message: 'Ha entrado un nuevo usuario al chat' })
    socket.on('new message', message => {
        socket.emit('user message', message)
    })
    socket.on('disconnect', () => {
        socket.broadcast.emit('user disconnected', { message })
    })
})

