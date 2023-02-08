import React from 'react'
import styled from 'styled-components';
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
       <div className={styles.wrapper}>
        <form className={styles.form}>
            <div className={styles.input}>
                  <label id="name_label" for="name">First Name</label>
                  <input id="email" name="first name" type="name" class="form-control" />
              </div>
           
              <div className={styles.input}>
                  <label id="name_label" for="name">Second Name</label>
                  <input id="email" name="name" type="text" class="form-control" />
              </div>

              <div className={styles.input}>
                  <label id="email_label" for="email">Email Address</label>
                  <input id="email" name="email" type="email" class="form-control" />
              </div>

              <div className={styles.input}>
                <textarea width='100px' height='100px'/>
              </div>
        </form>
        </div>  
    </div>
  )
}

export default Contact;