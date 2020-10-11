import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default ({ page }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = `${site.siteMetadata.title} ⧉ ${page}`

  return (
    <Helmet title={title}>
      <html lang="en" />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
    </Helmet>
  )
}
