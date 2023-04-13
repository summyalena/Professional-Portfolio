import React from 'react'
import styled, { keyframes } from 'styled-components'
import styles from './Blog.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Blogs from '../../Data/blog'
import { Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaArrowAltCircleRight } from 'react-icons/fa'
import FadeIn from '../../hooks/fadeIn'

const zoom = keyframes`
   from{
    opacity: 0;
   }

   to{
    opacity: 1;
   }
 
`

const Header = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
  font-size: 2rem;
  font-family: 'Pacifico';
  color: var(--main-color);
`

const Button = styled.a`
    background-color: var(--main-color);
    padding: 0.4rem 1.2rem;
    text-decoration: none;
    border-radius: 0.1rem;
    color: var(--background-color);
    font-weight: bolder;
    animation: ${zoom} 1.9s alternate infinite;
`


const Blog = () => {
  return (
    <FadeIn>
    <div className={styles.container} id='blog'>
     <div className={styles.wrapper}>
     <Header>
           My Blog..
        </Header>
        <Swiper 
         modules={[Navigation, Pagination, Scrollbar]}
         slidesPerView={2}
         spaceBetween={30}
         navigation={{
           nextEl: '.next',
           clickable: true,
         }}
         pagination={{ clickable: true}}
         grabCursor={true}
         centeredSlides={true}
         loop={true}
        className={styles.Box}>
         {Blogs.map((blog)=>
         <SwiperSlide  key={blog.id}>
         <div className={styles.miniBox}>
         <div className={styles.image}>
          <img src={blog.image} alt={blog.name}/>
         </div>

          <div className={styles.text}>
            {blog.description}
          </div>

          <Button href={blog.link}>
            Click to see <span className={styles.article}>Article!</span>
          </Button>
          </div>
      </SwiperSlide>
       )} 
       
          <div className='next'>
            <FaArrowAltCircleRight/>
          </div>
          </Swiper> 
          
     </div>
      </div>
       </FadeIn>
  )
}

export default Blog