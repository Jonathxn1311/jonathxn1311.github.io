const express = require('express')
const mongoose = require('mongoose')
const Message = require('./models/message.js')
const http = require('http')


const server = http.createServer()


const io = require('socket.io')(server)

const app = express()

app.set('port', 3001)

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(app.get('port'), () => {
    console.log(`Mensajeria escuchando por el puerto ${app.get('port')} `)
})
