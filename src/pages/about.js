import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Title from '../layouts/title'
import { linkUp } from '../util'

export default ({ data: { file, allAboutJson } }) => (
  <main className="pv4 f4 lh-copy flex flex-column flex-row-l items-center bt b--light-gray">
    <Title page="About" />
    <div className="w-100 w-50-l mr4-l mb0-l mb4">
      <Img
        className="br3"
        fluid={file.childImageSharp.fluid}
        alt="A photograph of Daniel Nass"
      />
    </div>
    <div className="w-100 w-50-l ml4-l">
      {allAboutJson.edges.map(({ node: { text } }) => (
        <p class="mb4 mt0" dangerouslySetInnerHTML={{ __html: linkUp(text) }} />
      ))}
    </div>
  </main>
)

export const query = graphql`
  {
    allAboutJson {
      edges {
        node {
          text
        }
      }
    }
    file(name: { eq: "daniel-nass" }) {
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
