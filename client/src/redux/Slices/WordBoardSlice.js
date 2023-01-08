import { createSlice } from "@reduxjs/toolkit/dist";

const WordBoardSlice=createSlice({
    name:"WordBoard",
    initialState:{ words:[
        { 
            wordId: undefined,
            word:'sampleWord',
            isGuessed:false,
            color:undefined,
        }
    ]
    },
    reducers:{
        createWordBoard_reducer:(state,action)=>{

            if(!action.payload.words){
                return state;
            }
            const words=action.payload.words;
            const newState=[];
            words.forEach((word)=>{
                newState.push(
                    {
                        wordId:word.wordId,
                        word:word.word,
                        isGuessed:false,
                        color:undefined,
                    }
                )
            })
            return {words:newState};
        },
        updateWordBoard_reducer:(state,action)=>{
            if(action.payload.type=='GUESSED'){
                for(let i=0;i<state.words.length;i++){
                    if(state.words[i].wordId==action.payload.wordId){
                        state.words[i].isGuessed=true;
                        state.words[i].color=action.payload.color;
                    }
                }
            }
            return state;
        }

    }


})
export const {createWordBoard_reducer,updateWordBoard_reducer}=WordBoardSlice.actions;
export default WordBoardSlice.reducer;