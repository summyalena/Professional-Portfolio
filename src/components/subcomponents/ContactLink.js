import React from 'react'
import styled from 'styled-components'


const Contact = styled.div`
  position: absolute;
  top: 90%;
  left: 35%;
  display: flex;
  @media (max-width: 760px){
      display: none;
  }
`

const NavContact = styled.a`
   text-decoration: none;
   color: var(--main-color);

   &:hover, &:focus {
     color: rgba(200, 222, 222, 0.5);
   }
`
const ContactLink = () => {
 
  return (
    <Contact>
          <NavContact href='#contact'>
       Contact 
       </NavContact>
        </Contact>
  )
}

export default ContactLink