import React from 'react'
import NavItem from './navitem'
import data from '../data.json'

const createNav = links => links.map(link => <NavItem title={link.title} url={link.url} key={link.title} />)

const Nav = () => (
  <nav className='tc mt4 fr-l'>
    {createNav(data.nav_links)}
  </nav>
)

export default Nav
