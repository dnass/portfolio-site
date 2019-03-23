import React from 'react'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Link = ({ title, url, image, alt, category, date, role, info }) => (
  <section className="ph4-ns ph2 pv4 flex flex-column flex-row-ns bt b--light-gray">
    <OutboundLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-30-ns w-100 mr4-ns mb1-ns mb3 grow"
    >
      <Img
        className="ba br1 shadow aspect-ratio aspect-ratio--1x1"
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
        className="dib mb2 grow-parent"
      >
        <h3
          className="di b f4 lh-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <span className="nowrap">
          &#65279;
          <FontAwesomeIcon
            className="ml2 grow-child"
            style={{ marginBottom: '.09rem' }}
            icon="external-link-alt"
          />
        </span>
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
