import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Title from '../components/title'

export default ({ data }) => (
  <main className="pv4 f4 lh-copy flex flex-column flex-row-l items-center bt b--light-gray">
    <Title page="About" />
    <div className="w-100 w-60-l mr4-l mb0-l mb4">
      <Img
        className="br3"
        fluid={data.file.childImageSharp.fluid}
        alt="A photograph of Daniel Nass"
      />
    </div>
    <div className="w-100 w-40-l ml4-l">
      <p className="mb4 mt0">
        <span className="fw7">Daniel Nass</span> is associate editor for data
        and graphics at{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.thetrace.org/author/dnass/"
        >
          The Trace
        </a>
        , where he creates data-driven stories, news apps, charts, and more.
        Before that, he was the web editor of{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.phnompenhpost.com/author/daniel-nass/85381"
        >
          The Phnom Penh Post
        </a>
        . His work has also appeared in The New Yorker and FiveThirtyEight. He
        lives in Brooklyn.
      </p>
      <p className="mv0">
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
        .
      </p>
    </div>
  </main>
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
