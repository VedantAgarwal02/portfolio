import React from 'react'
import styles from './Projects.module.css'
import projectsData from '../../assets/data/projects.json'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {
                projectsData.map((project, id) => {
                    return <ProjectCard project={project} key={id} />
                })
            }
        </div>
    </section>
  )
}

export default Projects