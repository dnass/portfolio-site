import React from 'react'
import { OutboundLink } from 'react-ga'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Contact links transmitted to GA as outbound events

const ContactLink = ({ link, alt, icon }) => (
  <OutboundLink
    eventLabel={alt}
    className="mh3 black-80"
    to={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={alt}
  >
    <FontAwesomeIcon className="grow" icon={icon} size="3x" />
  </OutboundLink>
)

export default ContactLink
