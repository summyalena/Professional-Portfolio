import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Contact = styled.div`
    position: absolute;
    top: 90%;
    left: 35%;
    display: flex;
    @media (max-width: 760px){
       
    }
`

const NavContact = styled(NavLink)`
   text-decoration: none;
   color: var(--main-color);

   &:hover, &:focus {
     color: rgba(200, 222, 222, 0.5);
   }
`
const ContactLink = () => {
  return (
    <Contact>
        <NavContact to='/Contact'>
       Contact 
       </NavContact>
        </Contact>
  )
}

export default ContactLink