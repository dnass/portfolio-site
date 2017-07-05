import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = props => (
  <NavLink exact activeClassName='b' className='ph3 no-underline black-50 ttu' to={props.path}>{props.title}</NavLink>
)

export default NavItem
