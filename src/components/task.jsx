'use client'

import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import styles from './task.module.css'

const Task = (props) => {
  const { task } = props
  const { title, completed } = task

  return (
    <Container className={['mb-3', completed && styles.completed]}>
      <Row>
        <Col className={styles.title}>
          <div className={styles.check} />
          <div>
            { title }
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Task