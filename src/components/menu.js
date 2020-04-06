import React from 'react'
import { Link } from 'gatsby'

function Menu() {
  return (
    <nav>
      <ul style={{listStyleType: 'none', display: 'flex', justifyContent: 'space-evenly'}}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Menu