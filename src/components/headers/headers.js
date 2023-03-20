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
      <NavLink className={styles.link} exact to='/'>
      <Logo/>
     </NavLink>
     <NavLink className={styles.link} exact to='/'>
     <Home/>
     </NavLink>
     <NavLink className={styles.SayHi} exact to='/Contact'>Say hi!</NavLink>
     <Burger className={styles.burger} open={open} setOpen={setOpen}/>
     <MenuWrap open={open} setOpen={setOpen}/>
    </div>
  )
}

Headers.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Headers;