import React from 'react'

import Menu from '../components/menu'
import PageTitle from '../components/page_title'
import Project from '../components/project'

export default function Home() {
  const projects = [
    {
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
    },
    {
      id: "2",
      name: "Project 2",
      milestones: [
        {
          id: "33",
          name: "Milestone 3",
          tasks: [
            {
              id: "11",
              title: "Task 11",
              completed: false,
            },
          ]
        }
      ]
    },
    {
      id: "3",
      name: "Project 3",
      milestones: []
    }
  ]

  return (
    <>
      <Menu
        user="Karen"
      />
      <PageTitle
        title="Home"
        actionTitle="New Project"
      />
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
        />
      ))}
    </>
  )
}
