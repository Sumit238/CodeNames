import { createSlice } from "@reduxjs/toolkit/dist";
const PlayersSlice =createSlice({
    name:'PlayersInstance',
    initialState:{
        Players:[]
    },
    reducers:{
        setPlayers_reducer:(state,action)=>{
            console.log('from reducer', action.payload);
            if(!action.payload.Players){
                return state;
            }
            
            return action.payload.Players;
        },
    }
})

export const {setPlayers_reducer}=PlayersSlice.actions;
export default PlayersSlice.reducer; 