import React ,{useEffect,useState} from "react"
import WordCard from './WordCard/WordCard'
import classes from './WordBoard.module.css';
const WordBoard=(props)=>{
    console.log("from "+props.words)
    return (
        <div className={classes.board}>
                {
                    props.words.map((word,i)=>{
                        return <WordCard word={word} key={i}/>
                    })
                }
        </div>

    )
}

export default WordBoard;