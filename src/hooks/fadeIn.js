import React, { useRef, useState } from 'react';
import { useEffect } from 'react';


const FadeIn = (props) => {
  const [isVisible, setIsInvisible] = React.useState(false);
   const Ref = React.useRef()
  React.useEffect(() => {
     const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => setIsInvisible(entry.isIntersecting));
        
     })
      observer.observe(Ref.current);
      console.log(Ref.current)
    return () => observer.unobserve(Ref.current);
  }, [])
   
  return (
    <div className={`fade-in ${isVisible ? 'is-visible' : ''}`} ref={Ref}>
        {props.children}
    </div>
  );
}

export default FadeIn;