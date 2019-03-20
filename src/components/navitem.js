import React from 'react'
import { Link } from 'gatsby'

export default ({ path, title }) => (
  <Link
    activeClassName="fw7 br1 bg-black-50 white"
    className="fw5 ph3 pv1 lh-solid no-underline black-50 ttu"
    to={path}
  >
    {title}
  </Link>
)
