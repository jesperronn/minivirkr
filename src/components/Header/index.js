import React from 'react'
import logo from './nine_logo_web.svg'
import './style.css'

const Header = () => (
  <nav className='navbar is-primary'>
    <div className='navbar-brand'>
      <a href='/' className='navbar-item'>
          <img src={logo}/>
      </a>
    </div>
    <div className='navbar-menu'>
      <div className='navbar-end'>
        <div className='navbar-item is-expanded'>
          <h4 className='title has-text-white'>Mini Virkr Hackaton</h4>
        </div>
      </div>
    </div>

  </nav>
)

export default Header
