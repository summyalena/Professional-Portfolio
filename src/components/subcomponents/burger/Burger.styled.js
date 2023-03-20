import styled from 'styled-components';

export const StyledBurger = styled.button`  
  display: none;
@media (max-width: 760px){
        position: absolute;
        top: 28%;
        left: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 10;
        &:focus {
          outline: none;
        }
    }
    div {
        width: 2rem;
        height: 0.2rem;
        background: ${props => props.open ? 'var(--background-color)' : 'var(--main-color)'};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child{
            transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'}
        }

        :nth-child(2){
            opacity: ${props => props.open ? '0' : '1'}
            
        }

        :nth-child(3){
            transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(0)'}
        }
      }
`;