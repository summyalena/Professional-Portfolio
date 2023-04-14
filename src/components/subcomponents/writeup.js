import React from 'react'
import styled, {keyframes} from 'styled-components'
import TypewriterComponent from 'typewriter-effect'
import Avatar from '../../images/AvatarMaker(1).png'
import { Link } from 'react-router-dom'

const button = keyframes`
  from {
    opacity: 0;
  }
  to{ 
    opacity: 1;
  }
`

const Writee = styled.div`
  width: 100%;
  height: 100%;
`

const Writes = styled.div`
    position: fixed;
    background-color: blue;
top: 50%;
bottom: 50%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;

align-items: center;
font-family: Playfair Display;
font-size: 2rem;

&>:first-child{
  display: ${props => props.click ? "none" : "flex"};
}


   @media (max-width: 768px){
    position: absolute;
    top: 50%;
    bottom: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Playfair Display;
    justify-content: center;
    width: 100%;
    font-size: 1.6rem;
   }
`

const NavHome = styled(Link)`
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

const Writeup = ({ click}) => {

  return (
    <>
    <Writee>
    <Writes click={click} >
      <img className='meMain' src={Avatar} alt="avatar"/>
      <TypewriterComponent 
            options={{
               strings: ["Hello!", "Welcome to my portfolio page!", "Have a nice day! "],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
    />
   
    <NavHome to="/Main">
    Click here to begin!
   </NavHome> 
   </Writes>
   </Writee>
   </>
  )
}

export default Writeup