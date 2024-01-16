'use client'

import React from 'react'

import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Menu = (props) => {
  const { user } = props

  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">TaskMaster</Navbar.Brand>
        <Nav>
          {user && (
            <Nav.Link>
              { user }
            </Nav.Link>
          )}
          {!user && (
            <>
              <Nav.Link>Login</Nav.Link>
              <Nav.Link>Register</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Menu