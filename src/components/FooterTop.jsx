import React, { Fragment } from 'react'
import logo from '../static/images/site_logo.jpg'
import List from './List'

const FooterTop = () => {
  return (
    <Fragment>

      <List />
      <img className='footer-image' src={logo} alt='Logo AlySystem' />
    </Fragment>
  )
}

export default FooterTop
