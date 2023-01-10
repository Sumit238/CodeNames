const teamClass=require('./Teams');
const playerClass=require('./players');
const wordBoardClass=require('./wordBoard');
const { v4: uuidv4 } = require('uuid');
class Game{
    constructor(){
        this.players=[];
        this.teams=[];
        this.wordBoard=null;
        this.hintWord=undefined;
        this.hintCount=undefined;
        this.playingTeamIndex=undefined
        this.status='opened';
        this.gameId=uuidv4();
    }
    start(){
        g.createWordBoard();
        this.status='running';
    }
    end(){
        this.players=[];
        this.teams=[];
        this.wordBoard=null;
        this.hintWord=undefined;
        this.hintCount=undefined;
        this.playingTeamIndex=undefined
        this.status='ended';
        
    }
    addTeam(teamName){
        const t= new teamClass(teamName);
        this.teams.push(t);
        return t.teamId;
    }
    removeTeam(teamId){
        const filteredTeams=this.teams.filter((team)=>{teamId==team.teamId});
        this.teams=filteredTeams;
    }
    addPlayer(name,teamId,playerId){
        console.log("inside add player")
        if(!teamId){
            const p=new playerClass(name,teamId,playerId);
            this.players.push(p);
            return p.playerId;
        }
        let teamForPlayer=this.teams.filter((team)=>{return teamId===team.teamId});
        if(teamForPlayer.length){
            teamForPlayer=teamForPlayer[0];
        }
        console.log("Printing players ..............",this.players)
        let idx =undefined;
        for(let i=0;i<this.players.length;i++){
            console.log(playerId,this.players[i].playerId);
            if(this.players[i].playerId==playerId){
                idx=i;
                break;
            }
        } 
        console.log(idx);
        if(idx===undefined){
            const p=new playerClass(name,teamForPlayer.teamId,playerId);
            this.players.push(p);
            teamForPlayer.addPlayer(p);
            return p.playerId;
        }
        
        const p=this.players[idx];
        teamForPlayer.addPlayer(p);
        return p.playerId;
        
    }
    removePlayer(playerId,teamId){
        console.log("inside remove Player")
        //const remainingPlayers=this.players.filter((player)=>{return player.playerId!=playerId});
        this.teams.forEach((team)=>{
            console.log(teamId,team.teamId);
        })
        const teamForPlayer=this.teams.filter((team)=>{return teamId==team.teamId})[0];
        teamForPlayer.removePlayer(playerId);
        //this.players=remainingPlayers;
        
    }
    createWordBoard(){
        this.wordBoard=new wordBoardClass(16,this.teams);
    }
    beginNewRound(){
        this.createWordBoard();
        this.turn=0;
    }
    changeTurn(){
        this.teams[this.turn].turn=false;
        this.turn=(this.turn+1)%this.teams.length;
        this.teams[this.turn].turn=true;

    }
    getPlayerState(){
        const playerState=[];
        for(let i=0;i<this.players.length;i++){
            const p=this.players[i];
            const player={
                playerName:p.name,
                playerId:p.playerId,
                teamId:p.team ? p.team.teamId : "UNDEFINED",
                playerType:p.playerType
            }
            playerState.push(player)
        }
        return playerState;
    }
    displayGame(){
        console.log("Players Present in Game Class "+this.players.length)
        this.players.forEach((player)=>{
            console.log(" "+player.name);
        })
        console.log()
        console.log("Team Present in Game Class")
        this.teams.forEach((team)=>{
            console.log(" "+team.name+" "+team.teamId);
            console.log("players in Team"+team.name)
            team.Players.forEach((player)=>{
                console.log(" "+player.name);
            })
            console.log()
            console.log("wordsAssigned in Team"+team.name)
            team.wordsAssigned.forEach((word)=>{
                console.log(" "+word.word);
            })
            console.log()
        })
        //this.wordBoard.displayWords();
    }
}
module.exports=Game;
// const g= new Game();
// const PinkTeamId=g.addTeam('Pink');
// console.log(PinkTeamId)
// const redTeamId=g.addTeam('red');
// console.log(redTeamId);

// // g.teams.forEach((team)=>{
// //     console.log();
// //     console.log("->"+team.name+"-"+team.teamId);
// //     console.log("--players in Team"+team.name)
// //     team.Players.forEach((player)=>{
// //         console.log("---"+player.name);
// //     })
// //     console.log();
// //     console.log("--wordsAssigned in Team"+team.name)
// //     team.wordsAssigned.forEach((word)=>{
// //         console.log("---"+word.word);
// //     })
// // })

// //console.log("->",g.teams.length);
// const p1Id=g.addPlayer('Sumit1',PinkTeamId);
// const p2Id=g.addPlayer('Sumit2',PinkTeamId);
// const p3Id=g.addPlayer('Sumit3',redTeamId);
// const p4Id=g.addPlayer('Sumit4',redTeamId);
// g.removePlayer(p3Id,redTeamId)
// g.createWordBoard()
// g.displayGame()

