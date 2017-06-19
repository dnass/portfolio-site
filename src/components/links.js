import React, {Component} from 'react'
import Link from './link'
import data from '../data.json';

const createLinks = articles => articles.map(article => {
  return <Link title={article.title} url={article.url} pub={article.pub} img={article.img} key={article.title}/>
});

class Links extends Component {
  render() {
    return (
      <section className='cf w-75-ns w-90 center mv4'>
        {createLinks(data.portfolio_links)}
      </section>
    )
  }
}

export default Links;
