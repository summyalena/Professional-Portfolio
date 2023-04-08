import React, {useState} from 'react'
import styles from './Headline.module.css';
import SocialLinks from '../subcomponents/socialLinks';
import Writeup from '../subcomponents/writeup';
import ContactLink from '../subcomponents/ContactLink';
import BlogLink from '../subcomponents/BlogLink';
import ProjectsLink from '../subcomponents/ProjectsLink';
import AboutLink from '../subcomponents/AboutLink';


function Headline() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
      setClick(!click);
  }
  
  return (
    <>
      <div className={styles.container}>
        <SocialLinks/>
        <AboutLink/>
        <Writeup click={click} clickOn={handleClick}/>
        <BlogLink/>
        <ContactLink/>
        <ProjectsLink/>
    </div>
    </>
  )
}

export default Headline;