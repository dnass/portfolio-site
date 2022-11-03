import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Title = ({ page }) => {
  const { site, allFile } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
      allFile(filter: { name: { eq: "share" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)

  const title = `${site.siteMetadata.title} ⧉ ${page}`

  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="author" content="Daniel Nass" />
      <meta name="description" content={site.siteMetadata.description} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta
        property="og:image"
        content={`https://danielnass.net${allFile.edges[0].node.publicURL}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content={`https://danielnass.net${allFile.edges[0].node.publicURL}`}
      />
    </>
  )
}

export default Title
