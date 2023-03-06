import React, {useState} from 'react'
import styled, {keyframes} from 'styled-components'
import TypewriterComponent from 'typewriter-effect'



const button = keyframes`
  from {
    opacity: 0;
  }
  to{ 
    opacity: 1;
  }
`

const Writes = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: ${props => props.clickOn ? '400px' : '0px'};
   align-items: center;
   padding: 0 0 0 35rem;
   font-family: Playfair Display;
   font-size: 2rem;
`

const Button = styled.button`
   color: var(--main-color);
   background: transparent;
   border: none;
   padding-top: 1.5rem;
   cursor: pointer;
   font-family: Playfair Display;
   font-size: 1.2rem;
   animation-name: ${button};
   animation-duration: 5s;
   animation-iteration-count: infinite;
`

const Writeup = ({clickOn, clickOff}) => {

  return (
    <>
    <Writes clickOn={clickOn} clickOff={clickOff}>
      <TypewriterComponent 
            options={{
               strings: ["Hello!", "Welcome to my portfolio page!", "Have a nice day! "],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
    />
    </Writes>
    <Button onClick={()=> clickOn()}>
    Click here to begin!
   </Button> 
   </>
  )
}

export default Writeup