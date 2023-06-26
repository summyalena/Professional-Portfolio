import React, {useEffect} from 'react'
import styles from './about.module.css'
import styled from 'styled-components'
import { motion, useInView, useAnimation } from 'framer-motion'

import Avatar from '../../images/AvatarMaker(1).png'
import FadeIn from '../../hooks/fadeIn'


const Header = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
  font-size: 2rem;
  font-family: 'Pacifico';
  color: var(--main-color);

  @media (max-width: 760px){
    margin: 1rem;
  }
`
const AboutPage = () => {

  const Variants = {
      visible: {opacity: 1,duration:{type:'ease'}},
      invisible: {opacity:0}
  }

  const animate = useAnimation()

  return (
    <FadeIn>
    <div className={styles.container} id='about'>
        <Header>
           About Me..
        </Header>
        <div className={styles.overall}>
       <p>  I am a Front-end developer who hails from Imo state, Nigeria. I am proficient with using React.js, Next.js and CSS frameworks like TailwindCSS, Styled Components and Bootstrap. I write in Javascript and use it to build web projects. I have 1+ years experience in web development using javascript language. </p>
     

     
        <motion.div animate={animate} variant={Variants} className={styles.imageBox}>
            <div className={styles.imageBoxx}>
         <img className={styles.me} src={Avatar} alt="avatar"/>
            </div>
        </motion.div>
        
      </div>
      </div>
     
       </FadeIn>
  )
}

export default AboutPage