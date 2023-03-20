import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { keyframes } from 'styled-components'

const BackButton = () => {

   const Bounce = keyframes` 
   to{
      opacity: 0.6;
      transform: translateY(3px);
     }
   `

    const Back = styled.button`
        background: rgba(254, 231, 21, 0.767);
        height: 2rem;
        width: 2rem;
        border: none;
        position: absolute;
        top: 1%;
        left: 80%;
        border-radius: 30%;
        animation: ${Bounce} 1.6s infinite alternate ;
    `
  return (
    <Back>
        <NavLink exact to='/'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"/></svg>
    </NavLink>
    </Back>
  )
}

export default BackButton;