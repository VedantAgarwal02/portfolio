import React, {useState} from 'react'
import styles from './ContactForm.module.css'

const ContactForm = () => {

    const handleSubmit = ()=> {
        alert("Message Sent")
    }
  return (
    <section className={styles.container} id='contactForm'>
        <h2 className={styles.title}>Contact Form</h2>
        
        <table>
            <tr>
                <td>Name:</td>
                <td>
                    <input className={styles.inputBox} type="text" name="name" id="name" placeholder='Enter Name' />
                </td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>
                    <input className={styles.inputBox} type="email" name="email" id="email" placeholder='Enter Email' />
                </td>
            </tr>
            <tr>
                <td>Message:</td>
                <td>
                    <input className={styles.inputBox} type="text" name="message" id="message" placeholder='Write Message' />
                </td>
            </tr>
            <tr>
                <td></td>
                <td><button type="submit" onClick={handleSubmit}>Submit</button></td>
            </tr>
        </table>
       
    </section>
  )
}



export default ContactForm