import React ,{useEffect,useState} from "react"
import { useDispatch ,useSelector } from 'react-redux';
import { setTeams_reducer } from '../../redux/Slices/TeamsSlice';
import { setPlayers_reducer } from '../../redux/Slices/PlayersSlice';
import TeamCard from "./TeamsCard";
const Teams=()=>{
    const teamsAvailable = useSelector(state=>state.Teams);
    console.log(teamsAvailable,"HIIIIIIIIIIi")
    const teamsUI = teamsAvailable.map((team)=>{
        return <TeamCard key={team.teamId} teamInfo={team}></TeamCard>
    })
    //console.log(teamsUI)
    return (
        <div>
            {teamsUI}
        </div>
    )
}

export default Teams;