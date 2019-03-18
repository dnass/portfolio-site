import 'tachyons'
import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import './icons'
import './style.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        titleTemplate={`${site.siteMetadata.title} | %s`}
        meta={[
          {
            name: 'description',
            content:
              'Visual journalist Daniel Nass creates interactive and data-driven stories.'
          },
          { name: 'author', content: 'Daniel Nass' }
        ]}
      />
      <div className="avenir center-l ph3-l mw8-l mh4-m mh2">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}
