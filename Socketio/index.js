const app = require('express')()
var http = require("http").createServer(app)
var io = require("socket.io")(http)

var LucVote = 0;
var AlexisVote = 0;
var YannVote = 0;
var JérémyVote = 0;


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})
io.sockets.on("connection", function (socket) {

    socket.on("vote", function (data){
        console.log(data)

        if(socket == "Luc"){
             LucVote++;
             socket.broadcast.emit('oui', LucVote);
             socket.emit('oui', LucVote);
         }else if(socket == "Alexis"){
             AlexisVote++;
             socket.broadcast.emit('oui1', AlexisVote);
             socket.emit('oui1', AlexisVote);
         }else if(socket == "Yann"){
             YannVote++;
             socket.broadcast.emit('oui2', YannVote);
             socket.emit('oui2', YannVote);
         }else if(socket == "Jérémy"){
             JérémyVote++;
             socket.broadcast.emit('oui3', JérémyVote);
             socket.emit('oui3', JérémyVote);
         }
    })
})

http.listen(3000, function () {
    console.log("connect")
})