import React from 'react'
import styles from './Headers.module.css'
import { NavLink } from 'react-router-dom';
import Logo from '../subcomponents/logo';
import Home from '../subcomponents/home';

function Headers() {

  return (
    <div className={styles.mainContainer}>
      <NavLink className={styles.link} exact to='/'>
      <Logo/>
     </NavLink>
     <NavLink className={styles.link} exact to='/'>
     <Home/>
     </NavLink>
     <NavLink className={styles.link} exact to='/Contact'>Say hi!</NavLink>
    </div>
  )
}

export default Headers;