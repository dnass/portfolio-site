import React from 'react'
import LazyLoad from 'react-lazy-load'
import { OutboundLink } from 'react-ga'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Link = props => (
  <section className="w-100 mv4 ph3-ns ph2 black-80 flex flex-column flex-row-ns">
    <LazyLoad
      className="w-40-ns w-100 mr4-ns mb0-ns mb3 dim"
      offsetVertical={400}
      debounce={false}
      throttle={100}
    >
      <OutboundLink
        eventLabel={props.title}
        to={props.url}
        alt={props.title}
        target="_blank"
        rel="noopener noreferrer"
        className="db aspect-ratio aspect-ratio--1x1"
      >
        <figure
          className="aspect-ratio--object cover bg-center-left ma0"
          style={{ backgroundImage: `url(../img/${props.img})` }}
          aria-label={props.alt}
        />
      </OutboundLink>
    </LazyLoad>

    <div className="w-70-ns w-100">
      <h3 className="b ma0 mb2 f4 lh-title">
        <OutboundLink
          eventLabel={props.title}
          to={props.url}
          target="_blank"
          rel="noopener noreferrer"
          alt={props.title}
        >
          {props.title}
          <FontAwesomeIcon className="ml2" icon="external-link-alt" />
        </OutboundLink>
      </h3>
      <h4 className="ma0 mb2 f5 fw5 black-50">
        {props.category}
        {props.role && ' • Role: ' + props.role}{' '}
      </h4>
      <p
        className="ma0 mb3 lh-copy"
        dangerouslySetInnerHTML={{ __html: props.info }}
      />
    </div>
  </section>
)

export default Link
