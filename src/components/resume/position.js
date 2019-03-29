import React from 'react'

export default ({ title, dates }) => (
  <h5 className="w-100 ma0 mb2-ns mb3 f5 flex-ns flex-row-ns justify-between-ns items-center-ns">
    <span className="w-25-ns dib-ns db tr-ns f6 fw3 mb0-ns mb1 black-50">
      {dates}
    </span>
    <span className="w-70-ns dib-ns db ma0 fw5">{title}</span>
  </h5>
)
