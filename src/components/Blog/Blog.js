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
    color: var(--background-color);
    font-weight: bold;
    text-align: center;
    animation: ${zoom} 1.9s alternate;
`


const Blog = () => {
  return (
    <FadeIn>
    <div className={styles.container} id='blog'>
     <Header>
           My Blog..
        </Header>
        <Swiper 
         modules={[Navigation, Pagination, Scrollbar]}
         breakpoints={{
          360: {
            slidesPerView: 1
          },
          560: {
            slidesPerView: 2
          },
          660: {
            slidesPerView: 3
          },
          760: {
            slidesPerView: 3
          },
          860: {
            slidesPerView: 3
          },
          960: {
            slidesPerView: 3
          },
          1110: {
            slidesPerView: 3
          },
          1260:{
            slidesPerView: 3,
          }
         }}
         spaceBetween={10}
         centeredSlides={true}
         navigation={{
          nextEl: '.next',
           clickable: true,
         }}
         pagination={{ clickable: true}}
         grabCursor={true}
         loop={true}
        className={styles.Box}>
         {Blogs.map((blog)=>
         <SwiperSlide  key={blog.id}>
         <div className={styles.miniBox}>
          <img src={blog.image} alt={blog.name}/>
            <p>{blog.description}</p>
         

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
      
       </FadeIn>
  )
}

export default Blog