import React from 'react'
import ContactLink from './contactlink'

const links = [
  {
    icon: 'envelope-square',
    alt: 'email',
    link: 'mailto:dnlnss@gmail.com'
  },
  {
    icon: ['fab', 'twitter-square'],
    alt: 'twitter',
    link: 'https://twitter.com/dnlnss'
  },
  {
    icon: ['fab', 'github-square'],
    alt: 'github',
    link: 'https://github.com/dnass'
  },
  {
    icon: ['fab', 'linkedin'],
    alt: 'linkedin',
    link: 'https://linkedin.com/in/daniel-nass-15b7b4109'
  }
]

const Footer = () => (
  <footer className="tc mb5-ns mb4 pt4 bt b--light-gray">
    {links.map(link => (
      <ContactLink key={link.alt} {...link} />
    ))}
  </footer>
)

export default Footer
