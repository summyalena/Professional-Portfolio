import React from 'react'
import styles from './Footer.module.css';
import Logo from '../subcomponents/logo';

const Footer = () => {
  return (
    <div className={styles.container}>
      <a className={styles.logo} href='/'>
       <Logo/>
      </a>
      <div className={styles.welcome}>
        <p>Created by <span>Alena Okolike </span></p>
       <p>All rights reserved!</p>
      </div>
    </div>
  )
}

export default Footer