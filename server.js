var express = require('express')
var app = express()
var http = require("http").createServer(app)
var io = require('socket.io')(http)


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/board.html")
})

app.get("/admin",(req,res)=>{
    res.sendFile(__dirname+"/public/admin.html")
})
//serevr to send Client htto protocol
io.on("connection",(socket)=>{
    console.log('new connection establish');

    socket.on("disconnect",()=>{
        console.log('user Youre connection Closed');
    })

    socket.on("message",(msg)=>{
      console.log(msg);
        io.emit("board_content",msg)
    })
})



http.listen(4000,()=>{
    console.log('connected to server');
})