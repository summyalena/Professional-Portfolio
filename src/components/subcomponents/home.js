import React from 'react'
import styled from 'styled-components';


const HomeLogo = styled.div`
   color: #fee715ff;
   border-radius: 100%;
   padding: 0.6rem;
   border: 0.2rem solid;
   margin-right: 4.6rem;
   @media (max-width: 760px){
      display:none;
   }
`
const Home = () => {
  return (
    <div>
   <HomeLogo>
   <svg xmlns="http://www.w3.org/2000/svg" fill='#fee715ff' fillOpacity={2} width="25" height="25" viewBox="0 0 24 24"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"/>
     </svg>
    </HomeLogo>
    </div>
  )
}

export default Home;