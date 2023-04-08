import React from 'react'
import styled from 'styled-components';
import ContactLink from '../subcomponents/ContactLink';
import AboutLink from '../subcomponents/AboutLink';
import FadeIn from '../../hooks/fadeIn';


const BlogNLink = styled.div`
   position: absolute;
   top: 50%;
   right: 1%;
   transform: rotate(90deg) translate(-50%, -50%);
   color: var(--background-color);

   @media (max-width: 768px){
    display: none;
   }
`

const NavBlog = styled.a`
  text-decoration: none;
  color: var(--background-color);

  &:active, &:hover {
     color: var(--background-color);
  }

  @media (max-width: 768px){
    display: none;
   }
`

const ProjectsNLink = styled.div`
  position: absolute;
  top: 90%;
  left: 70%;
  right: 0%;
  color: var(--background-color);

  @media (max-width: 768px){
    display: none;
   }
`
const NavProject = styled.a`
    text-decoration: none;
    color: var(background-color);
    @media (max-width: 768px){
      display: none;
     }
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    
    @media (max-width: 768px){
      height: 150vh;
    }
`

const Wrapper = styled.div`
     width: 100%;
     height: 100%;
     display: flex;

     @media (max-width: 768px){
       display: flex;
       flex-direction: column;
       width: 100%;
       height: 100%;
     }
`


const Writeup = styled.div`
width: 50%;
height: 100%;
background-color: rgba(16, 24, 32, 0.082);
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px){
  width: 100%;
  height: 100vh;
  justify-content: center;
align-items: center;
}
`

const Write = styled.div`
   width: 50%;
   height: 50%;
   color: white;
   display: flex;
   flex-direction: column;
   color: var(--text-color);
   justify-content: center;
   align-items: center;
   font-family: 'Roboto';

   @media (max-width: 768px){
     height: 100%;
     width: 70%;
   }
`



const Image = styled.div`
width: 50%;
height:100%;
background-color: #fee715;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px){
  width: 100%;
  height: 50vh;
  position: relative;
}
`



const ImageBox = styled.div`
    width: 50%;
    height: 50%;
    background-color: white;

    @media (max-width: 760px){
       position: absolute;
       top: -15%;
       left: 24%;
       height: 60%;
       width: 65%;
    }
`

const Span = styled.div`
  color:#E3735E;

`

const Button = styled.button`
   padding: 1rem;
   border-radius: 0.2rem
`


const MainHeadline = () => {
  return (
   <Container id="main">
      <Wrapper>
        <AboutLink/>
      <Writeup>
        <Write>
        <FadeIn>
          <h1>I am <Span>Assumpta Okolike </Span></h1>
        </FadeIn>
         <FadeIn>
          <h3>I turn Vision into Reality with Code And Design. </h3>
         </FadeIn>
         <Button>
          <button>Resume</button>
         </Button>
      </Write>
      </Writeup>
      <Image>
        <ImageBox>

        </ImageBox>
      </Image>
      <BlogNLink>
        <NavBlog href='blog'>
            Blog
        </NavBlog>
        </BlogNLink>
      <ContactLink/>
      <ProjectsNLink>
        <NavProject href='project'>
        Projects
        </NavProject>
        </ProjectsNLink>
      </Wrapper>
   </Container>
  )
}

export default MainHeadline;