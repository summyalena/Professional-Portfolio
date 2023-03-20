import React from 'react'
import styled from 'styled-components';
import Music from './music';

const Logo = () => {

  const Container = styled.div`
    width: 120px;
     display: flex;
     justify-content: space-between; 
     align-items: center; 
  `

    const Logo = styled.h1`
      color: #fee715;
      font-family: 'Pacifico', cursive;
      font-size: 1.4em;
      font-weight: 300;
      text-decoration: none;
      display: flex;
    `
  return (
    <Container>
    <Logo>
        LENA
    </Logo>
     <Music onclick={onclick}/>
     </Container>
  )
}

export default Logo;