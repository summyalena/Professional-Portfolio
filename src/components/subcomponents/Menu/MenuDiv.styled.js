import styled from 'styled-components'

export const StyledMenu = styled.nav`
     display:none;
   @media (max-width: 760px){
      background: var(--main-color);
      color: var(--background-color);
      display: flex;
  flex-direction: column;
  align-items; center;
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  width: 90vw;
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.9s ease-in-out;
      a{
        font-size: 1.2rem;
        border-bottom: 0.01rem solid;
    text-transform: uppercase;
    padding: 1.8rem 0;
    font-weight: bold;
    letter-spacing: 0.1rem;
    text-decoration: none;
    transition: color 0.3s linear;
      }
   }
`