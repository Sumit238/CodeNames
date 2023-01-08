import { Fragment ,useState ,useEffect } from 'react';

import {Button , Container, Form ,InputGroup,Col,Row} from "react-bootstrap";
import { Socket } from 'socket.io-client';
import useHttp from '../hooks/use-http';

import { useDispatch ,useSelector } from 'react-redux';
import { setGame_reducer } from '../redux/Slices/GameSlice';
const CreateJoinGame= ()=>{
    const { isLoading, error, sendRequest } = useHttp();
    const [gameId,setGameid] =useState('');
    const [playerName,setPlayerName] =useState('');
    const dispatch=useDispatch();
    useEffect(() => {
    localStorage.setItem('gameId', JSON.stringify(gameId));
    }, [gameId]);
    const getGameId=(data)=>{
        setGameid(data.gameId);
        dispatch(setGame_reducer({gameId:data.gameId}));

    }
    const onClickJoinGame=(data)=>{
        const gameId=data.gameId
        const playerId = JSON.parse(localStorage.getItem('playerId'))
        console.log(data)
        //Socket.emit("join_room",{gameId});
        sendRequest(
            {
              url: '/joinGame',
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body:{
                gameId:gameId,
                playerId:playerId,
                playerName:playerName
              }
            },
            getGameId
        );
    }
    const onClickCreateNewGame=()=>{
        sendRequest(
            {
              url: '/newGame',
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            },
            onClickJoinGame
          );
    }

    return (
        <Container  >
            <Row className="justify-content-center mb-2">
                 <Col md={3}>
                    <InputGroup size="sm">
                    <InputGroup.Text>Player Name</InputGroup.Text>
                        <Form.Control type="text" onChange={(e)=>{setPlayerName(e.target.value)}} />
                    </InputGroup>
                 </Col>
            </Row>
            <hr></hr>
            <Row className="justify-content-center mt-3">
                    <Col md={3}>
                    <Button variant="primary" size="sm" onClick={onClickCreateNewGame} disabled={!playerName}>
                        Create New Game
                    </Button>
                    </Col>
                    <Col md={1}>
                        <h4>Or</h4>
                    </Col>
                    <Col md={3}>
                        <InputGroup size="sm">
                            <InputGroup.Text>Game Code</InputGroup.Text>
                            <Form.Control type="text" onChange={(e)=>{setGameid(e.target.value)}}/>
                            <Button variant="primary" onClick={()=>{onClickJoinGame({gameId})}} disabled={!playerName}>
                                Join Game
                            </Button>
                        </InputGroup>
                    </Col>
            </Row>
        </Container>
    )
}

export default CreateJoinGame;