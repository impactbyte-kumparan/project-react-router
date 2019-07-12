import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Navigation = styled.nav`
  ul {
    padding-left: 10px;
  }
  ul li {
    display: inline-block;
    margin-right: 10px;
  }
`

const Header = () => {
  return (
    <Navigation>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemon">Pokemon</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </Navigation>
  )
}

export default Header
