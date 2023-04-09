import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Arrow from "../../images/up-chevron (1).png";
import useScroll from "../../hooks/useScroll";

const BackButton = () => {
  const scrollY = useScroll();

  const Bounce = keyframes` 
   to{
      opacity: 0.6;
      transform: translateY(3px);
     }
   `;

  const Back = styled.button`
    background: #e4e1e1ad;
    height: 2rem;
    padding: 3px 3px;
    cursor: pointer;
    width: 2rem;
    border: none;
    position: fixed;
    top: 90%;
    left: 85%;
    border-radius: 30%;
    animation: ${Bounce} 1.6s infinite alternate;
  `;
  return (
    <>
      {scrollY > 150 && (
        <Back onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={Arrow} alt="arrow" />
        </Back>
      )}
    </>
  );
};

export default BackButton;
