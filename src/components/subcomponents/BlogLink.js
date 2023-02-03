import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Blog = styled.div`
    position: absolute;
    top: 50%;
    right: -50%;
    display: flex;
`
const BlogLink = () => {
  return (
    <Blog>
      Blog
    </Blog>
  )
}

export default BlogLink