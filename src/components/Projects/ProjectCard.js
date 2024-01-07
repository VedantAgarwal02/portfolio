import React from 'react'
import styles from './ProjectCard.module.css'

const ProjectCard = ({project :{imageSrc, title, description, skills, demo, source}}) => {
  return (
    <div className={styles.container}>
        <img src={require(`../../assets/${imageSrc}`)} alt={title} className={styles.projectImg} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
            {skills.map((skill, id) => {
                return <li className={styles.skill} key={id}>{skill}</li>
            })}
        </ul>
        <div className={styles.links}>
            <a className={styles.link} href={demo} target='_blank'>Live Site</a>
            <a className={styles.link} href={source} target='_blank'>Github Repo</a>
        </div>
    </div>
  )
}

export default ProjectCard