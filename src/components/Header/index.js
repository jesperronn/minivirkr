import React from 'react'
import logo from './nine_logo_web.svg'
import './style.css'

const Header = () => (
  <div className='container-fluid'>
    <nav className='navbar border'>
      <a href='#' className='navbar-left'><img src={logo}/></a>
      <span className='navbar-right'><h2>Mini Virkr Hackaton</h2></span>
    </nav>
  </div>
)

export default Header
