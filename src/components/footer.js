import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ContactLink from './contactlink'

export default () => {
  const { allContactsJson } = useStaticQuery(graphql`
    {
      allContactsJson {
        edges {
          node {
            icon
            prefix
            alt
            link
          }
        }
      }
    }
  `)

  return (
    <footer className="tc mb5-ns mb4 pt4 bt b--light-gray">
      {allContactsJson.edges.map(({ node }) => (
        <ContactLink key={node.alt} {...node} />
      ))}
    </footer>
  )
}
