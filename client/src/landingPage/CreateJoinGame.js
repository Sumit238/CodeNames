import { Fragment ,useState } from 'react';
import {Button , Container, Form ,InputGroup,Col,Row} from "react-bootstrap";
import useHttp from '../hooks/use-http';
const CreateJoinGame= ()=>{
    const { isLoading, error, sendRequest } = useHttp();
    const [gameId,setGameid] =useState('');
    const getGameId=(data)=>{
        console.log(data);
        setGameid(data);
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
            getGameId
          );
    }

    return (
        <Container>
                <Row className="justify-content-center">
                    <Col md={3}>
                    <Button variant="primary" size="sm" onClick={onClickCreateNewGame}>
                        Create New Game
                    </Button>
                    </Col>
                    <Col md={1}>
                        <h4>Or</h4>
                    </Col>
                    <Col md={3}>
                        <InputGroup size="sm">
                            <InputGroup.Text>Game Code</InputGroup.Text>
                            <Form.Control type="password" />
                            <Button variant="primary" onClick={() => console.log("Primary")}>
                                Join Game
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
        </Container>
    )
}

export default CreateJoinGame;