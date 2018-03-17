import React from 'react'
import logo from './nine_logo_web.svg'
import './style.css'

const Header = () => (
  <nav className='navbar navbar-light bg-light'>
    <a href='#' className='navbar-left'><img src={logo}/></a>
    <span className='navbar-right'><h4>Mini Virkr Hackaton</h4></span>
  </nav>
)

export default Header
