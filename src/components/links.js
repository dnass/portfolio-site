import React from 'react'
import Helmet from 'react-helmet'
import Link from './link'
import data from '../data.json'

const Links = () => (
  <main className="mb3 flex flex-wrap">
    <Helmet title="Portfolio" />
    {data.filter(article => !article.hide).map(article => (
      <Link key={article.title} {...article} />
    ))}
  </main>
)

export default Links
