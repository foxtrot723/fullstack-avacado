import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = props => {
    const { logout } = props
   return (
       <div className='navbar'>
           <div className='topBlock'>
               <img className='imgLogo' src='https://mbtskoudsalg.com/images/transparent-avocado-half-5.png' alt='logo'/>
               <p className='appName'>Avacado</p>
               <p className='tagline'>The Organic way to Notate</p>
           </div>

           <nav className='nav'>
               <Link className='navLinks' to = '/'>Home</Link>
               <Link className='navLinks' to = '/notes'>Notes</Link>
               <Link className='navLinks' to = '/contact'>Contact</Link>
               <Link className = 'navLinks' to = '/login'>Log In</Link>
           </nav>
       </div>
   )
}

export default Navbar