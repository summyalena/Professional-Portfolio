import React from 'react'
import { StyledMenu } from './MenuDiv.styled';
import { bool } from 'prop-types';

export const MenuWrap = ({open}) => {
  return (
    <div>
         <StyledMenu open={open} > 
      <a href='/'>Home</a>
      <a href='/About'>About Me</a>
      <a href='/Projects'>Projects</a>
      <a href='/Blog'>Blog</a>
      <a href='/Contact'>Say <span>Hi!</span></a>
     </StyledMenu>
    </div>
  )
}

MenuWrap.propTypes = {
   open: bool.isRequired,
}