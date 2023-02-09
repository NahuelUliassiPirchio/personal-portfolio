import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/ProjectsSection.module.css'

const projects = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
    image: 'https://picsum.photos/200/300',
    url: 'project-1'
  },
  {
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
    image: 'https://picsum.photos/200/400',
    url: 'project-2'
  }
]

export default function ProjectsSection () {
  return (
    <div className={styles.projectsSection}> {/* Change this to section */}
      <div className={styles.projectsTitle}>

      </div>
      <div className={styles.projects}>
        {
          projects.map(project => (
              <div className={styles.projectContainer} key={project.url} >
                  <Image src={project.image} alt={project.title} width={200} height={300} />
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <Link href={`/projects/${project.url}`}>View Project</Link>
              </div>
          ))
        }
      </div>
    </div>
  )
}
