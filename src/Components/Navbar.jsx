import React from 'react'
import "./Css/Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='site-navigations'>
        <Link to="/home" className='active'>Home</Link>
        <Link to="/confession">Confessions</Link>
    </nav>
  )
}

export default Navbar