import React from 'react'
import Helmet from 'react-helmet'

export default ({ title }) => (
  <Helmet title={title}>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
  </Helmet>
)
