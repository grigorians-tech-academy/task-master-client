'use client'

import React, { useState, useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const AddTaskModal = (props) => {
  const { visible, setVisible, milestoneID } = props

  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState(1)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(`Task add request send for milestone ${milestoneID}`)
  }

  useEffect(() => {
    if (visible) {
      setTitle('')
      setPriority(1)
    }
  }, [visible])

  return (
    <Modal show={visible} onHide={() => setVisible(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-4">
            <Form.Label>
              Title
            </Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Priority</Form.Label>
            <Form.Control as="select" value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value={2}>High</option>
              <option value={1}>Medium</option>
              <option value={0}>Low</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onSubmit}>Add task</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddTaskModal