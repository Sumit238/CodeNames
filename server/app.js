require('dotenv').config()
const express = require("express");
const cors =require("cors")
const methodOverride = require("method-override");
const path = require("path");
const expressSessions = require("express-session");
const codenamesGame=require('../ClassFiles/game');
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
app.set('socketio', io);
const port = 5000;
io.on('connection', (socket) => {
    console.log('a user connected :',socket.id);
    socket.emit('new_player',{id:socket.id})
});
let availableGames={}


app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));


app.get('/newGame',(req,res)=>{
    const game=new codenamesGame();
    const gameId=game.gameId;
    availableGames[gameId]=game
    console.log(gameId)
    res.send({gameId:gameId});
})
app.post('/joinGame',async (req,res)=>{
    const playerId=req.body.playerId;
    const gameId=req.body.gameId
    console.log(req.body)
    const playerName=req.body.playerName;
    console.log(availableGames)
    const gameInstance=availableGames[gameId];
    const io = req.app.get('socketio');
    gameInstance.addPlayer(playerName,undefined,playerId);
    const playerState=gameInstance.getPlayerState()
    const socket =io.sockets.sockets.get(playerId)
    socket.join(gameId)
    io.to(gameId).emit('players_state',playerState)
    res.send({gameId:gameId})
})



app.get('/getWords', (req, res) => res.json({words:[{
    word:'cool',
    wordId:'jdnvvljeneve',

},
{
    word:'cool',
    wordId:'jdnvvljeneve',

},
{
    word:'cool',
    wordId:'jdnvvljeneve',

},
{
    word:'cool',
    wordId:'jdnvvljeneve',

},
{
    word:'cool',
    wordId:'jdnvvljeneve',

},
{
    word:'cool',
    wordId:'jdnvvljeneve',

}
]}))
server.listen(5000, () => {
    console.log('listening on *:5000');
  });