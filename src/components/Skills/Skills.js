import React from 'react'
import styles from './Skills.module.css'
import skillsData from '../../assets/data/skills.json'

const Skills = () => {
  return (
    <section className={styles.container} id='skills'>
        <h2 className={styles.heading}>Key Skills</h2>
        <div className={styles.content}>
            {skillsData.map((skill, id) => {
                return <div className={styles.skill} key={id}>
                    <div className={styles.skillImgContainer}>
                        <img className={styles.skillImg} src={require(`../../assets/${skill.imageSrc}`)} alt={`${skill.title}`} />  
                    </div>
                    <p>{skill.title}</p>
                </div> 
            })}
        </div>
    </section>
  )
}

export default Skills