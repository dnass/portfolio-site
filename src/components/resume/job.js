import React from 'react'

const Job = ({ name, location }) => (
  <h4 className="db w-70-ns ma0 mb2 f4 fw6">
    {name}
    <span className="ml3 f6 fw3 black-50">{location}</span>
  </h4>
)

export default Job
