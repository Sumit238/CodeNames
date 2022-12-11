import React ,{useEffect,useState} from "react"
import Card from "../../UI/Card"
import Modal from "../../UI/Modal"
import Classes from './TeamMembers.module.css'
const TeamMembers=(props)=>{

    return(
        <Modal onClose={props.onClose}>
                <ul className={Classes.listGroup+Classes.listGroupFlush}>
                    <li className={Classes.listGroupItem}>An item</li>
                    <li className={Classes.listGroupItem}>A second item</li>
                    <li className={Classes.listGroupItem}>A third item</li>
                </ul>
        </Modal>
    )
}

export default TeamMembers;