import React from 'react'
import styled from 'styled-components'


const Plays = styled.div`
    padding: 0.3em;
    margin: 0;
`
const Music = ({onclick}) => {
  return (
    <Plays onClick={onclick}>
    <svg xmlns="http://www.w3.org/2000/svg" fill='#fee715ff' width="29" height="29" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="m9 17 8-5-8-5z"/></svg>   
    </Plays>
  )
}

export default Music;