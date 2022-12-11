import React ,{useEffect,useState} from "react"
import Card from "../UI/Card"
import TeamMembers from "./TeamMembers/TeamMembers"
import Classes from './Teams.module.css'
const TeamCard=(props)=>{
    const [TeamMembersDisplayState,setTeamMembersDisplayState]=useState();
    return(
        <Card>
            <h5 className={Classes.cardTitle}>Team Title</h5>
            <p>Score : <span>{3}</span></p>
            <button className={Classes.btn} onClick={()=>{setTeamMembersDisplayState(true)}}>Member</button>
            {TeamMembersDisplayState && <TeamMembers onClose={()=>{setTeamMembersDisplayState(false)}}/>}
        </Card>

    )
}

export default TeamCard