import { createSlice } from "@reduxjs/toolkit/dist";
const GameSlice =createSlice({
    name:'gameInstance',
    initialState:{
        gameId:undefined
    },
    reducers:{
        setGame_reducer:(state,action)=>{
            if(!action.payload.gameId){
                return state;
            }
            const gameId=action.payload.gameId;
            return {gameId:gameId}
        },
    }
})

export const {setGame_reducer}=GameSlice.actions;
export default GameSlice.reducer;