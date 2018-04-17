import React from 'react'
import logo from './nine_logo_web.svg'
import './style.css'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  reset = (event) => {
    this.props.reset()
  }

  render() {
    return (
      <nav className='navbar navbar-light bg-light'>
        <a href='#' className='navbar-left' onClick={this.reset}><img src={logo}/></a>
        <span className='navbar-right'><h4>Mini Virkr Hackaton</h4></span>
      </nav>
    )
  }
}
