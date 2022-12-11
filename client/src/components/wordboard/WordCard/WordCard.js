import React ,{useEffect,useState} from "react"
import Card from "../../UI/Card";
const WordCard=(props)=>{
    return (
        <Card>
            <p>{props.word}</p>
        </Card>
    )
}

export default WordCard;