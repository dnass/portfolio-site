import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ path, title }) => (
  <NavLink
    exact
    activeClassName="fw7 bb bw2"
    className="mh3 fw5 lh-solid no-underline black-50 ttu"
    to={path}
  >
    {title}
  </NavLink>
)

export default NavItem
