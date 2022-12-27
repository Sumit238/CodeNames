import { Fragment } from 'react';
import {Button , Container, Form ,InputGroup,Col,Row} from "react-bootstrap";
const CreateJoinGame= ()=>{
    const onClickCreateNewGame=()=>{
        
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