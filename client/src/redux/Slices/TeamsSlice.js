import { createSlice } from "@reduxjs/toolkit/dist";
const TeamsSlice =createSlice({
    name:'TeamsInstance',
    initialState:{
        teams:[]
    },
    reducers:{
        setTeams_reducer:(state,action)=>{
            if(!action.payload.Teams){
                return state;
            }
            return Teams
        },
    }
})

export const {setTeams_reducer}=TeamsSlice.actions;
export default TeamsSlice.reducer; 