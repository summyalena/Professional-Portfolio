import React from 'react'
import styles from './about.module.css'
import styled from 'styled-components'
import BackButton from '../subcomponents/backButton'

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
  return (
    <div className={styles.container} id='about'>
      <div className={styles.wrapper}>
        <Header>
           About Me..
        </Header>
        <div className={styles.overall}>
        <div className={styles.writeup}>
          <div className={styles.write}>
      I am a software Developer who resides in Nigeria. I am a fullstack developer who recently graduated from Microverse which is a bootcamp Programme. I also graduated from a degree programme in Computer Science in a prestigious University in NIgeria.
      </div>
      </div>
      <div className={styles.images}>
        <div className={styles.imageBox}>
            <div className={styles.imageBoxx}>

            </div>
        </div>
        </div>
      </div>
      </div>
      <BackButton/>
      </div>
  )
}

export default AboutPage