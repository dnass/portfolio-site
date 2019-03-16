import React from 'react'
import LazyLoad from 'react-lazy-load'
import { OutboundLink } from 'react-ga'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Link = ({ title, url, img, alt, category, date, role, info }) => (
  <section className="w-100 mv3 ph4-ns ph2 pt4 black-80 flex flex-column flex-row-ns bt b--light-gray">
    <LazyLoad
      className="w-40-ns w-100 mr4-ns mb0-ns mb3 dim"
      offsetVertical={400}
      debounce={false}
      throttle={100}
    >
      <OutboundLink
        eventLabel={title}
        to={url}
        alt={title}
        target="_blank"
        rel="noopener noreferrer"
        className="db aspect-ratio aspect-ratio--1x1"
      >
        <figure
          className="aspect-ratio--object cover bg-center-left ma0"
          style={{ backgroundImage: `url(../img/${img})` }}
          aria-label={alt}
        />
      </OutboundLink>
    </LazyLoad>

    <div className="w-70-ns w-100">
      <OutboundLink
        eventLabel={title}
        to={url}
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
