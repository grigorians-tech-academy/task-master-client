'use client'

import React, { useState, useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const AddMilestoneModal = (props) => {
  const { visible, setVisible, projectID } = props

  const [name, setName] = useState('')
  const [color, setColor] = useState('#777777')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(`Milestone add request send for project ${projectID}`)
  }

  useEffect(() => {
    if (visible) {
      setName('')
      setColor('#777777')
    }
  }, [visible])

  return (
    <Modal show={visible} onHide={() => setVisible(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add milestone</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-4">
            <Form.Label>
              Milestone name
            </Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>
              Color
            </Form.Label>
            <Form.Control
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onSubmit}>Add milestone</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddMilestoneModal