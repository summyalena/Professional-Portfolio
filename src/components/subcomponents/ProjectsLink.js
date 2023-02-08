import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Project = styled.div`
   position: absolute;
   top: 90%;
   display:flex;
   justify-content: center;
   right: 28%;
`

const NavProject = styled(NavLink)`
  color: var(--main-color);
  text-decoration: none;
`

const Projects = () => {
  return (
    <Project>
      <NavProject to='/Projects'>
      Projects
      </NavProject>
    </Project>
  )
}

export default Projects