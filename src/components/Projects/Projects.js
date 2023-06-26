import React, {useState} from 'react'
import ReactModal from 'react-modal';
import styles from './Projects.module.css';
import ModalProjects from '../subcomponents/modal/ModalProjects';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Work from '../../Data/Works';
import { FaWindowClose } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import {Navigation, Pagination, EffectCoverflow, Thumbs} from 'swiper';


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

const Button = styled.a`
 
`

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    borderRadius: 'none',
    height: '50%',
    backgroundColor: 'var(--background-color)'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(16, 24, 32, 0.096)'
  }
}


const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(Work);

  const setModalClose = () =>{
     setModalOpen(false);
  }

  const Love = () => {
    console.log('true');
  }
  return (
    // <FadeIn>
    <div className={styles.container} id='project'>
       <Header>
           My Projects
         </Header>
 
         {!modalOpen ? <div className={styles.wrapper}>
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
       { Work.map((project) =>
         <SwiperSlide key={project.id}>
         <div className={styles.box}>
          <div className={styles.title}>
             {project.name}
          </div>

          <div className={styles.desc}>
          <p>  {project.description} </p>
          </div>

          <div className={styles.underline}>
            <div className={styles.line}>

            </div>
            <div className={styles.techStack}>
              {project.techStack}
            </div>
             <div className={styles.buttons}>
             <button onClick={() => 
             {setModalOpen(true)
               setModalData(project);
               Love();
             }}>
              Click to see More!
             </button>
            
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
    </div> :  
    ( 
    <ReactModal  onRequestClose={()=> setModalOpen(false)} isOpen={modalOpen} ariaHideApp={false} modalData={modalData}
    style={customStyles}>
     
      <Button onClick={() => setModalClose()}>
         <FaWindowClose className='close'/>
      </Button>
      <ModalProjects modalData={modalData}/>
      
    </ReactModal>
   )
    } 
    
   
    </div>
  
    
  )
}

export default Projects