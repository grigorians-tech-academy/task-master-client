'use client'

import React from 'react'

import { Button, Col, Container, Row } from 'react-bootstrap'

import styles from './page_title.module.css'

const PageTitle = (props) => {
  const {
    title,
    actionTitle,
    deleteActionTitle,
    action,
    deleteAction
  } = props

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>
            {title}
          </h1>
        </Col>
        <Col className={styles.button_wrapper}>
          {actionTitle && (
            <Button variant="primary" size="sm" onClick={action}>
              { actionTitle }
            </Button>
          )}
          {deleteActionTitle && (
            <Button variant="danger" size="sm">
              { deleteActionTitle }
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default PageTitle
