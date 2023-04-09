import React, {useState} from 'react'
import styles from './Projects.module.css'
import styled, { keyframes } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import Work from '../../Data/Works';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import {Navigation, Pagination, EffectCoverflow, Thumbs} from 'swiper';
import FadeIn from '../../hooks/fadeIn';

const bounce = keyframes`
   from {
      opacity: 0s;
      transform: translateY(0px);
   }

   to{
    opacity: 0.6s;
    transform: translateY(10px);
   }

`

const Header = styled.div`
   width: 100%;
   height:10%;
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: 'Pacifico';
   color: var(--main-color);
   font-size: 2rem;
`

const Github = styled.a`
    background-color: transparent;
    border: none;
    cursor: pointer;
    animation: ${bounce} 10s alternate infinite;

    @media (max-width: 760px){
      font-size: 0.4rem;
    }
`
const Projects = () => {
  return (
    <FadeIn>
    <div className={styles.container} id='project'>
       <Header>
           My Projects
         </Header>
 
    <div className={styles.wrapper}>
       <Swiper 
       modules={[Navigation, Pagination, EffectCoverflow, Thumbs]}
       slidesPerView={2}
       spaceBetween={15}
       navigation={{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
        clickable: true,
       }
       }
       pagination={{ clickable: true }}
       effect={'coverflow'}
       grabCursor={true}
       loop={true}
       centeredSlides={true}
       coverflowEffect={{
         rotate:0,
         stretch: 0,
         depth: 100,
         modifier: 2.5,
       }}
        className={styles.projectBox}>
       {Work.map((project) =>
         <SwiperSlide key={project.id}>
         <div className={styles.box} >
          <div className={styles.title}>
             {project.name}
          </div>

          <div className={styles.desc}>
            {project.description}
          </div>

          <div className={styles.underline}>
            <div className={styles.line}>

            </div>
            <div className={styles.techStack}>
              {project.techStack}
            </div>
             <div className={styles.buttons}>
              <button className={styles.button}>
                Live Version
              </button>
              <Github href="www.github.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fillRule="evenodd" fill="#FEE715FF" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"/></svg> 
              </Github>
             </div>
             </div>
          </div>
         </SwiperSlide>
         )}
         <div className={styles.controller}>
         <div className="swiper-button-prev">
            <FaArrowCircleLeft className={styles.left}/>
         </div>
         <div className="swiper-button-next">
             <FaArrowCircleRight className={styles.left}/>
         </div> 
         <div className={styles.swiperPagination}></div>
         </div>
       </Swiper>
    </div>
    
    </div>
    </FadeIn>
  )
}

export default Projects