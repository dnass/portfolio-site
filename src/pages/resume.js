import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Title from '../layouts/title'
import Contact from '../components/resume/contact'
import Section from '../components/resume/section'
import Job from '../components/resume/job'
import Position from '../components/resume/position'
import { linkUp } from '../util'

const Resume = ({ data }) => (
  <main className="mb3 flex flex-wrap bt b--light-gray">
    <section className="w-100 pt5 pb2 flex-ns justify-center">
      <Contact text={data.site.siteMetadata.location} icon="map-marker-alt" />
      <Contact text={data.site.siteMetadata.phone} icon="phone" />
      <Contact text={data.site.siteMetadata.email} icon="envelope" />
    </section>
    <Section title="experience">
      {data.allJobsJson.edges.map(
        ({ node: { company, location, description, positions } }) => (
          <Fragment key={company}>
            <Job name={company} location={location} />
            {positions.map(({ dates, title }) => (
              <Position key={title} title={title} dates={dates} />
            ))}
            <div
              className="w-70-ns mt2 f5 lh-copy"
              dangerouslySetInnerHTML={{ __html: linkUp(description) }}
            />
          </Fragment>
        )
      )}
    </Section>
    <Section title="Education">
      {data.allEducationJson.edges.map(
        ({ node: { school, location, dates, degree, description } }) => (
          <Fragment key={school}>
            <Job name={school} location={location} />
            <Position title={degree} dates={dates} />
            <div
              className="w-70-ns mt2 f5 lh-copy"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Fragment>
        )
      )}
    </Section>
    <Section title="Skills">
      <div className="mh5-ns flex flex-wrap justify-between">
        {data.allSkillsJson.edges.map(({ node: { skill } }) => (
          <div className="mh4 mb3" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </Section>
  </main>
)

export default Resume

export const query = graphql`
  {
    site {
      siteMetadata {
        phone
        email
        location
      }
    }
    allJobsJson {
      edges {
        node {
          company
          location
          description
          positions {
            title
            dates
          }
        }
      }
    }
    allEducationJson {
      edges {
        node {
          school
          location
          dates
          degree
          description
        }
      }
    }
    allSkillsJson {
      edges {
        node {
          skill
        }
      }
    }
  }
`

export const Head = () => (
  <>
    <Title page="Résumé" />
    <meta name="robots" content="noindex" />
  </>
)
