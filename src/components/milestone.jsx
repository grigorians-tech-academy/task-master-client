'use client'

import React, { useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import Task from './task.jsx'
import AddTaskModal from '../modals/add_task'

import styles from './milestone.module.css'

const Milestone = (props) => {
  const { milestone } = props
  const { id, name, color, tasks } = milestone

  const [showTaskForm, setShowTaskForm] = useState(false)

  const addTask = () => {
    console.log('show task form')
  }

  return (
    <>
      <Container className="mt-4 mb-2">
        <Row>
          <Col xs={12} className={styles.title}>
            <div
              className={styles.circle}
              style={{ backgroundColor: color }}
            />
            <h4 className="m-0">
              { name }
            </h4>
          </Col>
          <Col xs={12} className={styles.actions}>
            <div onClick={() => setShowTaskForm(true)}>[ Add task ]</div>
            <div>[ Delete milestone ]</div>
          </Col>
        </Row>
      </Container>
      {tasks && tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
        />
      ))}
      <AddTaskModal
        visible={showTaskForm}
        setVisible={() => setShowTaskForm(false)}
        milestoneID={milestone}
      />
    </>
  )
}

export default Milestone