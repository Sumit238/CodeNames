const { v4: uuidv4 } = require('uuid');
const teamClass=require('./Teams');
const wordBoardClass=require('./wordBoard');
const gameClass=require('./game')
class player{
    constructor(name,teamId,playerId){
        this.name=name;
        this.playerId=playerId;
        this.teamId=teamId;
        this.playerType='guesser';

    }
    // Player Actions : 
    guessWord(wordId,game){
        if(!this.team.turn){
            return
        }
        const word=game.wordBoard.words.filter((word)=>{
                return wordId==word.wordId;
        })[0];
        if(word.cursed){
            this.team.lost=true;
            return;
        }
        const team=word.teamAssigned;
        team.totalWordsGuessed+=1;
        word.isGuessed=true;
    }
    giveHint(game,hintWord,hintCount){
            if(this.PlayerType!='hintGiver' || !hintWord.trim() || !hintCount){
                return;
            }
            game.hintWord=hintWord;
            game.hintCount=hintCount;
    }
    
}

module.exports=player;