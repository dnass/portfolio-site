import React from 'react'
import ContactLink from './contactlink'
import data from '../data.json'

const createIcons = contacts => contacts.map(contact => (
   <ContactLink icon={contact.icon} link={contact.link} alt={contact.alt} key={contact.alt}/>
  )
)

const Footer = () => (
  <footer className='tc mb5-ns mb4'>
    {createIcons(data.contact_icons)}
  </footer>
)

export default Footer;
