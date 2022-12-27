require('dotenv').config()
const express = require("express");
const cors =require("cors")
const methodOverride = require("method-override");
const path = require("path");
const expressSessions = require("express-session");
const codenamesGame=require('../ClassFiles/game');
// const flash = require("connect-flash");
// const MongoStore = require('connect-mongo')
const app = express()
app.use(cors())
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
});
const port = 5000;
io.on('connection', (socket) => {
    console.log('a user connected :',socket.id);
    socket.on('join_game',(data)=>{
        socket.join(data.gameId);
    })

});



app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));


app.get('newGame',(req,res)=>{
    const game=new codenamesGame();
    const gameId=game.gameId;
    console.log(gameId)
    res.send(`here is your game id : ${gameId}`);
})



//app.get('/api', (req, res) => res.json({"users":["Hiii","Aman","GG","user5","Hiii","Aman","GG","user5","Hiii","Aman","GG","user5",]}))
server.listen(5000, () => {
    console.log('listening on *:5000');
  });