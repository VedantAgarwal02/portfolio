import React from 'react'
import styles from './Socials.module.css'
var email = require('../../assets/Socials/email.png')
var linkedin = require('../../assets/Socials/linkedin.png')
var github = require('../../assets/Socials/github.png')

const Socials = () => {
  return (
    <div id='socials' className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.title}>Socials</h2>
        <p className={styles.description}>Feel free to reach out!!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="mail me" className={styles.iconImg} />
          <a href="mailto:agarwalvedant02@gmail.com" className={styles.content}> agarwalvedant02@gmail.com </a>
        </li>
        <li className={styles.link}>
          <img src={linkedin} alt="my linkedin" className={styles.iconImg} />
          <a href="https://www.linkedin.com/in/vedant-agarwal-a58a92200/" target='_blank' className={styles.content}> vedant-agarwal-a58a92200 </a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="my github" className={styles.iconImg} />
          <a href="https://github.com/VedantAgarwal02" target='_blank' className={styles.content}> VedantAgarwal02 </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials