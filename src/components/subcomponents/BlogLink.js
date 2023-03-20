import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Blog = styled.div`
    position: absolute;
    top: 50%;
    right: 2%;
    transform: rotate(90deg) translate(-50%, -50%);
    @media (max-width: 768px){
      display: none;
    }
`

const NavBlog = styled(NavLink)`
   text-decoration: none;
   color: var(--main-color);
`
const BlogLink = () => {
  return (
    <Blog>
      <NavBlog to='/Main'>
      Blog
      </NavBlog>
    </Blog>
  )
}

export default BlogLink