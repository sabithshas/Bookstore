import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
import './Topbar.css'

function Topbar() {


   
    return (
        <>
 <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Book Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favourites">Favourites</Nav.Link>
            <div className='cart'>
            <Nav.Link href="/cart" >Cart</Nav.Link>
            </div>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

        </>
    )
}

export default Topbar

