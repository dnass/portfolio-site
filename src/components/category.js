import React from 'react'
import Link from './link'

const Links = props => (
  <section className="mb4-ns mb3 flex flex-wrap">
    <h3 className="f4-ns f5 fw6 ttu ma0 mt3 mb1 tc tracked w-100 black-70">
      {props.name}
    </h3>
    {props.values
      .filter(article => !article.hide)
      .map(article => <Link key={article.title} {...article} />)}
  </section>
)

export default Links
