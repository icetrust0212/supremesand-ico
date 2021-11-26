import React, { Suspense } from 'react'
import { Router } from '@reach/router'
import Navbar from './components/Navbar'
import PageLoading from './pages/PageLoading'
import Footer from './components/Footer'
import './static/scss/component/_font.css';
import {BsArrowDown, BsArrowUp , BsChevronUp} from 'react-icons/bs'
import * as Scroll from 'react-scroll';

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))

const App = () => {
  const ScrollLink = Scroll.Link;

  return (
    <Suspense fallback={<PageLoading />}>
      <Navbar />
      <Router>
        <Home path='/' />
        <About path='/about' />
      </Router>
      <Footer />
      <div className="arrow-scroll">
        <ScrollLink activeClass="active" to="home" spy={true} smooth={true} duration={500}><BsChevronUp size={20}/></ScrollLink>
      </div>
    </Suspense>
  )
}

export default App
