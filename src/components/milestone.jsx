'use client'

import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import Task from './task.jsx'

import styles from './milestone.module.css'

const Milestone = (props) => {
  const { milestone } = props
  const { name, color, tasks } = milestone

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
        </Row>
      </Container>
      {tasks && tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
        />
      ))}
    </>
  )
}

export default Milestone