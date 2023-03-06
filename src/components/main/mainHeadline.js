import React from 'react'
import styled from 'styled-components';
import ContactLink from '../subcomponents/ContactLink';
import AboutLink from '../subcomponents/AboutLink';
import { NavLink } from 'react-router-dom';


const BlogNLink = styled.div`
   position: absolute;
   top: 50%;
   right: 1%;
   transform: rotate(90deg) translate(-50%, -50%);
   color: var(--background-color);
`

const NavBlog = styled(NavLink)`
  text-decoration: none;
  color: var(--background-color);

  &:active, &:hover {
     color: var(--background-color);
  }
`

const ProjectsNLink = styled.div`
  position: absolute;
  top: 90%;
  left: 70%;
  right: 0%;
  color: var(--background-color);
`
const NavProject = styled(NavLink)`
    text-decoration: none;
    color: var(background-color);
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
`

const Wrapper = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
`

const Writeup = styled.div`
width: 50%;
height: 100%;
background-color: #101820FF;
display: flex;
justify-content: center;
align-items: center;
`

const Image = styled.div`
width: 50%;
height:100%;
background-color: #fee715;
display: flex;
justify-content: center;
align-items: center;
`

const Write = styled.div`
   width: 50%;
   height: 50%;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: 'Roboto';
`

const ImageBox = styled.div`
    width: 50%;
    height: 50%;
    background-color: white;
`

const MainHeadline = () => {
  return (
   <Container>
      <Wrapper>
        <AboutLink/>
      <Writeup>
        <Write>
        I am Assumpta Okolike. I am a software developer and I can help build projects proferring solutions to your issues.
      </Write>
      </Writeup>
      <Image>
        <ImageBox>

        </ImageBox>
      </Image>
      <BlogNLink>
        <NavBlog exact to='/Blog'>
            Blog
        </NavBlog>
        </BlogNLink>
      <ContactLink/>
      <ProjectsNLink>
        <NavProject exact to='/Projects'>
        Projects
        </NavProject>
        </ProjectsNLink>
      </Wrapper>
   </Container>
  )
}

export default MainHeadline;