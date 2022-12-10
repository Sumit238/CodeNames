const team=require('./Teams')
const teamClass=require('./Teams');
const playerClass=require('./players');
const { v4: uuidv4 } = require('uuid');
class Word{
    constructor(word,team){
        this.wordId=uuidv4();
        this.word=word;
        this.teamAssigned=team;
        this.isGuessed=false;
        this.cursed=false;
    }
}
/*
    teams=[
        {
            teamId:'<teamid>',
            Players:[p1<class>,p2<class>,.....],
            wordsAssigned:[Words],
            totalWordsGuessed:0,
        }
    ]


s
*/
class wordBoard{
    constructor(wordCount=16,teams){
        this.words=[];
        let totalTeams=teams.length;
        for(let i=0;i<wordCount;i++){
            const team=teams[i%totalTeams];
            let w=new Word(`<word> ${this.words.length}`,team);
            //console.log("HIIIIIIIIII",w,w.wordId);
            team.wordsAssigned.push(w);
            this.words.push(w)
        }

    }
    displayWords(){
        console.log("displaying all words->>>>>")
        this.words.forEach((word)=>{
            
            console.log(word.word)
        })
    }
}
module.exports=wordBoard;