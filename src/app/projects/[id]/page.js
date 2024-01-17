'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'

import Menu from '../../../components/menu'
import PageTitle from '../../../components/page_title'
import Milestone from '../../../components/milestone'
import Message from '../../../components/message'
import AddMilestoneModal from '../../../modals/add_milestone'

export default function ProjectPage() {
  const { id } = useParams()
  const [showAddMilestoneModal, setShowAddMilestoneModal] = useState(false)
  
  const user = undefined

  const project = {
    id: "1",
    name: "Project 1",
    milestones: [
      {
        id: "1",
        name: "Milestone 1",
        color: "#782732",
        tasks: [
          {
            id: "1",
            title: "Task 1",
            completed: true,
          },
          {
            id: "2",
            title: "Task 2",
            completed: true,
          },
          {
            id: "3",
            title: "Task 3",
            completed: false,
          }
        ]
      },
      {
        id: "2",
        name: "Milestone 2",
        tasks: [
          {
            id: "4",
            title: "Task 4",
            completed: false,
          },
          {
            id: "5",
            title: "Task 5",
            completed: false,
          },
          {
            id: "6",
            title: "Task 6",
            completed: false,
          }
        ]
      }
    ]
  }

  return (
    <>
      <Menu />
      <PageTitle
        title={project.name}
        actionTitle="New milestone"
        deleteActionTitle="Delete project"
        action={() => setShowAddMilestoneModal(true)}
      />
      {!user && (
        <Message
          message="You are not logged in"
        />
      )}
      {project?.milestones.map(milestone => (
        <Milestone
          key={milestone.id}
          milestone={milestone}
        />
      ))}
      <AddMilestoneModal
        visible={showAddMilestoneModal}
        setVisible={setShowAddMilestoneModal}
        projectID={id}
      />
    </>
  )
}
