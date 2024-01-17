'use client'

import React, { useState, useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const LoginModal = (props) => {
  const { show, setShow } = props
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Login request send')

    const data = {
      username,
      password
    }
    console.log(data)
  }

  useEffect(() => {
    if (show) {
      setUsername('')
      setPassword('')
    }
  }, [show])

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-4">
            <Form.Label>
              Username
            </Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onSubmit}>Login</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default LoginModal