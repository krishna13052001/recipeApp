import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.jpg'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to='/'>
          <img src={logo} alt="Recipe App" className="logo"></img>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link to='/other'>
              our webistes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
