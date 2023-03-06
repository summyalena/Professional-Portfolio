import React, {useState} from 'react'
import styles from './Headline.module.css';
import SocialLinks from '../subcomponents/socialLinks';
import Writeup from '../subcomponents/writeup';
import ContactLink from '../subcomponents/ContactLink';
import BlogLink from '../subcomponents/BlogLink';
import ProjectsLink from '../subcomponents/ProjectsLink';
import AboutLink from '../subcomponents/AboutLink';
import Main from '../main/mainHeadline';

function Headline() {
  const [click, setClick] = useState(false);

  const handleClickOn = () => {
    setClick(true);
    console.log('true');
  }

  const handleClickOff = () => {
    setClick(false);
    console.log('true');
  }
  
  return (
    <div className={styles.container}>
        <SocialLinks/>
        <AboutLink/>
        <Writeup clickOn={handleClickOn} clickOff={handleClickOff}/>
        <BlogLink/>
        <ContactLink/>
        <ProjectsLink/>
        {click ? <Main click={click}/> : null}
    </div>
  )
}

export default Headline;