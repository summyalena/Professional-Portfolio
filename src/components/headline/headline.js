import React, {useState} from 'react'
import styles from './Headline.module.css';
import SocialLinks from '../subcomponents/socialLinks';
import Writeup from '../subcomponents/writeup';
import ContactLink from '../subcomponents/ContactLink';
import BlogLink from '../subcomponents/BlogLink';
import ProjectsLink from '../subcomponents/ProjectsLink';
import AboutLink from '../subcomponents/AboutLink';
import Avatar from '../../images/AvatarMaker(1).png'

function Headline() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
      setClick(!click);
  }
  
  return (
    <>
      <div className={styles.container}>
        <SocialLinks/>
        
        <Writeup click={click} clickOn={handleClick}/>
      
    </div>
    </>
  )
}

export default Headline;