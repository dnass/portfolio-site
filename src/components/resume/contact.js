import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = ({ text, icon }) => (
  <div className="mh3 mb0-ns mb2">
    <FontAwesomeIcon icon={icon} className="mr2 black-30" />
    {text}
  </div>
)

export default Contact
