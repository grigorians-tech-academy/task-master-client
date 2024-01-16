'use client'

import React from 'react'

import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

import Milestone from './milestone'
import Message from './message'

import styles from './project.module.css'

const Project = (props) => {
  const { project } = props
  const { id, name, milestones } = project

  const milestone = {
    id: 1,
    name: 'Milestone 1',
    color: '#FF0000'
  }

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col className={styles.project_title_wrapper}>
            <Link className={styles.project_title} href={`/projects/${id}`}>
              <h2>
                {name}
              </h2>
            </Link>
          </Col>
        </Row>
      </Container>
      {milestones && milestones.map((milestone) => (
        <Milestone
          key={milestone.id}
          milestone={milestone}
        />
      ))}
      {milestones.length === 0 &&
        <Message
          message="No milestones yet, please add some"
        />}
    </>
  )
}

export default Project