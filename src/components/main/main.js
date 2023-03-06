import React from 'react'
import styles from './main.module.css';
import Contact from '../contact/contact';
import AboutPage from '../About/AboutPage';
import Headers from '../headers/headers';
import MainHeadline from './mainHeadline';
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
import SocialLinks from '../subcomponents/socialLinks'


const Main = ({click}) => {
  return (
    <>
    <Headers/>
    <div className={styles.container}>
        <div className={styles.wrapper}>
    <MainHeadline/>
    <SocialLinks/>
     <AboutPage/>
     <Projects/>
     <Blog/>
     <Contact/>
     </div>
    </div>
    </>
  )
}

export default Main;