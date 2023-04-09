import React from 'react'
import { StyledMenu } from './MenuDiv.styled';
// import { bool } from 'prop-types';

export const MenuWrap = ({open, setOpen}) => {

  const handleClick = () => {
       setOpen(!open)
  }
  return (
    <div>
         <StyledMenu open={open} > 
      <a href='#main' onClick={()=> handleClick()}>Home</a>
      <a href='#about' onClick={() => handleClick()}>About Me</a>
      <a href='#project' onClick={() => handleClick()}>Projects</a>
      <a href='#blog' onClick={() => handleClick()}>Blog</a>
      <a href='#contact' onClick={() => handleClick()}>Say <span>Hi!</span></a>
     </StyledMenu>
    </div>
  )
}

// MenuWrap.propTypes = {
//    open: bool.isRequired,
// }