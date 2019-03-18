import React from 'react'
import { Link } from 'gatsby'

export default ({ path, title }) => (
  <Link
    activeClassName="fw7 bb bw1"
    className="mh3 fw5 lh-solid no-underline black-50 ttu"
    to={path}
  >
    {title}
  </Link>
)
