import React from 'react'
import styles from './Hero.module.css'
var myPicture = require('../../assets/hero/myPhoto.JPG')

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title} >Hi, I'm Vedant</h1>
            <p className={styles.description} >I'm a FullStack Developer with experience in creating apps using React and NodeJS. Check out my projects listed below. Reach out if you wish to collaborate.</p>
            <a className={styles.contactBtn} href="mailto:agarwalvedant02@gmail.com">E-mail Me</a>
        </div>
        <img className={styles.myImg} src={myPicture} alt="" />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero