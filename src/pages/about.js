import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts'

export default ({ data }) => (
  <Layout>
    <main className="mt4 mb5 f4 black-80 lh-copy flex flex-column flex-row-l items-center">
      <Helmet title="About" />
      <div className="w-100 w-60-l mr4-l mb0-l">
        <Img
          className="db"
          fluid={data.file.childImageSharp.fluid}
          alt="A photograph of Daniel Nass"
        />
      </div>
      <div className="w-100 w-40-l ml4-l">
        <p>
          <span className="fw8">Daniel Nass</span> creates data-driven stories,
          interactives, and news apps at{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.thetrace.org/author/dnass/"
          >
            The Trace
          </a>
          . Before that, he was the web editor of{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.phnompenhpost.com/author/daniel-nass/85381"
          >
            The Phnom Penh Post
          </a>
          . He lives in Brooklyn.
        </p>
        <p>
          Get in touch!{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/dnlnss"
          >
            @dnlnss
          </a>{' '}
          or{' '}
          <a
            className="dib"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:dnass@thetrace.org"
          >
            dnass [at] thetrace [dot] org
          </a>
        </p>
      </div>
    </main>
  </Layout>
)

export const query = graphql`
  query {
    file(name: { eq: "daniel-nass" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
