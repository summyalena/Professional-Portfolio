import React, {useState} from 'react'
import styles from './NavBar.module.css'
import Logo from '../subcomponents/logo';
import Home from '../subcomponents/home';
import Burger from '../subcomponents/burger/burger';
import { MenuWrap } from '../subcomponents/Menu/MenuDiv';


function NavBar() {
  
 const [ open, setOpen] = useState(false);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <div className={styles.links}>
      <a className={styles.link} href='/'>
      <Logo/>
     </a>
     </div>
     <div className={styles.links}>
     <a className={styles.link} href='/'>
     <Home/>
     </a>
     </div>
     <div className={styles.links}>
     <a className={styles.SayHi} href='/Contact'>Say hi!</a>
     </div>
    </div>
    <Burger  className={styles.burger} open={open} setOpen={setOpen}/>
     <MenuWrap  open={open} setOpen={setOpen}/>
    </div>
  )
}

export default NavBar;