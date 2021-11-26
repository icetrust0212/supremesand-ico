import React from 'react'
import { Link } from '@reach/router'
import DropDown from './DropDown'
import * as Scroll from 'react-scroll';

const Nav = ({ handlerActive }) => {
  const ScrollLink = Scroll.Link;
  const ScrollElement = Scroll.Element;

  return (
    <nav className={`${handlerActive ? 'navbar-content navbar-open' : 'navbar-content'}`}>
      <ul className='navbar-list'>
        <li onClick={handlerActive} className='navbar-item'>
          <ScrollLink activeClass="active" to="about" spy={true} smooth={true} duration={500}><Link to='/#about' className='navbar-link'>About</Link></ScrollLink>
        </li>
        <li onClick={handlerActive} className='navbar-item'>
          <ScrollLink activeClass="active" to="tokenomics" spy={true} smooth={true} duration={500}> <Link to='/#tokenomics' className='navbar-link'>Tokenomics</Link></ScrollLink>
        </li>
        <li onClick={handlerActive} className='navbar-item'>
          <ScrollLink activeClass="active" to="team" spy={true} smooth={true} duration={500}> <Link to='/#team' className='navbar-link'>Team</Link></ScrollLink>
        </li>
        <li onClick={handlerActive} className='navbar-item'>
          <ScrollLink activeClass="active" to="roadmap" spy={true} smooth={true} duration={500}>  <Link to='/#roadmap' className='navbar-link'>Roadap</Link></ScrollLink>
        </li>
        <li onClick={handlerActive} className='navbar-item'>
          <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} duration={500}>  <Link to='/#contact' className='navbar-link'>Contact</Link></ScrollLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
