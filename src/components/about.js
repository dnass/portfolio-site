import React from 'react'
import Helmet from 'react-helmet'

const About = () => (
  <main className="mt4 mb5 ph3-ns ph2 f4 black-80 lh-copy flex flex-column flex-row-l items-center">
    <Helmet title="About" />
    <div className="w-100 w-60-l mr4-l mb0-l">
      <img className="db" src="/img/daniel-nass.jpg" alt="Daniel Nass" />
    </div>
    <div className="w-100 w-40-l ml4-l">
      <p>
        <span className="fw8">Daniel Nass</span> creates interactive and data-driven
        stories at{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.thetrace.org/author/dnass/"
        >
          The Trace
        </a>. Before that, he was the web editor of{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.phnompenhpost.com/author/daniel-nass/85381"
        >
          The Phnom Penh Post
        </a>. He lives in Brooklyn.
      </p>
      <p>
        Get in touch!{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/dnlnss">
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
)

export default About
