import React from 'react'
import styled, { keyframes } from 'styled-components';
import ContactLink from '../subcomponents/ContactLink';
import AboutLink from '../subcomponents/AboutLink';
import FadeIn from '../../hooks/fadeIn';
import FileSaver from 'file-saver';
import Avatar from '../../images/AvatarMaker (1).png'

const saveFile = () => {
    FileSaver.saveAs(process.env.REACT_APP_CLIENT_URL + "/assests/Assumpta-Okolike-Resume.pdf", "Assumpta-Okolike-Resume.pdf");
  console.log("hello");
  }


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
align-content: left;

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
   align-items: left;
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

const rotate = keyframes`
     from {
      transform: rotate(0deg);
     }

     to {
      transform: rotate(350deg);
     }
`


const ImageBox = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 5rem;
    border-top-right-radius: 5rem;
    background-color: white;
    animation: ${rotate} 3s;

    @media (max-width: 760px){
      width: 80%;
      height: 80%;
    }

`

const Span = styled.div`
  color:#E3735E;

`

const Button = styled.a`
   padding: 0.8rem 1.1rem;
   border-radius: 0.5rem;
   width: 4rem;
   background-color: #fee715;
   margin: 0.8rem 0;
   border: black 0.2rem solid;
   color: var(--background-color);

   &:hover {
     background-color: black;
     transition: ease-in-out 2s;
     color: #fee715;
     border: #fee715 0.2rem solid;
   }

   @media (max-width: 760px){
      
   }
`


const MainHeadline = () => {
  return (
   <Container id="main">
      <Wrapper>
        <AboutLink/>
      <Writeup>
        <Write>
        <FadeIn>
          <h2>I am <Span>Assumpta Okolike </Span></h2>
        </FadeIn>
         <FadeIn>
          <h3>I turn Vision into Reality with Code And Design. </h3>
         
         </FadeIn>
         <Button onClick={saveFile}>
          Resume
         </Button>
      </Write>
      </Writeup>
      <Image>
        <ImageBox>
        <img className="me" src={Avatar} alt="avatar"/>
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