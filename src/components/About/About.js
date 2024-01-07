import React from 'react'
import styles from './About.module.css'
var aboutImg = require('../../assets/about/about.png')
var frontendImg = require('../../assets/about/frontend.png')
var backendImg = require('../../assets/about/backend.png')

const About = () => {
  return (
    <div className={styles.mainElement} id='about'>
        <h3 className={styles.heading}>About</h3>
        <section className={styles.container}>
            <img className={styles.aboutImg} src={aboutImg} alt="" />
            <div className={styles.items}>
                <div className={styles.item}>
                    <img className={styles.itemImg} src={frontendImg} alt="Frontend Image" />
                    <div className={styles.itemContent}>
                        <h3 className={styles.skillTitle}>Frontend Developer</h3>
                        <p className={styles.skillDesc}>I’m a front-end developer with experience in building responsive and optimized sites</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <img className={styles.itemImg} src={backendImg} alt="Backend Image" />
                    <div className={styles.itemContent}>
                        <h3 className={styles.skillTitle}>Backend Developer</h3>
                        <p className={styles.skillDesc}>I have experience developing fast and optimised back-end systems and APIs</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About