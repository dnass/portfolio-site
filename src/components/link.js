import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { linkUp } from '../util'

const Link = ({ title, url, image, alt, category, date, role, info }) => (
  <div className="ph4-ns ph2 pv4 flex flex-column flex-row-ns bt b--light-gray">
    <OutboundLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-30-ns w-100 mr4-ns mb1-ns mb3 grow"
    >
      <GatsbyImage
        className="ba br1 shadow"
        image={getImage(image.src)}
        alt={alt}
        loading="lazy"
      />
    </OutboundLink>
    <div className="w-70-ns w-100">
      <OutboundLink
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        alt={alt}
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
        {[category, date].filter(Boolean).join(' • ')}
      </h4>
      <p
        className="ma0 lh-copy"
        dangerouslySetInnerHTML={{ __html: linkUp(info) }}
      />
    </div>
  </div>
)

export default Link
