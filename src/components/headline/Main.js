import React, {useState} from 'react'
import styles from './Headline.module.css';
import SocialLinks from '../subcomponents/socialLinks';
import Writeup from '../subcomponents/writeup';

function Headline() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
      setClick(!click);
  }
  
  return (
      <div className={styles.container}>
        <SocialLinks/>
        <Writeup click={click} clickOn={handleClick}/>
    </div>
  )
}

export default Headline;