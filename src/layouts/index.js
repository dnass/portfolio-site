import 'tachyons'
import React, { useEffect } from 'react'
import smartquotes from 'smartquotes'
import Header from '../components/header'
import Footer from '../components/footer'
import Transition from './transition'
import './style.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

const Layout = ({ children, location }) => {
  useEffect(smartquotes)

  return (
    <>
      <div className="avenir center-l ph3-l mw8-l mh4-m mh2 black-80">
        <Header />
        <Transition location={location}>{children}</Transition>
        <Footer />
      </div>
    </>
  )
}

export default Layout
