import React from 'react'
import styled from 'styled-components'



const Projects = () => {
  const Project = styled.div`
   position: absolute;
   top: 90%;
   display:flex;
   justify-content: center;
   right: 28%;

   @media (max-width: 768px){
     display: none;
   }
`

const NavProject = styled.a`
  color: var(--main-color);
  text-decoration: none;

  :&active {
    color: var(--background-color);
  }
`
  return (
    <div>
    <Project>
      <NavProject href="#project">
      Projects
      </NavProject>
    </Project>
    </div>
  )
}

export default Projects