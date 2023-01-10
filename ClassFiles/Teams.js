const { v4: uuidv4 } = require('uuid');
const playerClass=require('./players');
const wordBoardClass=require('./wordBoard');
/*
    teams=[
        {
            teamId:'<teamid>',
            Players:[p1<class>,p2<class>,.....],
            wordsAssigned:[Words],
            totalWordsGuessed:0,
        }
    ]
*/
class team{
    constructor(teamName){
        this.teamId=uuidv4();
        this.name=teamName;
        this.Players=[];
        this.wordsAssigned=[];
        this.totalWordsGuessed=0;
        this.lost=false;
        this.win=false;
        this.turn=false;
    }
    addPlayer(player){
        this.Players.push(player);
        player.teamId=this.teamId;
    }
    removePlayer(playerId){
        const remainingPlayers=this.Players.filter((player)=>{return player.playerId!=playerId});
        this.Players=remainingPlayers;
    }
}

module.exports=team;