import React from 'react'
import { OutboundLink } from 'react-ga'
import FontAwesome from 'react-fontawesome'

//Contact links transmitted to GA as outbound events

const ContactLink = props => (
  <OutboundLink eventLabel={props.alt} className='mh3 black-80' to={props.link} target='_blank' rel='noopener noreferrer' aria-label={props.alt}>
    <FontAwesome className='grow' name={props.icon} size='3x'/>
  </OutboundLink>
)

export default ContactLink;
