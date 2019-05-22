import React from 'react'
import { Link } from 'gatsby'

export default ({ path, title }) => (
  <Link
    activeClassName="bw2 fw7"
    className="fw4 ph2 pv1 mh2 lh-solid no-underline black-50 ttu bb b--black-50 nav"
    to={path}
  >
    {title}
  </Link>
)
