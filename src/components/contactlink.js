import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactLink = ({ link, alt, icon, prefix }) => (
  <OutboundLink
    className="mh3 black-80"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={alt}
  >
    <FontAwesomeIcon className="grow" icon={[prefix, icon]} size="3x" />
  </OutboundLink>
)

export default ContactLink
