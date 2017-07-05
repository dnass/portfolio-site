import React from 'react'
import NavItem from './navitem'
import routes from '../routes'


const Nav = () => (
  <nav className='tc mt4 fr-l'>
    {routes.map((route, i) => (
      <NavItem key={i} {...route} />
    ))}
  </nav>
)

export default Nav;
