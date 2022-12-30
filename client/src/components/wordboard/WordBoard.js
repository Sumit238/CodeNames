import React ,{useEffect} from "react"
import WordCard from './WordCard/WordCard'
import classes from './WordBoard.module.css';
import useHttp from "../../hooks/use-http";
import { useDispatch ,useSelector} from 'react-redux';
import { createWordBoard_reducer } from "../../redux/Slices/WordBoardSlice";
const WordBoard=(props)=>{
    const { isLoading, error, sendRequest } = useHttp();
    const dispatch=useDispatch();
    const words=useSelector(state=>state.WordBoard.words);
    const initializeWordBoard=(data)=>{
        console.log(data,"BYEEEEEEEEEEEEEEEEEEEEEEE")
        dispatch(createWordBoard_reducer({words:data.words,}))
    }
    useEffect(() => {
        sendRequest(
            {
              url: '/getWords',
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            },
            initializeWordBoard
          );
    }, [])
    console.log("from "+words)
    return (
        <div className={classes.board}>
            {error&&<p>{error}</p>}
            {isLoading&&<p>Loading ....</p>}
            {!isLoading && 
                    words.map((word,i)=>{
                        console.log(word,"HIIIIIIIIIIIIIIIIi")
                        return <WordCard word={word.word} key={i}/>
                    })
            }
                
        </div>

    )
}

export default WordBoard;