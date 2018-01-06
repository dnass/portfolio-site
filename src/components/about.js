import React from 'react'
import Helmet from 'react-helmet'

const About = () => (
  <section className="cf center mt4 mb5 ph3-l ph4 f4 black-80 lh-copy flex flex-column flex-row-l items-center">
    <Helmet title="About" />
    <div className="w-100 w-60-l mr4-l mb0-l mb3">
      <img className="db" src="/img/daniel-nass.jpg" alt="Daniel Nass" />
    </div>
    <div className="w-100 w-40-l ml4-l">
      <span className="b">Daniel Nass</span> creates interactive and data-driven
      stories at{' '}
      <a
        className="no-underline"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.thetrace.org/author/dnass/"
      >
        The Trace
      </a>. Previously, he was the web editor of{' '}
      <a
        className="no-underline"
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.phnompenhpost.com/author/daniel-nass/85381"
      >
        The Phnom Penh Post
      </a>. He lives in Brooklyn.
    </div>
  </section>
)

export default About
