import React from 'react'
import { graphql } from 'gatsby'
import Title from '../components/title'
import Section from '../components/resumesection'

export default ({ data }) => {
  return (
    <main className="mb3 flex flex-wrap bt b--light-gray">
      <Title page="Resume" />
      <Section title="experience">
        {data.allJobsJson.edges.map(
          ({ node: { company, location, description, positions } }) => (
            <>
              <h4 className="db w-70-ns ma0 mb3 f4">
                {company}
                &ensp;&bull;&ensp;
                {location}
              </h4>
              {positions.map(({ dates, title }) => (
                <h5 className="w-100 ma0 mb2-ns mb3 f5 flex-ns flex-row-ns justify-between-ns items-center-ns">
                  <span className="w-25-ns dib-ns db tr-ns f6 fw3 mb0-ns mb1 black-50">
                    {dates}
                  </span>
                  <span className="w-70-ns dib-ns db ma0 fw4">{title}</span>
                </h5>
              ))}
              <div
                className="w-70-ns mt2 f5 lh-copy"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </>
          )
        )}
      </Section>
      <Section title="Education">
        {data.allEducationJson.edges.map(
          ({ node: { school, location, dates, degree } }) => (
            <>
              <h4 className="db w-70-ns ma0 mb3 f4">
                {school}
                &ensp;&bull;&ensp;
                {location}
              </h4>
              <h5 className="w-100 ma0 mb2-ns mb3 f5 flex-ns flex-row-ns justify-between-ns items-center-ns">
                <span className="w-25-ns dib-ns db tr-ns f6 fw3 mb0-ns mb1 black-50">
                  {dates}
                </span>
                <span className="w-70-ns dib-ns db ma0 fw4">{degree}</span>
              </h5>
            </>
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
}

export const query = graphql`
  {
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
