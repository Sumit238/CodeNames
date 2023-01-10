import { createSlice } from "@reduxjs/toolkit/dist";
const TeamsSlice =createSlice({
    name:'TeamsInstance',
    initialState:{
        teams:[]
    },
    reducers:{
        setTeams_reducer:(state,action)=>{
            console.log('from reducer', action.payload);
            if(!action.payload.teams){
                return state;
            }
            
            return action.payload.teams;
        },
    }
})

export const {setTeams_reducer}=TeamsSlice.actions;
export default TeamsSlice.reducer; 