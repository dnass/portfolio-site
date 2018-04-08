import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItem from './navitem'
import routes from '../routes'

const Header = () => (
  <header className="ph3-l mt5-ns mb4 mt4">
    <NavLink to="/" className="tl-l tc dib-l db no-underline">
      <h1 className="f1-ns f2 fw8 black-80 ttu ma0 mb2">Daniel Nass</h1>
      <h2 className="f3-ns f4 fw4 black-50 ttu ma0 tracked">Visual journalist</h2>
    </NavLink>
    <nav className="tc mt4 fr-l">
      {routes
        .filter(route => route.title !== 'Project')
        .map((route, i) => <NavItem key={i} {...route} />)}
    </nav>
  </header>
)

export default Header
