import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  const {
    site: {
      siteMetadata: { title, subtitle }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  return (
    <header className="ph4-l mt5-ns mb4 mt4">
      <a href="/" className="tl-l tc dib-l db no-underline grow">
        <h1 className="f1-ns f2 fw8 black-80 ttu ma0 mb2">{title}</h1>
        <h2
          className="f3-ns f5 fw4 black-50 ttu ma0 tracked"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        ></h2>
      </a>
    </header>
  )
}

export default Header
