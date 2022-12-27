import { Fragment } from 'react';
import classes from './Header.module.css';
import {Navbar , Container} from "react-bootstrap";
const Header = (props) => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Code Names
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
