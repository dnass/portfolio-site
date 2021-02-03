import React from 'react'
import { graphql } from 'gatsby'
import Link from '../components/link'
import Title from '../layouts/title'
import Img from 'gatsby-image'
import { linkUp } from '../util'

export default ({ data: { allAboutJson, allProjectsJson, file } }) => (
  <main className="mb3 flex flex-wrap">
    <Title page="Portfolio" />
    <section className="ph4-ns ph2 pt5-ns pt4 pb5 f4 lh-copy flex flex-column flex-row-l items-center bt b--light-gray">
      <div className="w-100 w-50-l mr4-l mb0-l mb4">
        <Img
          className="br3"
          fluid={file.childImageSharp.fluid}
          alt="A photograph of Daniel Nass"
        />
      </div>
      <div className="w-100 w-50-l ml4-l">
        {allAboutJson.edges.map(({ node: { text } }, i) => (
          <p
            className={`mt0 ${
              i === allAboutJson.edges.length - 1 ? 'mb0' : 'mb4'
            }`}
            dangerouslySetInnerHTML={{ __html: linkUp(text) }}
          />
        ))}
      </div>
    </section>
    <section>
      <h3 className="ttu tracked black-50 fw4 f3 tc mv3">Portfolio</h3>
      {allProjectsJson.edges.map(({ node }) => (
        <Link key={node.title} {...node} />
      ))}
    </section>
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
    allProjectsJson(filter: { hide: { ne: true } }) {
      edges {
        node {
          title
          category
          date
          alt
          role
          info
          url
          image {
            src {
              childImageSharp {
                fluid(maxWidth: 275, maxHeight: 275) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
