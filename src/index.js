const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const app = express()
const path = require('path')
const server = http.createServer(app)
const io = socketio(server)
const publicDirectory = path.join(__dirname,"../public")
console.log(publicDirectory)
app.use(express.static(publicDirectory))

io.on('connection',()=>{
    console.log("New web socket connection")
})

server.listen(process.env.PORT,()=>{
    console.log('Server started listening at port no '+ process.env.PORT)
})