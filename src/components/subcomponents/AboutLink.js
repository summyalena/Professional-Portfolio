import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const AboutLink = () => {
    const About = styled.div`
    position: absolute;
    top: 50%;
    left: 4%;
    text-decoration: none;
    transform: rotate(-90deg) translate(-50%, -50%);
    @media (max-width: 768px){
      display:none;
    }
`
    const NavAbout = styled(NavLink)`
       text-decoration: none;
       color: #fee715;
    `
  return (
    <div>
        <About>
        <NavAbout to='/About'>
         About
         </NavAbout>
        </About>
    </div>
  )
}

export default AboutLink