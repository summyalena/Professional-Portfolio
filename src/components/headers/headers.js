import React, {useState} from 'react'
import styles from './Headers.module.css'
import { NavLink } from 'react-router-dom';
import Logo from '../subcomponents/logo';
import Home from '../subcomponents/home';
import { bool, func } from 'prop-types';
import Burger from '../subcomponents/burger/burger';
import { MenuWrap } from '../subcomponents/Menu/MenuDiv';

function Headers() {
  
 const [ open, setOpen] = useState(false);

  return (
    <div className={styles.mainContainer}>
      <a className={styles.link} href='/'>
      <Logo/>
     </a>
     <a className={styles.link} href='/'>
     <Home/>
     </a>
     <a className={styles.SayHi} href='/Contact'>Say hi!</a>
     <Burger  className={styles.burger} open={open} setOpen={setOpen}/>
     <MenuWrap  open={open} setOpen={setOpen}/>
    </div>
  )
}

Headers.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Headers;