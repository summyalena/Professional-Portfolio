import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    height: 90vh;
    overflow: hidden;
    display: flex;
`

const Wrapper = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
`

const Writeup = styled.div`
width: 50%;
height: 100%;
background-color: #101820FF;
display: flex;
justify-content: center;
align-items: center;
`

const Image = styled.div`
width: 50%;
height:100%;
background-color: #fee715;
display: flex;
justify-content: center;
align-items: center;
`

const Write = styled.div`
   width: 50%;
   height: 50%;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: 'Roboto';
`

const ImageBox = styled.div`
    width: 50%;
    height: 50%;
    background-color: white;
`

const MainHeadline = () => {
  return (
   <Container>
      <Wrapper>
      <Writeup>
        <Write>
        I am Assumpta Okolike. I am a software developer and I can help build projects proferring solutions to your issues.
      </Write>
      </Writeup>
      <Image>
        <ImageBox>

        </ImageBox>
      </Image>
      </Wrapper>
   </Container>
  )
}

export default MainHeadline;