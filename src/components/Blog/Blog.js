import React from 'react'
import styled from 'styled-components'
import styles from './Blog.module.css'
import medium from '../../images/medium printout.JPG'

const Header = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
  font-size: 2rem;
  font-family: 'Pacifico';
  color: var(--main-color);
`

const Button = styled.button`
    background-color: var(--main-color);
    padding: 0.5rem 1.2rem;
    border-radius: 0.3rem;
    color: white;
`


const Blog = () => {
  return (
    <div className={styles.container}>
     <div className={styles.wrapper}>
     <Header>
           My Blog..
        </Header>
        <div className={styles.Box}>
          <div className={styles.miniBox}>
             <div className={styles.image}>
              <img src={medium} alt='medium'/>
             </div>
              <div className={styles.text}>
                This Blog is an introductory article for anyone new to Vercel and Netlify. This article guides a newbie to successfully deploy a work with no stress
              </div>
              <Button>
                Click Me
              </Button>
          </div>

          <div className={styles.miniBox}>
             <div className={styles.image}>
             <img src={medium} alt='medium'/>
             </div>
              <div className={styles.text}>
                This Blog is an introductory article for anyone new to Vercel and Netlify. This article guides a newbie to successfully deploy a work with no stress
              </div>
              <Button>
                Click Me
              </Button>
          </div>
          
          </div> 
     </div>
      </div>
  )
}

export default Blog