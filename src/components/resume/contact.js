import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ text, icon }) => (
  <div className="mh3 mb0-ns mb2">
    <FontAwesomeIcon icon={icon} className="mr2 black-30" />
    {text}
  </div>
)
