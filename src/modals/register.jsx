'use client'

import React, { useState, useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { toast } from 'react-toastify'

const RegisterModal = (props) => {
  const { show, setShow } = props
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Register request send')

    if (!username) {
      toast.error('Username is required')
      return false
    }

    if (!password) {
      toast.error('Password is required')
      return false
    }

    if (password !== passwordConfirmation) {
      toast.error('Password confirmation does not match')
      return
    }

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
      setPasswordConfirmation('')
    }
  }, [show])

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
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
          <Form.Group className="mb-4">
            <Form.Label>
              Password confirmation
            </Form.Label>
            <Form.Control
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onSubmit}>Register</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RegisterModal