import React from 'react'

const NoMatch = ({ location }) => (
  <h3 className='tc black-60 mv5 normal'>404: Nothing found at {location.pathname}</h3>
)

export default NoMatch;
