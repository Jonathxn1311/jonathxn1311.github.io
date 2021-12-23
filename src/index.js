const mongoose = require('mongoose')
const http = require('http')
const express = require('express')
const Message = require('./models/message.js')
const port = 3001
const app = express()

const server = http.createServer((req, res) => {

})

const io = require('socket.io')(server)

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html')
})

io.on('connection', (socket) => {
    console.log('Nuevo usuario')
})

server.listen(port, () => {
    console.log(`Mensajeria escuchando por el puerto ${port}`)
})

