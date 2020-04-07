import React from 'react'
import { Link } from 'gatsby'

function Menu() {
  return (
    <nav>
      <ul style={{listStyleType: 'none', display: 'flex', justifyContent: 'flex-end', marginRight: '100px'}}>
        <li style={{ marginRight: '50px'}}>
          <Link to='/'>Home</Link>
        </li>
        <li style={{marginLeft: '50px'}}>
          <Link to='/blog'>Blog</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Menu