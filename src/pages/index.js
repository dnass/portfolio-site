import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import Link from '../components/link'

export default ({ data }) => (
  <Layout>
    <main className="mb3 flex flex-wrap">
      <Helmet title="Portfolio" />
      {data.allProjectsJson.edges.map(({ node }) => (
        <Link key={node.title} {...node} />
      ))}
    </main>
  </Layout>
)

export const query = graphql`
  {
    allProjectsJson {
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
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
