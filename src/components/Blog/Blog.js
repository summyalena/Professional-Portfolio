import React from 'react'
import styled from 'styled-components'
import styles from './Blog.module.css'

const Header = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
  font-size: 2rem;
  font-family: 'Pacifico';
  color: var(--main-color);
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
              
             </div>
              <div className={styles.text}>
                This Blog is an introductory article for anyone new to Vercel and Netlify. This article guides a newbie to successfully deploy a work with no stress
              </div>
              <button>
                Click Me
              </button>
          </div>

          <div className={styles.miniBox}>
             <div className={styles.image}>
              
             </div>
              <div className={styles.text}>
                This Blog is an introductory article for anyone new to Vercel and Netlify. This article guides a newbie to successfully deploy a work with no stress
              </div>
              <button>
                Click Me
              </button>
          </div>
          
          </div> 
     </div>
      </div>
  )
}

export default Blog