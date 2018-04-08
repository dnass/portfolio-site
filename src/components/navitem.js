import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = props => (
  <NavLink
    exact
    activeClassName="fw7"
    className="ph3 fw5 lh-solid no-underline black-50 ttu"
    to={props.path}
  >
    {props.title}
  </NavLink>
)

export default NavItem
