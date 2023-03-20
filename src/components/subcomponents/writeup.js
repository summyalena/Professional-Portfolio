import React from 'react'
import styled, {keyframes} from 'styled-components'
import TypewriterComponent from 'typewriter-effect'
import { NavLink } from 'react-router-dom'


const button = keyframes`
  from {
    opacity: 0;
  }
  to{ 
    opacity: 1;
  }
`

const Writes = styled.div`
   position: absolute;
   top: 50%;
   bottom: 50%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 400px;
   align-items: center;
   padding: 0 0 0 35rem;
   font-family: Playfair Display;
   font-size: 2rem;

   &>:first-child{
     display: ${props => props.click ? "none" : "flex"};
   }
`

const NavHome = styled(NavLink)`
   color: var(--main-color);
   background: transparent;
   border: none;
   padding-top: 1.5rem;
   cursor: pointer;
   font-family: Playfair Display;
   font-size: 1.2rem;
   animation-name: ${button};
   text-decoration: none;
   animation-duration: 5s;
   animation-iteration-count: infinite;

   &:active {
    color: var(--background-color);
   }
`

const Writeup = ({clickOn, click}) => {

  return (
    <>
    <Writes click={click} >
      <TypewriterComponent 
            options={{
               strings: ["Hello!", "Welcome to my portfolio page!", "Have a nice day! "],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
    />
   
    <NavHome exact to="/Main">
    Click here to begin!
   </NavHome> 
   </Writes>
   </>
  )
}

export default Writeup