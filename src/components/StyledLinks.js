import React from "react";
import styled from 'styled-components';

export default function StyledLinks({ top, left, action, id }) {
  const Contact = styled.div`
    position: absolute;
    top: ${top};
    left: ${left};
    display: flex;
    @media (max-width: 760px) {
      display: none;
    }
  `;

  const NavContact = styled.div`
  
  `
  
  return (
    <Contact>
      <NavContact href={id}>{action}</NavContact>
    </Contact>
  );
}
