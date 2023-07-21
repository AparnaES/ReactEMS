import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
         <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-users-line"></i>
            <strong className='ms-4 fs-3 me-5'>Employee Management</strong></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><strong>Home</strong></Nav.Link>
            <Nav.Link href="#features"><strong>Features</strong></Nav.Link>
            <Nav.Link href="#pricing"><strong>Pricing</strong></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header