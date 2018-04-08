import React from 'react'
import Helmet from 'react-helmet'
import { nest } from 'd3-collection'
import Category from './category'
import data from '../data.json'

const Links = () => (
  <main>
    <Helmet title="Visual Journalist" />
    {nest()
      .key(d => d.category)
      .entries(data)
      .map(category => <Category name={category.key} {...category} />)}
  </main>
)

export default Links
