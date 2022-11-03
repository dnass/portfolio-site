import React from 'react'
import { graphql } from 'gatsby'
import Link from '../components/link'
import Title from '../layouts/title'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { linkUp } from '../util'

const Index = ({ data: { allAboutJson, allProjectsJson, file } }) => (
  <main className="mb3 flex flex-wrap">
    <section className="ph4-ns ph2 pt5-ns pt4 pb5 f4 lh-copy flex flex-column flex-row-l items-center bt b--light-gray">
      <div className="w-100 w-50-l mr4-l mb0-l mb4">
        <GatsbyImage
          image={getImage(file)}
          className="br3"
          alt="A photograph of Daniel Nass"
          loading="eager"
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

export default Index

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
        gatsbyImageData(width: 640, layout: CONSTRAINED, placeholder: BLURRED)
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
                gatsbyImageData(
                  width: 275
                  height: 275
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`

export const Head = () => <Title page="Portfolio" />
