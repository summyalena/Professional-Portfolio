import React from 'react'
import styles from './main.module.css';
import Contact from '../contact/contact';
import AboutPage from '../About/AboutPage';
import Headers from '../headers/headers';
import MainHeadline from './mainHeadline';
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
import SocialLinks from '../subcomponents/socialLinks'
import Footer from '../Footer/Footer';
import { useScroll, motion } from 'framer-motion';


const Main = () => {
  const { scrollYProgress } = useScroll()
  return (
    <>
    <motion.div className="progress-bar" style={{scaleX: scrollYProgress}}/>
    <Headers/>
    <div className={styles.container}>
        <div className={styles.wrapper}>
    <MainHeadline/>
    <SocialLinks/>
     <AboutPage/>
     <Projects/>
     <Blog/>
     <Contact/>
     <Footer/>
     </div>
    </div>
    </>
  )
}

export default Main;