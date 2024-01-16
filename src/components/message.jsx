'use client'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import styles from './message.module.css'

export default function Message(props) {
  const { message } = props

  return (
    <Container className="mt-5 mb-2">
      <Row>
        <Col xs={12}>
          <div className={styles.message}>
            { message }
          </div>
        </Col>
      </Row>
    </Container>
  )
}
