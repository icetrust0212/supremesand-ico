import React from 'react'
import logo from '../static/images/site_logo.jpg'

const Logo = () => {
  return (
    <div className='navbar-brand'>
      <img className='navbar-logo' src={logo} alt='Logo AlySystem' />
      <h2 className="navbar-title">SupremeSAND</h2>
    </div>
  )
}

export default Logo
