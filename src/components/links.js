import React from 'react'
import Link from './link'
import data from '../data.json'

const createLinks = articles => articles.map(article =>
  (
     <Link
       title={article.title}
       url={article.url}
       pub={article.pub}
       img={article.img}
       key={article.title}
     />
  )
)

const Links = () => (
  <section className='cf mb4-ns mb3'>
    {createLinks(data.portfolio_links)}
  </section>
)

export default Links;
