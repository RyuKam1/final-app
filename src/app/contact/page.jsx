import React from 'react'
import styles from './contact.module.css'

function Contact() {
  return (
    <div className={styles.container}>
        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Phone Number (optional)'/>
                <textarea name="" id="" placeholder='Message'></textarea>
                <button>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact