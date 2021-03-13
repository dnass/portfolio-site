import 'tachyons'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import smartquotes from 'smartquotes'
import Header from '../components/header'
import Footer from '../components/footer'
import Transition from './transition'
import './style.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

const Layout = ({ children, location }) => {
  useEffect(smartquotes)

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

  return (
    <>
      <Helmet>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="author" content="Daniel Nass" />
        <meta
          property="og:description"
          content={site.siteMetadata.description}
        />
        <meta
          property="og:image"
          content={`https://danielnass.net${allFile.edges[0].node.publicURL}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={`https://danielnass.net${allFile.edges[0].node.publicURL}`}
        />
      </Helmet>
      <div className="avenir center-l ph3-l mw8-l mh4-m mh2 black-80">
        <Header />
        <Transition location={location}>{children}</Transition>
        <Footer />
      </div>
    </>
  )
}

export default Layout
