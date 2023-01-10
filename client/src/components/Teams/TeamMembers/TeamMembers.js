import React ,{useEffect,useState} from "react"
import Card from "../../UI/Card"
import Modal from "../../UI/Modal"
import Classes from './TeamMembers.module.css'
const TeamMembers=(props)=>{
    //console.log(props.teamPlayers,"team players info la la ");
    return(
        <Modal onClose={props.onClose}>
                <ul className={Classes.listGroup+Classes.listGroupFlush}>
                    {props.teamPlayers.map((player)=>{
                        return <li>{player.name}</li>;
                    })}
                </ul>
        </Modal>
    )
}

export default TeamMembers;
