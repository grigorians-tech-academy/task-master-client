'use client'

import React, { useState } from 'react'

import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import LoginModal from '../modals/login'
import RegisterModal from '../modals/register'

const Menu = (props) => {
  const { user } = props

  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  const showLogin = (e) => {
    e.preventDefault()
    setShowLoginModal(true)
  }

  const showRegister = (e) => {
    e.preventDefault()
    setShowRegisterModal(true)
  }

  return (
    <>
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
                <Nav.Link onClick={showLogin}>Login</Nav.Link>
                <Nav.Link onClick={showRegister}>Register</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <LoginModal
        show={showLoginModal}
        setShow={setShowLoginModal}
      />
      <RegisterModal
        show={showRegisterModal}
        setShow={setShowRegisterModal}
      />
    </>
  )
}

export default Menu