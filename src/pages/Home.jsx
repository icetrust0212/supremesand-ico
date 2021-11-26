import React from 'react'
import Contact from '../components/Contact'
import Slide from '../components/Slide'
import Layout from '../container/Layout'
import * as Scroll from 'react-scroll';

const Home = () => {
  let Element = Scroll.Element;

  return (
    <Layout title='SSAND' description='SupremeSand'>
      <Slide />
      <Element name="contact">
        <Contact />
      </Element>

    </Layout>
  )
}

export default Home
