import React from 'react'
import { Link } from 'gatsby'

function Menu() {
  return (
    <nav style={{background: `white`, marginTop: `13px`,
    marginBottom: `1rem`,}}>
    <div style={{margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,}}>
      <ul style={{listStyleType: 'none', display: 'flex', justifyContent: 'flex-end', marginRight: '100px'}}>
        <li style={{ marginRight: '50px', color: '#B0B5B3'}}>
          <Link to='/'>home</Link>
        </li>
        <li style={{color: '#B0B5B3'}}>
          <Link to='/about'>about</Link>
        </li>
        <li style={{marginLeft: '50px', color: '#B0B5B3'}}>
          <Link to='/blog'>blog</Link>
        </li>
      </ul>
      </div>
    </nav>
  )
}
export default Menu