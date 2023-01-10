import React ,{useEffect,useState} from "react"
import TeamMembers from "./TeamMembers/TeamMembers"
import Classes from './TeamsCard.module.css'
import { useDispatch ,useSelector } from 'react-redux';
import useHttp from '../../hooks/use-http';
import { ButtonGroup,Button,Card } from "react-bootstrap"
const TeamCard=(props)=>{
    const [TeamMembersDisplayState,setTeamMembersDisplayState]=useState();
    const { isLoading, error, sendRequest } = useHttp();
    const teamInfo=props.teamInfo;
    const gameId=useSelector(state=>state.Game.gameId)
    const joinTeamHandler=(e)=>{
        console.log("called Join Team Handler")
        const teamId=props.teamInfo.teamId;
        const playerId = JSON.parse(localStorage.getItem('playerId')); 
        const currentteamId = null || JSON.parse(localStorage.getItem('teamId'));
        sendRequest(
            {
              url: '/joinTeam',
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body:{
                gameId:gameId,
                playerId:playerId,
                currentteamId:currentteamId,
                teamToJoinId:teamId
              }
            },
            (data)=>{console.log(data);localStorage.setItem('teamId', JSON.stringify(data.teamId));}
        );
    }
    return(
        <Card className="mb-4 mt-4">
            
            <Card.Body>
               <Card.Title>{teamInfo.name.toString().toUpperCase()}</Card.Title>
                <p><b>Score :</b>  <span>{teamInfo.totalWordsGuessed}</span></p>
                <hr></hr>
                <p> <i> spymaster: <span>{'Sumit'}</span></i></p>
                <ButtonGroup>
                    <Button className="btn-secondary" onClick={()=>{setTeamMembersDisplayState(true)}} style={{backgroundColor:'#c77334'}}>players</Button>
                    <Button className="btn-secondary" onClick={joinTeamHandler}>Join</Button>
                </ButtonGroup>
            </Card.Body>
            
            {TeamMembersDisplayState && <TeamMembers teamPlayers={teamInfo.Players} onClose={()=>{setTeamMembersDisplayState(false)}}/>}
            

        </Card>

    )
}

export default TeamCard;