import React from 'react'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Link = ({ title, url, image, alt, category, date, role, info }) => (
  <section className="w-100 mv3 ph4-ns ph2 pt4 black-80 flex flex-column flex-row-ns bt b--light-gray">
    <OutboundLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-30-ns w-100 mr4-ns mb0-ns mb3 grow"
    >
      <Img
        className="ba b--gray aspect-ratio aspect-ratio--1x1"
        style={{ boxShadow: '5px 5px 0 #0b4182' }}
        fluid={image.src.childImageSharp.fluid}
        alt={title}
      />
    </OutboundLink>
    <div className="w-70-ns w-100">
      <OutboundLink
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        alt={title}
        className="dib mb2"
      >
        <h3
          className="di b f4 lh-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <FontAwesomeIcon className="ml2" icon="external-link-alt" />
      </OutboundLink>
      <h4 className="ma0 mb3 f5 fw5 black-50">
        {[category, date, role].filter(Boolean).join(' • ')}
      </h4>
      <p
        className="ma0 lh-copy"
        dangerouslySetInnerHTML={{
          __html: info
            .split('a href')
            .join("a target='_blank' rel='noopener noreferrer' href")
        }}
      />
    </div>
  </section>
)

export default Link
