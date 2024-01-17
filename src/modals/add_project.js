'use client'

import React, { useState, useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const AddProjectModal = (props) => {
  const { visible, setVisible } = props

  const [name, setName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Project add request send')
  }

  useEffect(() => {
    if (visible) {
      setName('')
    }
  }, [visible])

  return (
    <Modal show={visible} onHide={() => setVisible(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-4">
            <Form.Label>
              Project name
            </Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onSubmit}>Add project</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddProjectModal