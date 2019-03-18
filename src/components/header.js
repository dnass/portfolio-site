import React from 'react'
import NavItem from '../components/navitem'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { site } = useStaticQuery(graphql`
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
    <header className="ph3-l mt5-ns mb4 mt4">
      <Link to="/" className="tl-l tc dib-l db no-underline">
        <h1 className="f1-ns f2 fw8 black-80 ttu ma0 mb2">
          {site.siteMetadata.title}
        </h1>
        <h2 className="f3-ns f4 fw4 black-50 ttu ma0 tracked">
          {site.siteMetadata.subtitle}
        </h2>
      </Link>
      <nav className="tc mt4 fr-l">
        <NavItem path={'/'} title={'Work'} />
        <NavItem path={'/about/'} title={'About'} />
      </nav>
    </header>
  )
}
