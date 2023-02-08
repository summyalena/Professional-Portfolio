import React from 'react'
import styled from 'styled-components'
import TypewriterComponent from 'typewriter-effect'

const Writes = styled.div`
   display: flex;
   justify-content: center;
   width: 300px;
   align-items: center;
   padding: 0 0 0 35rem;
   font-family: Playfair Display;
   font-size: 2rem;
`
const Writeup = () => {
  return (
    <Writes>
            <TypewriterComponent 
                options={{
                    strings: ["Hello!", "Welcome to my portfolio page!", "Have a nice day! "],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
        />   
    </Writes>
  )
}

export default Writeup