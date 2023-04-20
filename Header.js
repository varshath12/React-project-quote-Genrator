import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LinkContainer} from 'react-router-bootstrap';
import {Outlet} from 'react-router-dom'
import Styles from './Style.css'

function Header() {
  return (
    <div>
        <Navbar id="navbar" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Quote Generator</Navbar.Brand>
          <Nav>
            <LinkContainer to="/Home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
              <Nav.Link>Interesting Fact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}

export default Header