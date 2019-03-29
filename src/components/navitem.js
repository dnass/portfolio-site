import React from 'react'
import { Link } from 'gatsby'

export default ({ path, title }) => (
  <Link
    activeClassName="fw7 bg-black-50 white"
    className="fw5 ph3 pv1 br1 mh1 lh-solid no-underline black-50 ttu ba b--black50"
    to={path}
  >
    {title}
  </Link>
)
