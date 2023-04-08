import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const Bounce = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
`

const bouncingDots = keyframes`
    to {
      opacity: 0.5;
      transform: translateY(16px);
    }
  }
  
  .bouncing-loader > div:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  .bouncing-loader > div:nth-child(3) {
    animation-delay: 0.9s;
  }
`

const BounceDiv = styled.div`
    width:8px;
    height:8px;
    background-color: #f7ec8baf;
    margin: 5px 6px;
    border-radius: 50%;
    opacity: 1;
    animation: ${bouncingDots} 0.7s infinite alternate;

    &:nth-child(2){
        width:11px;
        height:11px;
        background-color: #f7ec8baf;
        margin: 5px 6px;
        border-radius: 50%;
        opacity: 1;
        animation: ${bouncingDots} 0.7s infinite alternate;
    }

    &:nth-child(3){
        width:14px;
        height:14px;
        background-color: #f7ec8baf;
        margin: 5px 6px;
        border-radius: 50%;
        opacity: 1;
        animation: ${bouncingDots} 0.7s infinite alternate;
    }
`

const BouncingDots = () => {
  return (
    <Bounce>
       <BounceDiv></BounceDiv>
       <BounceDiv></BounceDiv>
       <BounceDiv></BounceDiv>
    </Bounce>
  )
}

export default BouncingDots